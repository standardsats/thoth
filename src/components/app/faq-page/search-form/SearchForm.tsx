import { FC } from "react";
import styled from "styled-components";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { FAQSearchType } from "@/assets/constants/app/faq-page/FAQPage.ts";

const { blackColor, inputColor } = colorVariables;

//Type
type Props = {
  onSearch: (searchValue: string) => void;
  search: FAQSearchType;
};

//Styles
const InputWithButtonWrapper = styled.div`
  border: 2px solid ${inputColor};
  border-radius: 20px;
  width: 100%;
  height: calc(35vw / 14.4);
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(240, 240, 240, 0.2) 0%,
    rgba(240, 240, 240, 0) 100%
  );

  @media (max-width: ${sizeVariable}) {
    height: calc(35vw / 5.09);
  }
`;

const StyledField = styled(Field)`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  border: none;
  ${resetMarginsAndPaddings};
  padding: 0 1vw;
  ${fontFamily};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.42px;
  outline: none;

  &::placeholder {
    color: ${blackColor};
  }

  @media (max-width: ${sizeVariable}) {
    font-size: calc(14vw / 5.09);
    padding: 0 3vw;
  }
`;

const StyledImage = styled.img`
  height: 95%;
  width: auto;
`;

const StyledCustomButton = styled(CustomButton)`
  margin-left: 1vw;
  box-sizing: border-box;
  display: flex;
  background-color: transparent;

  @media (max-width: ${sizeVariable}) {
    margin-left: 3vw;
  }
`;

const StyledSearchForm = styled(Form)`
  width: 100%;
`;

//Component
export const SearchForm: FC<Props> = ({ onSearch, search }) => {
  const handleSubmit = async (
    values: { inputValue: string },
    formikHelpers: FormikHelpers<{ inputValue: string }>
  ) => {
    onSearch(values.inputValue);
    formikHelpers.setSubmitting(false);
    await formikHelpers.resetForm();
  };

  const onClickHandler = () => {
    console.log("Здесь бы релультаты поиска показать");
  };

  return (
    <Formik initialValues={{ inputValue: "" }} onSubmit={handleSubmit}>
      {({ values }) => (
        <StyledSearchForm>
          <InputWithButtonWrapper>
            <StyledCustomButton
              onClick={onClickHandler}
              type="submit"
              disabled={!values.inputValue}
            >
              <StyledImage src={search.image.src} alt={search.image.alt} />
            </StyledCustomButton>
            <StyledField
              id="search"
              type="text"
              name="inputValue"
              placeholder={search.placeholder}
            />
          </InputWithButtonWrapper>
        </StyledSearchForm>
      )}
    </Formik>
  );
};
