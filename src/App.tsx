import { useState } from "react";
import "./App.css";
// import { colorVariables } from "./assets/styles/commonStyles.ts";
// import styled from "styled-components";
import { Advantages } from "./new/advantages/Advantages.tsx";

import { MainScreen } from "./new/main-screen/MainScreen.tsx";
import { Header } from "./new/header/Header.tsx";
import { HowItWorks } from "./new/how-it-works/HowItWorks.tsx";
import { ProductAndServices } from "./new/products-and-services/ProductsAndServices.tsx";
import NewSlider from "./new/slider/StyledSlider.tsx";
import MySlider from "./new/slider/CustomSlider.tsx";
// import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainScreen />
      <HowItWorks />
      <NewSlider />
      <ProductAndServices />
      <MySlider />
      {/*<Header />*/}
      {/*<main>*/}
      {/*  <MainScreen />*/}
      {/*  <HowItWorks />*/}
      {/*  <Advantages />*/}
      {/*</main>*/}
      {/*<Advantages />*/}
      {/*<MainScreen />*/}
      {/*<Steps>*/}
      {/*  /!*<MyComponent />*!/*/}
      {/*  <Title color={darkGrayColor}>{sectionHowItWork.title}</Title>*/}
      {/*  <CustomText color={lightBlackColor} $margin={"0.7vw 0 4.72vw"}>*/}
      {/*    {sectionHowItWork.text}*/}
      {/*  </CustomText>*/}
      {/*  <HowItWork />*/}
      {/*  <Step*/}
      {/*    svg={<StepOneSvg />}*/}
      {/*    subtitle={sectionHowItWork.stepOne.subtitle}*/}
      {/*    text={sectionHowItWork.stepOne.text}*/}
      {/*    color={lightBlackColor}*/}
      {/*    textMargin={"0.7vw 0 4.72vw"}*/}
      {/*    svgAlt=""*/}
      {/*  />*/}
      {/*  <Step*/}
      {/*    svg={<StepTwoSvg />}*/}
      {/*    subtitle={sectionHowItWork.stepTwo.subtitle}*/}
      {/*    text={sectionHowItWork.stepTwo.text}*/}
      {/*    color={lightBlackColor}*/}
      {/*    textMargin={"0.7vw 0 4.72vw"}*/}
      {/*    svgAlt=""*/}
      {/*  />*/}
      {/*  <Step*/}
      {/*    svg={<StepThreeSvg />}*/}
      {/*    subtitle={sectionHowItWork.stepThree.subtitle}*/}
      {/*    text={sectionHowItWork.stepThree.text}*/}
      {/*    color={lightBlackColor}*/}
      {/*    textMargin={"0 0 4.72vw"}*/}
      {/*    svgAlt=""*/}
      {/*  />*/}
      {/*</Steps>*/}
      {/*<div>*/}
        {/*<a href="https://vitejs.dev" target="_blank">*/}
        {/*  <img*/}
        {/*    src={viteLogo}*/}
        {/*    className="logo mnfbmxnvkf vnbjkfgjkbnvjjklmf;dgmxbm.zg nvjvbdkbdf"*/}
        {/*    alt="Vite logo"*/}
        {/*  />*/}
        {/*</a>*/}
        {/*<a href="https://react.dev" target="_blank">*/}
        {/*  <img src={reactLogo} className="logo react" alt="React logo" />*/}
        {/*</a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p*/}
      {/*  className="read-the-docs"*/}
      {/*  id="read-the-docs hjhghjghjh bkkjlllk jbjkbbjbhjbknjk njnjj"*/}
      {/*>*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
    </>
  );
}

export default App;
