<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$botToken = '8926549753:AAFlNIorYocBnnDKSWy65cdrZ3YjmwE2j5E';
$chatId = '-1003990315726';

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody, true);

if (!is_array($payload)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid JSON']);
  exit;
}

function text_value($value, $fallback = 'Kiritilmagan') {
  if (!isset($value) || $value === '') {
    return $fallback;
  }

  return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$plan = isset($payload['plan']) && is_array($payload['plan']) ? $payload['plan'] : [];
$features = 'Kiritilmagan';

if (isset($plan['features']) && is_array($plan['features']) && count($plan['features']) > 0) {
  $featureLines = [];
  foreach ($plan['features'] as $feature) {
    $featureLines[] = '• ' . text_value($feature);
  }
  $features = implode("\n", $featureLines);
}

$message = implode("\n", [
  '<b>Yangi buyurtma</b>',
  '',
  '<b>Tarif:</b> ' . text_value($plan['name'] ?? null, 'Tanlanmagan'),
  '<b>Narx:</b> ' . text_value($plan['price'] ?? null),
  '<b>Xarakteristika:</b>',
  $features,
  '',
  '<b>Ism:</b> ' . text_value($payload['name'] ?? null),
  '<b>Telefon:</b> ' . text_value($payload['phone'] ?? null),
  '<b>Maqsad:</b> ' . text_value($payload['purpose'] ?? null),
]);

$telegramPayload = json_encode([
  'chat_id' => $chatId,
  'text' => $message,
  'parse_mode' => 'HTML',
  'disable_web_page_preview' => true,
]);

$ch = curl_init('https://api.telegram.org/bot' . $botToken . '/sendMessage');
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
  CURLOPT_POSTFIELDS => $telegramPayload,
  CURLOPT_TIMEOUT => 15,
]);

$response = curl_exec($ch);
$error = curl_error($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false || $statusCode < 200 || $statusCode >= 300) {
  http_response_code(500);
  echo json_encode([
    'error' => 'Telegramga yuborilmadi',
    'details' => $error ?: $response,
  ]);
  exit;
}

echo json_encode(['ok' => true]);
