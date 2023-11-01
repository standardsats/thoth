import { FC, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import isEmail from "validator/lib/isEmail";
import styled from "styled-components";
import { SubscribeData } from "@/assets/constants/app/news-page/NewsPage.ts";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import {
  colorVariables,
  fontFamily,
  fontFamilyMedium,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";

const {
  whiteColor,
  greenColor,
  lightGreenColor,
  inputColor,
  smallNewsColor,
  redColor,
  blackColor,
} = colorVariables;

//Type
type SubscriptionFormProps = {
  subscribe: SubscribeData;
};

//Styles
const SubscriptionFormContainer = styled.div`
  width: calc(325vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    width: calc(325vw / 5.09);
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  text-align: left;
  padding: 3.2vw 0 1.6vw 1vw;
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.5px;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.09);
  }
`;

const StyledButton = styled(CustomButton)`
  width: 100%;
  color: ${whiteColor};
  border-radius: 5px;
  padding: 0.9vw 2vw;
  background: linear-gradient(
    137deg,
    ${greenColor} 0%,
    ${lightGreenColor} 100%
  );
  ${fontFamilyMedium};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${sizeVariable}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(14vw / 5.09);
    padding: 2.5vw 2vw;
  }
`;

const StyledField = styled(Field)`
  box-sizing: border-box;
  ${resetMarginsAndPaddings};
  width: calc(325vw / 14.4);
  min-height: calc(54vw / 14.4);
  padding: 0 1.5vw;
  border-radius: 5px;
  border: none;
  background-color: ${inputColor};
  ${fontFamily};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.42px;
  outline: none;

  @media (max-width: ${sizeVariable}) {
    width: calc(325vw / 5.09);
    min-height: calc(45vw / 5.09);
    font-size: calc(14vw / 5.09);
  }

  &::placeholder {
    color: ${smallNewsColor};
  }

  @media (max-width: ${sizeVariable}) {
    min-height: calc(54vw / 5.09);
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  ${resetMarginsAndPaddings};
  color: ${redColor};
  ${fontFamily};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(14vw / 5.09);
  }
`;

const StyledContainer = styled.div`
  min-height: 1vw;

  @media (max-width: ${sizeVariable}) {
    min-height: 5vw;
  }
`;

export const SubscriptionForm: FC<SubscriptionFormProps> = ({ subscribe }) => {
  const { title, placeholder, button, validation } = subscribe;
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const initialValues = { email: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(validation.invalid)
      .required(validation.empty)
      .test("is-valid", validation.invalid, (value) => {
        if (!value) {
          return false;
        }
        return isEmail(value);
      }),
  });

  const handleSubmit = async (
    values: { email: string },
    { resetForm }: FormikHelpers<{ email: string }>
  ) => {
    setFormSubmitted(true);
    console.log(`добавить в рассылку ${values.email}`);
    await resetForm();
  };

  //Component
  const buttonHandler = () => {
    console.log("форма успешно отправлена");
  };

  return (
    <SubscriptionFormContainer>
      <StyledSectionTitle color={blackColor}>{title}</StyledSectionTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <div>
              <StyledField
                type="email"
                name="email"
                placeholder={placeholder}
                id="email"
              />
              <StyledContainer>
                <StyledErrorMessage name="email" as="div" />
              </StyledContainer>
            </div>
            <div>
              <StyledButton
                type="submit"
                disabled={(!isValid && formSubmitted) || isSubmitting}
                onClick={buttonHandler}
              >
                {button}
              </StyledButton>
            </div>
          </Form>
        )}
      </Formik>
    </SubscriptionFormContainer>
  );
};
