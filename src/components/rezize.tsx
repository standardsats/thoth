import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ImageS = styled.img`
  width: 100%;
  height: 600%;
  object-fit: fill;
`;


function DynamicSVG() {
  // const containerRef = useRef(null);
  //
  // useEffect(() => {
  //   function updateSVGSize() {
  //     const containerWidth = containerRef.current.offsetWidth;
  //     const containerHeight = containerRef.current.offsetHeight;
  //
  //     // Масштабируем SVG, заполняя контейнер
  //     const svgElement = containerRef.current.querySelector("svg");
  //     svgElement.setAttribute("width", containerWidth);
  //     svgElement.setAttribute("height", containerHeight);
  //     svgElement.removeAttribute("preserveAspectRatio");
  //   }
  //
  //   // Вызываем функцию обновления размеров SVG при загрузке компонента и изменении размеров окна
  //   updateSVGSize();
  //   window.addEventListener("resize", updateSVGSize);
  //
  //   // Очищаем обработчик при размонтировании компонента
  //   return () => {
  //     window.removeEventListener("resize", updateSVGSize);
  //   };
  // }, []);

  return (
    <Container>
      <ImageS src="/src/assets/images/advantages/adv.jpg" alt="Your Image" />
    </Container>
  );
}

export default DynamicSVG;
