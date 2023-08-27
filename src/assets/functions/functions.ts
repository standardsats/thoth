import { v4 as uuidv4 } from "uuid";

export const generateUniqueId = () => {
  return uuidv4();
};

export const scrollTo = (top: number) => {
  window.scrollTo({
    top,
    behavior: "smooth",
  });
};
