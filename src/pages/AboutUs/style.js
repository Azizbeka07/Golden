import { adaptiveValue } from "utils/variable";
import styled from "styled-components";
import { Colors, Flex } from "utils/index";

const AboutUsWrapper = styled.div`
  ${Flex.spaceBetween}
  ${adaptiveValue("margin-top", 70, 24)}
  ${adaptiveValue("margin-bottom", 131, 40)}

  @media(max-width: 1132px) {
    flex-direction: column;
  }
`;

const AboutUsLeftWrapper = styled.div`
  position: relative;
`;

const AboutUsLeftImage = styled.img`
  display: block;
  ${adaptiveValue("max-width", 555, 332)}
  ${adaptiveValue("margin-bottom", 0, 32)}
`;

const AboutUsPlayImage = styled.img`
  position: absolute;
  top: 43%;
  left: 43%;
  width: 78px;
  height: 76px;
`;

const AboutUsRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
const AboutUsRightAboutUs = styled.p`
  width: 62px;
  font-weight: 400;
  ${adaptiveValue("font-size", 18, 14)}
  ${adaptiveValue("line-height", 38, 24)}
  color: #4295e4;
  border-bottom: 2px solid #4295e4;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

const AboutUsTitleGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const AboutUsRightTitle = styled.h2`
  font-weight: 600;
  ${adaptiveValue("font-size", 44, 18)}
  ${adaptiveValue("font-size", 62, 28)}
  text-transform: capitalize;
  color: #161c24;
`;

const AboutUsRightTitleSpan = styled.h2`
  font-weight: 600;
  ${adaptiveValue("font-size", 44, 18)}
  ${adaptiveValue("font-size", 62, 28)}
  text-transform: capitalize;
  color: #4295e4;
  background: #fcfdff;
`;

const AboutUsRightText = styled.p`
  max-width: 340px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  ${adaptiveValue("line-height", 24, 22)}
  color: ${Colors.gray};
`;

const AboutUsStaticWrapper = styled.div`
  display: block;
  ${adaptiveValue("margin-bottom", 100, 40)}
`;

const StatisticWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: ${Colors.deepDark};
`;

const StatisticContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding-block: 0;
  ${adaptiveValue("padding-inline", 20, 32)}
`;

const StatisticContent = styled.div`
  max-width: 816px;
  width: 100%;
  margin: 0 auto;
  ${Flex.spaceBetween}
  ${adaptiveValue("gap", 82, 20)}

    @media(max-width: 576px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Programmer = styled.div`
  
`;

const StatisticContentBox = styled.div`
  ${Flex.alignCenter};
  flex-direction: column;
  ${adaptiveValue("gap", 16, 8)}
`;

const Count = styled.h2`
  ${adaptiveValue("font-size", 72, 48)}
  ${adaptiveValue("line-height", 72, 58)}
    color:${Colors.light}
`;

const CountText = styled.p`
  ${adaptiveValue("font-size", 18, 14)}
  ${adaptiveValue("line-height", 32, 22)}
    color: ${Colors.light}
`;

export {
  AboutUsWrapper,
  AboutUsLeftWrapper,
  AboutUsLeftImage,
  AboutUsPlayImage,
  AboutUsRightWrapper,
  AboutUsRightAboutUs,
  AboutUsTitleGroup,
  AboutUsRightTitle,
  AboutUsRightTitleSpan,
  AboutUsRightText,
  AboutUsStaticWrapper,
  Count,
  CountText,
  StatisticContainer,
  StatisticContent,
  StatisticContentBox,
  StatisticWrapper,

};
