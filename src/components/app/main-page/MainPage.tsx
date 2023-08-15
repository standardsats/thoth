import { FC, RefObject } from "react";
import { MainScreen } from "./main-screen/MainScreen.tsx";
import { HowItWorks } from "./how-it-works/HowItWorks.tsx";
import { Photo } from "./photo/Photo.tsx";
import { ProductAndServices } from "./products-and-services/ProductsAndServices.tsx";
import { UseCasesOfOurProducts } from "./use-cases-of-our-products/UseCasesOfOurProducts.tsx";

//Types
type Props = {
  mainScreenRef: RefObject<HTMLElement>;
};

//Component
export const MainPage: FC<Props> = ({ mainScreenRef }) => {
  //Data
  const sections = [
    { id: "1", title: "How it Works" },
    { id: "2", title: "Photo" },
    { id: "3", title: "Products and Services" },
    { id: "4", title: "Use Cases of Our Products" },
  ];

  return (
    <>
      <MainScreen ref={mainScreenRef} />
      {sections.map((section) => {
        if (section.id === "1") {
          return <HowItWorks key={section.id} id={section.id} />;
        }
        if (section.id === "2") {
          return <Photo key={section.id} id={section.id} />;
        }
        if (section.id === "3") {
          return <ProductAndServices key={section.id} id={section.id} />;
        }
        if (section.id === "4") {
          return <UseCasesOfOurProducts key={section.id} id={section.id} />;
        }
        return null;
      })}
    </>
  );
};
