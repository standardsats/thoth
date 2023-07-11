import "./App.css";
import { MainScreen } from "./new/main-screen/MainScreen.tsx";
import { Header } from "./new/header/Header.tsx";
import { HowItWorks } from "./new/how-it-works/HowItWorks.tsx";
import { ProductAndServices } from "./new/products-and-services/ProductsAndServices.tsx";
import { Photo } from "./new/photo/Photo.tsx";
import { UseCasesOfOurProducts } from "./new/use-cases-of-our-products/UseCasesOfOurProducts.tsx";
import { News } from "./new/news/News.tsx";
import { HaveAQuestion } from "./new/have-a-question/HaveAQuestion.tsx";
import { VideoSlider } from "./new/video-slider/VideoSlider.tsx";
import { Footer } from "./new/Footer/Footer.tsx";

function App() {
  return (
    <>
      {/*<Header />*/}
      <MainScreen />
      <HowItWorks />
      <Photo />
      <ProductAndServices />
      {/*<UseCasesOfOurProducts />*/}
      {/*<News />*/}
      {/*<HaveAQuestion />*/}
      {/*<Footer />*/}
      {/*<VideoSlider />*/}
    </>
  );
}

export default App;
