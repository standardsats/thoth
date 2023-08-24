import { TFunction } from "i18next";
import { generateUniqueId } from "@/assets/functions/functions.ts";

export const sectionOneId = generateUniqueId();
export const sectionTwoId = generateUniqueId();
export const sectionThreeId = generateUniqueId();
export const sectionFourId = generateUniqueId();

export type SectionType = {
  id: string;
  title: string;
};

export type SectionsType = SectionType[];

export const getAppData = (t: TFunction) => {
  return [
    { id: sectionOneId, title: t("sections.one") },
    // { id: sectionTwoId, title: t("sections.two") },
    { id: sectionThreeId, title: t("sections.three") },
    { id: sectionFourId, title: t("sections.four") },
  ];
};
