import styled from "styled-components";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";
import { Link } from "@/components/app/common/Link/Link.tsx";
import { FC } from "react";
import { MobileWalletLinkData } from "@/assets/constants/app/main-page/ProductAndService.ts";

//Types
type MobileWalletLinksProps = {
  links: MobileWalletLinkData[];
};

//Styles
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: calc(218vw / 14.4);
  height: calc(56vw / 14.4);
  border: 0.7px solid white;
  border-radius: 10px;
  padding: 0.5vw;
  box-sizing: border-box;

  @media (max-width: ${sizeVariable}) {
    width: calc(168vw / 5.08);
    height: calc(50vw / 5.08);
    padding: 1vw;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
}

  @media (max-width: ${sizeVariable}) {
    margin-right: calc(72vw / 14.4);
  }
`;

//TODO
//временно отключили ссылку, нужно потом включить
const StyledDisabledLink = styled(StyledLink)`
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.3;
`;

//Component
export const MobileWalletLinks: FC<MobileWalletLinksProps> = ({ links }) => {
  return (
    <StyledWrapper>
      {links.map((link, index) =>
        index === 0 ? (
          <StyledLink
            key={link.id}
            color={"transparent"}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src={link.src} alt={link.alt} />
          </StyledLink>
        ) : (
          <StyledDisabledLink
            key={link.id}
            color={"transparent"}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src={link.src} alt={link.alt} />
          </StyledDisabledLink>
        )
      )}
    </StyledWrapper>
  );
};
