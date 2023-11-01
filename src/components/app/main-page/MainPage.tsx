import { FC } from "react";
import { MainScreen } from "./main-screen/MainScreen.tsx";
import { HowItWorks } from "./how-it-works/HowItWorks.tsx";
//import { Photo } from "./photo/Photo.tsx";
import { ProductAndServices } from "./products-and-services/ProductsAndServices.tsx";
import { UseCasesOfOurProducts } from "./use-cases-of-our-products/UseCasesOfOurProducts.tsx";
import {
  SectionsType,
  sectionOneId,
  //sectionTwoId,
  sectionThreeId,
  sectionFourId,
} from "@/assets/constants/app/App.ts";

//Types
type MainPageProps = {
  sections: SectionsType;
};

//Component
export const MainPage: FC<MainPageProps> = ({ sections }) => {
  return (
    <>
      <MainScreen />
      {sections.map((section) => {
        if (section.id === sectionOneId) {
          return (
            <HowItWorks
              key={section.id}
              id={section.id}
              title={section.title}
            />
          );
        }
        //if (section.id === sectionTwoId) {
        //  return (
        //    <Photo key={section.id} id={section.id} title={section.title} />
        //  );
        //}
        if (section.id === sectionThreeId) {
          return (
            <ProductAndServices
              key={section.id}
              id={section.id}
              title={section.title}
            />
          );
        }
        if (section.id === sectionFourId) {
          return (
            <UseCasesOfOurProducts
              key={section.id}
              id={section.id}
              title={section.title}
            />
          );
        }
        return null;
      })}
    </>
  );
};
