import "./App.css";
import { MainScreen } from "./new/main-screen/MainScreen.tsx";
import { Header } from "./new/header/Header.tsx";
import { HowItWorks } from "./new/how-it-works/HowItWorks.tsx";
import { ProductAndServices } from "./new/products-and-services/ProductsAndServices.tsx";
import { Photo } from "./new/photo/Photo.tsx";
import { UseCasesOfOurProducts } from "./new/use-cases-of-our-products/UseCasesOfOurProducts.tsx";
import { News } from "./new/news/News.tsx";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <HowItWorks />
      <Photo />
      <ProductAndServices />
      <UseCasesOfOurProducts />
      <News />
    </>
  );
}

export default App;
