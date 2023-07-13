import styled from "styled-components";
import { FC } from "react";
import { Link } from "@/components/common/Link/Link.tsx";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";

// Types
type FeedbackWidgetsProps = {
  type: "light" | "dark";
};

// Styles
const StyledFeedbackWidgets = styled.div<{ $reverseOrder: boolean }>`
  display: flex;
  flex-direction: ${({ $reverseOrder }) => ($reverseOrder ? "row" : "row")};
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 0 0.69vw;

  @media (max-width: ${sizeVariable}) {
    margin: 0 1.97vw;
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

// Component
export const FeedbackWidgets: FC<FeedbackWidgetsProps> = ({ type }) => {
  const isLightType = type === "light";
  const shouldReverseOrder = !isLightType;

  const ContentTelegramButton = (
    <StyledImage src={"images/common/telegram-light.svg"} alt="Telegram icon" />
  );
  const ContentTwitterButton = (
    <StyledImage
      src={
        isLightType
          ? "images/common/twitter-light.svg"
          : "images/common/twitter-dark.svg"
      }
      alt="Twitter icon"
    />
  );
  const ContentFacebookButton = (
    <StyledImage
      src={
        isLightType
          ? "images/common/facebook-light.svg"
          : "images/common/facebook-dark.svg"
      }
      alt="Facebook icon"
    />
  );
  const ContentInstagramButton = (
    <StyledImage
      src={"images/common/instagram-dark.svg"}
      alt="Instagram icon"
    />
  );
  const ContentEmailButton = (
    <StyledImage src="images/common/email-light.svg" alt="Email icon" />
  );

  return (
    <StyledFeedbackWidgets $reverseOrder={shouldReverseOrder}>
      {!isLightType && (
        <StyledLink
          color={"transparent"}
          href={"https://example.com/instagram"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ContentInstagramButton}
        </StyledLink>
      )}
      {isLightType && (
        <StyledLink
          color={"transparent"}
          href={"https://example.com/telegram"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ContentTelegramButton}
        </StyledLink>
      )}
      <StyledLink
        color={"transparent"}
        href={"https://example.com/twitter"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {ContentTwitterButton}
      </StyledLink>
      <StyledLink
        color={"transparent"}
        href={"https://example.com/facebook"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {ContentFacebookButton}
      </StyledLink>
      {isLightType && (
        <StyledLink
          color={"transparent"}
          href={"https://example.com/email"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ContentEmailButton}
        </StyledLink>
      )}
    </StyledFeedbackWidgets>
  );
};
