import styled from "styled-components";
import { FC } from "react";
import { Link } from "../common/Link/Link.tsx";

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

  @media (max-width: 1400px) {
    margin: 0 1.97vw;
  }
`;

const StyledImage = styled.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: 1400px) {
    width: 6.61vw;
    height: 6.61vw;
  }
`;

// Component
export const FeedbackWidgets: FC<FeedbackWidgetsProps> = ({ type }) => {
  const isLightType = type === "light";
  const shouldReverseOrder = !isLightType;

  const ContentTelegramButton = (
    <StyledImage
      src={"/src/assets/images/telegram-light.svg"}
      alt="Telegram icon"
    />
  );
  const ContentTwitterButton = (
    <StyledImage
      src={
        isLightType
          ? "/src/assets/images/twitter-light.svg"
          : "/src/assets/images/twitter-dark.svg"
      }
      alt="Twitter icon"
    />
  );
  const ContentFacebookButton = (
    <StyledImage
      src={
        isLightType
          ? "/src/assets/images/facebook-light.svg"
          : "/src/assets/images/facebook-dark.svg"
      }
      alt="Facebook icon"
    />
  );
  const ContentInstagramButton = (
    <StyledImage
      src={"/src/assets/images/instagram-dark.svg"}
      alt="Instagram icon"
    />
  );
  const ContentEmailButton = (
    <StyledImage src="/src/assets/images/email-light.svg" alt="Email icon" />
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
