import { ReactComponent as Vector } from "../images/vector.svg";
import styled from "styled-components";
const Wrapper = styled.div`
  position: absolute;
`;

const MyComponent = () => {
  const width = "37.6vw";
  const height = "49.4vw";

  return (
    <Wrapper>
      <svg width={width} height={height}>
        <use xlinkHref="#vector" />
      </svg>

      <svg style={{ display: "none" }}>
        <symbol id="vector" viewBox="0 0 191 251">
          <Vector />
        </symbol>
      </svg>
    </Wrapper>
  );
};

export default MyComponent;
