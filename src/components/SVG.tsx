import { ReactComponent as HowItWorkSvg } from "../assets/images/how-it-work.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: 53%;
  transform: translateX(-50%);
`;

export const SVG = () => {
  const width = "77vw";
  const height = "158.7vw";

  return (
    <Wrapper style={{ border: "1px solid green" }}>
      <svg width={width} height={height}>
        <use xlinkHref="#background" />
      </svg>

      <svg style={{ display: "none" }}>
        <symbol id="background" viewBox="0 0 401 806">
          <HowItWorkSvg />
        </symbol>
      </svg>
    </Wrapper>
  );
};
