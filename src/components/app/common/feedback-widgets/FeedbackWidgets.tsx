import styled from "styled-components";
import { FC } from "react";
import { Link } from "../Link/Link.tsx";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";
import { getData } from "@/assets/constants/constants.ts";
import { CustomButton } from "../customButton/CustomButton.tsx";
import { useTranslation } from "react-i18next";
import {
  FeedbackWidgetsType,
  SocialImageType,
} from "@/assets/constants/app/common/FeedbackWidgets.ts";

//Types
type Props = {
  type: "light" | "dark";
  $location?: "menu";
  onClick?: () => void;
};

type Image = SocialImageType;

// Styles
const StyledFeedbackWidgets = styled.div<{
  $location?: "menu";
}>`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  position: ${({ $location }) => ($location ? "relative" : "static")};
  z-index: ${({ $location }) => ($location ? "11" : "1")};

  @media (max-width: ${sizeVariable}) {
    height: ${({ $location }) => ($location ? "100%" : "auto")};
    justify-content: ${({ $location }) => ($location ? "end" : "center")};
    align-items: ${({ $location }) => ($location ? "end" : "center")};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  margin-right: 1.2vw;

  @media (max-width: ${sizeVariable}) {
    margin-right: 3vw;
  }
`;

const StyledImage = styled.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${sizeVariable}) {
    width: 6.61vw;
    height: 6.61vw;
  }
`;

const StyledButton = styled(CustomButton)`
  display: flex;
  background-color: transparent;
  position: relative;
`;

// Component
export const FeedbackWidgets: FC<Props> = ({
  type,
  $location,
  onClick,
  ...props
}) => {
  const { t } = useTranslation();
  const feedbackWidgetsData = getData(
    "FeedbackWidgets",
    t
  ) as FeedbackWidgetsType;
  return (
    <StyledFeedbackWidgets $location={$location} {...props}>
      {feedbackWidgetsData.map((icon) => {
        return (
          <StyledLink
            key={icon.id}
            color={"transparent"}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {onClick ? (
              <StyledButton type="button" disabled={!onClick} onClick={onClick}>
                <StyledImage
                  src={
                    icon.image[
                      (type === "light" ? "lightSrc" : "darkSrc") as keyof Image
                    ]
                  }
                  alt={icon.image.alt}
                />
              </StyledButton>
            ) : (
              <StyledImage
                src={
                  icon.image[
                    (type === "light" ? "lightSrc" : "darkSrc") as keyof Image
                  ]
                }
                alt={icon.image.alt}
              />
            )}
          </StyledLink>
        );
      })}
    </StyledFeedbackWidgets>
  );
};
