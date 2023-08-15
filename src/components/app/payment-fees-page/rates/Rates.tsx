import styled from "styled-components";
import {
  colorVariables,
  fontFamily,
  fontFamilyMedium,
  sizeVariable,
  TextMixinFeesRates,
} from "@/assets/styles/commonStyles.ts";
import { Subtitle } from "@/components/app/common/subtitle/Subtitle.tsx";
import { Link } from "@/components/app/common/Link/Link.tsx";
import { FC } from "react";
import { commonImages } from "@/assets/constants/constants.ts";

const { ratesFeesColor, darkGreenColor, blackColor, whiteColor } =
  colorVariables;

//Types
type Props = {
  rates: {
    subtitle: string;
    linkHref: string;
    linkLabel: string;
    depositFee: {
      text: string;
      percent: string[];
      span?: string[];
    };
    swapFee: {
      text: string;
      percent: string[];
      span?: string[];
    };
    withdrawFee: {
      text: string;
      percent: string[];
    };
    fiatBankIn: {
      text: string;
      percent: string[];
    };
    fiatBankOut: {
      text: string;
      percent: string[];
    };
    depositFeeSpan: {
      text: string;
      percent: string[];
    };
  };
};

//Styles
const StyledRates = styled.div`
  margin: 0 6.25vw 4.58vw 3.23vw;
  display: flex;
  flex-direction: column;

  @media (max-width: ${sizeVariable}) {
    margin: 0 6.25vw 4.58vw 4.5vw;
  }
`;

const StyledElement = styled.div`
  padding: 2.22vw 0 4.86vw 2.78vw;
  border-top: 1px solid ${darkGreenColor};
  border-left: 1px solid ${darkGreenColor};
`;

const StyledTableItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLabel = styled.p`
  width: calc(270vw / 14.4);
  ${TextMixinFeesRates};
  ${fontFamily};

  @media (max-width: ${sizeVariable}) {
    min-width: calc(210vw / 5.09);
  }
`;

const StyledPercentage = styled.span`
  margin-left: 1vw;
  text-align: left;
  min-width: calc(90vw / 14.4);
  ${TextMixinFeesRates};
  ${fontFamily};

  @media (max-width: ${sizeVariable}) {
    min-width: calc(70vw / 5.09);
  }
`;

const StyledSpan = styled.span`
  text-align: center;
  min-width: calc(180vw / 14.4);
  ${TextMixinFeesRates}
  ${fontFamilyMedium};

  @media (max-width: ${sizeVariable}) {
    min-width: calc(140vw / 5.09);
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  &:nth-child(odd) {
    background-color: ${ratesFeesColor};
  }
`;

const StyledSubtitle = styled(Subtitle)`
  margin: 0 0 1.18vw 2.7vw;
  color: ${darkGreenColor};
  ${fontFamilyMedium};
  text-align: left;
  font-size: calc(30vw / 14.4);
  font-style: normal;
  font-weight: 400;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(30vw / 5.09);
  }
`;

const StyledLink = styled(Link)`
  margin-top: 2.26vw;
  display: inline-block;
  ${fontFamilyMedium};
  padding: 0.8vw 5.5vw 0.8vw 2.5vw;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  width: fit-content;
  color: ${whiteColor};
  text-align: center;
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  background-color: ${blackColor};

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.09);
  }

  &:after {
    content: "";
    position: absolute;
    width: calc(19vw / 14.4);
    height: calc(15.5vw / 14.4);
    background-image: url(${commonImages.playIconWhite});
    background-repeat: no-repeat;
    background-size: contain;
    right: 0.5vw;
    top: 50%;
    transform: translateY(-50%);
  }
`;

//Component
export const Rates: FC<Props> = ({ rates }) => {
  return (
    <StyledRates>
      <StyledSubtitle>{rates.subtitle}</StyledSubtitle>
      <StyledElement>
        {Object.keys(rates).map((key) => {
          const item = rates[key];
          return (
            <StyledWrapper key={key}>
              <StyledLabel>{item.text}</StyledLabel>
              <div>
                {item.percent &&
                  item.percent.map((percentage, index) => (
                    <StyledTableItem key={index}>
                      <StyledPercentage>{percentage}</StyledPercentage>
                      {item.span && <StyledSpan>{item.span[index]}</StyledSpan>}
                    </StyledTableItem>
                  ))}
              </div>
            </StyledWrapper>
          );
        })}
        <StyledLink
          color={"transparent"}
          href={rates.linkHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {rates.linkLabel}
        </StyledLink>
      </StyledElement>
    </StyledRates>
  );
};
