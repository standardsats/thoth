import { TFunction } from "i18next";
import { baseName, Image } from "@/assets/constants/main.ts";
import { generateUniqueId } from "@/assets/functions/functions.ts";

export type PhotosData = (Image & { id: string })[];

export type PhotoSlideArrowsData = {
  left: Image;
  right: Image;
};

export type PhotoData = {
  photos: PhotosData;
  photoSlideArrows: PhotoSlideArrowsData;
};

export const photosImages = {
  one: `${baseName}/images/test/test-photo.jpg`,
  two: `${baseName}/images/test/test-photo.jpg`,
  three: `${baseName}/images/test/test-photo.jpg`,
  leftArrow: `${baseName}/images/main-page/photo/photo-slider/arrow-left.svg`,
  rightArrow: `${baseName}/images/main-page/photo/photo-slider/arrow-right.svg`,
};

export const getPhotoData = (t: TFunction) => {
  return {
    photos: [
      {
        id: generateUniqueId(),
        src: photosImages.one,
        alt: t("photos.one"),
      },
      {
        id: generateUniqueId(),
        src: photosImages.two,
        alt: t("photos.two"),
      },
      {
        id: generateUniqueId(),
        src: photosImages.three,
        alt: t("photos.three"),
      },
    ],
    photoSlideArrows: {
      left: {
        src: photosImages.leftArrow,
        alt: t("photos.arrowLeft"),
      },
      right: {
        src: photosImages.rightArrow,
        alt: t("photos.arrowRight"),
      },
    },
  };
};
