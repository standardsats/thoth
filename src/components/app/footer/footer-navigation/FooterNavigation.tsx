import { FC } from "react";
import styled from "styled-components";
import { Link } from "@/components/app/common/Link/Link.tsx";
import {
  colorVariables,
  fontFamilySecond,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";

const { whiteColor } = colorVariables;

//Types
type Data = {
  data: {
    title: string;
    links: Array<{
      name: string;
      href: string;
    }>;
  };
};

//Styles
const StyledColumn = styled.div`
  min-width: 10vw;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10vw;
  }
`;

const StyledTitle = styled.h3`
  ${resetMarginsAndPaddings};
  margin-bottom: 0.7vw;
  color: ${whiteColor};
  ${fontFamilySecond};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    margin-bottom: 2vw;
    text-align: center;
    font-size: calc(20vw / 5.08);
    font-weight: bold;
    line-height: 2;
  }
`;

const StyledLinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${sizeVariable}) {
    margin: 0.5vw;
  }
`;

const StyledLinkItem = styled.li`
  ${resetMarginsAndPaddings};
  margin-bottom: 0.34vw;
  color: ${whiteColor};
  ${fontFamilySecond};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    text-align: center;
    font-size: calc(20vw / 5.08);
  }
`;

//Components
export const FooterNavigation: FC<Data> = ({ data }) => {
  return (
    <StyledColumn>
      <StyledTitle>{data.title}</StyledTitle>
      <StyledLinkList>
        {data.links.map((link) => (
          <StyledLinkItem key={link.name}>
            <Link
              color={whiteColor}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </Link>
          </StyledLinkItem>
        ))}
      </StyledLinkList>
    </StyledColumn>
  );
};
