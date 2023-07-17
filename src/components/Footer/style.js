import styled from "styled-components";
import { adaptiveValue } from "utils/variable";
import { Colors, Flex } from "utils";

const FooterWrapper = styled.div`
  width: 100%;
  ${adaptiveValue("padding-inline", 90, 0)};
  ${adaptiveValue("padding-top", 55, 32)};
  ${adaptiveValue("padding-bottom", 25, 16)};
  background-color: ${Colors.deepDark};
`;

const FooterLogoWrapper = styled.div`
  ${adaptiveValue("width", 105, 70)};
  ${adaptiveValue("height", 88, 57)};
`;

const FooterContentsWrapper = styled.div`
  width: 100%;
  ${Flex.flexBetween}

  @media (max-width: 1340px) {
    flex-direction: column;
  }
`;

const IconsContent = styled.div`
  width: 126px;
  ${Flex.justFlex};
  flex-direction: column;
  gap: 144px;
  margin-bottom: 10px;

  @media (max-width: 1340px) {
    ${Flex.spaceBetween};
    flex-direction: row;
   width: 100%;
   gap: 0;
   margin-bottom: 24px;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  ${adaptiveValue("padding-top", 24, 16)};
  ${adaptiveValue("margin-top", 50, 24)};
  border-top: 1px solid ${Colors.darkBlue};
  font-size: 14px;
  line-height: 17px;
  opacity: 0.6;
  color: ${Colors.light};
  ${Flex.center}
`;

const SocialMediaContent = styled.div`
  ${Flex.justFlex};
  gap: 24px;
`;

const FooterNavsWrapper = styled.div`
  ${Flex.justFlex};
  flex-wrap: wrap;
  ${adaptiveValue("column-gap", 97, 10)};
  max-width: 937px;
  width: 100%;
  
  @media (max-width: 1340px) {
    ${adaptiveValue("row-gap", 0, 20)};
   max-width: 100%;
   ${Flex.flexBetween};
  }

  @media (max-width: 581px) {
    display: none;
  }
`;

const FooterNav = styled.nav`
  ${Flex.justFlex};
  flex-direction: column;
  ${adaptiveValue("gap", 24, 10)};
`;

const NavTitle = styled.p`
  ${adaptiveValue("font-size", 18, 20)}
  ${adaptiveValue("line-height", 28, 30)}
  color: ${Colors.light};
`;

const NavSubTitle = styled.p`
  ${adaptiveValue("font-size", 14, 12)}
  ${adaptiveValue("line-height", 24, 14)}
  color: ${Colors.silver};
`;

const NavLinksWrapper = styled.div`
    ${Flex.justFlex};
    flex-direction: column;
    gap: 16px;
`;

const NavLink = styled.a`
    ${adaptiveValue("font-size", 16, 14)}
    ${adaptiveValue("line-height", 26, 24)}
    color: ${Colors.light};
`;


const AccordionsWrapper = styled.div`
  display: none;
  gap: 15px;

  @media (max-width: 581px) {
    ${Flex.justFlex}
    flex-direction: column;
  }
`;

export {
  FooterLogoWrapper,
  FooterWrapper,
  FooterBottom,
  FooterContentsWrapper,
  IconsContent,
  SocialMediaContent,
  FooterNavsWrapper,
  FooterNav,
  NavTitle,
  NavSubTitle,
  NavLink,
  NavLinksWrapper,
  AccordionsWrapper
};