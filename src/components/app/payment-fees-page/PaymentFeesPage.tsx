import styled from "styled-components";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { Navigation } from "@/components/app/common/navigation/Navigation.tsx";
import { colorVariables, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { Rates } from "./rates/Rates.tsx";
import { useTranslation } from "react-i18next";
import { getData } from "@/assets/constants/constants.ts";
import { PaymentFeesData } from "@/assets/constants/app/payment-fees-page/PaymentFeesPage.ts";

const { lightBlackColor } = colorVariables;

//Styles
const StyledPage = styled.main`
  width: 100vw;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledTitle = styled(SectionTitle)`
  margin: 3.33vw 5.4vw 4.51vw;
  text-align: start;

  @media (max-width: ${sizeVariable}) {
    margin: 3.33vw 6.4vw 4.51vw;
  }
`;

//Components
export const PaymentFeesPage = () => {
  const { t } = useTranslation();
  const pageData = getData("PaymentFees", t) as PaymentFeesData;

  const { title, individual, enterprise, navigation } = pageData;

  return (
    <StyledPage>
      <Navigation navigation={navigation} />
      <StyledWrapper>
        <StyledTitle color={lightBlackColor}>{title}</StyledTitle>
        <StyledContainer>
          <Rates rates={individual} />
          <Rates rates={enterprise} />
        </StyledContainer>
      </StyledWrapper>
    </StyledPage>
  );
};
