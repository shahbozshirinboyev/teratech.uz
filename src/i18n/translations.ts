import type { Dictionary, LanguageCode } from "./types";
import uz from "./uz";
import ru from "./ru";

// Til kodi -> lug'at. Yangi til qo'shganda shu yerga qatorni qo'shing.
export const translations: Record<LanguageCode, Dictionary> = {
  uz,
  ru,
};

export * from "./types";
