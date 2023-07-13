import "./App.css";
import { MainScreen } from "@/components/main-screen/MainScreen.tsx";
import { Header } from "@/components/header/Header.tsx";
import { HowItWorks } from "@/components/how-it-works/HowItWorks.tsx";
import { ProductAndServices } from "@/components/products-and-services/ProductsAndServices.tsx";
import { Photo } from "@/components/photo/Photo.tsx";
import { UseCasesOfOurProducts } from "@/components/use-cases-of-our-products/UseCasesOfOurProducts.tsx";
import { Element } from "react-scroll";
import { Footer } from "@/components/footer/Footer.tsx";

const sections = [
  { id: "1", title: "How it Works" },
  { id: "2", title: "Photo" },
  { id: "3", title: "Products and Services" },
  { id: "4", title: "Use Cases of Our Products" },
];
export const App = () => {
  return (
    <>
      <Header sections={sections} />
      <MainScreen />
      {sections.map((section) => {
        if (section.id === "1") {
          return (
            <Element key={section.id} name={section.id}>
              <HowItWorks />
            </Element>
          );
        }
        if (section.id === "2") {
          return (
            <Element key={section.id} name={section.id}>
              <Photo />
            </Element>
          );
        }
        if (section.id === "3") {
          return (
            <Element key={section.id} name={section.id}>
              <ProductAndServices />
            </Element>
          );
        }
        if (section.id === "4") {
          return (
            <Element key={section.id} name={section.id}>
              <UseCasesOfOurProducts />
            </Element>
          );
        }
        return null;
      })}
      <Footer />
    </>
  );
}