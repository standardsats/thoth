import "./App.css";
import { MainScreen } from "./new/main-screen/MainScreen.tsx";
import { Header } from "./new/header/Header.tsx";
import { HowItWorks } from "./new/how-it-works/HowItWorks.tsx";
import { ProductAndServices } from "./new/products-and-services/ProductsAndServices.tsx";
import { Photo } from "./new/photo/Photo.tsx";
import { UseCasesOfOurProducts } from "./new/use-cases-of-our-products/UseCasesOfOurProducts.tsx";
import { Element } from "react-scroll";
import { Footer } from "./new/Footer/Footer.tsx";

const sections = [
  { id: "1", title: "How it Works" },
  { id: "2", title: "Photo" },
  { id: "3", title: "Products and Services" },
  { id: "4", title: "Use Cases of Our Products" },
];
export const App = () => {
  return (
    <>
      {/*<Header sections={sections} />*/}
      <MainScreen />
      {/*{sections.map((section) => {*/}
      {/*  if (section.id === "1") {*/}
      {/*    return (*/}
      {/*      <Element key={section.id} name={section.id}>*/}
      {/*        <HowItWorks />*/}
      {/*      </Element>*/}
      {/*    );*/}
      {/*  }*/}
      {/*  if (section.id === "2") {*/}
      {/*    return (*/}
      {/*      <Element key={section.id} name={section.id}>*/}
      {/*        <Photo />*/}
      {/*      </Element>*/}
      {/*    );*/}
      {/*  }*/}
      {/*  if (section.id === "3") {*/}
      {/*    return (*/}
      {/*      <Element key={section.id} name={section.id}>*/}
      {/*        <ProductAndServices />*/}
      {/*      </Element>*/}
      {/*    );*/}
      {/*  }*/}
      {/*  if (section.id === "4") {*/}
      {/*    return (*/}
      {/*      <Element key={section.id} name={section.id}>*/}
      {/*        <UseCasesOfOurProducts />*/}
      {/*      </Element>*/}
      {/*    );*/}
      {/*  }*/}
      {/*  return null;*/}
      {/*})}*/}
      {/*<Footer />*/}
    </>
  );
}