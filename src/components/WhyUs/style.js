import styled from "styled-components";
import { Colors, Flex } from "utils";
import { adaptiveValue } from "utils/variable";

const WhyUsSection = styled.section`
    width: 100%;
    background-color: ${Colors.light};
    padding-block: 100px;
`;

const Title = styled.h2`
    font-weight: 600;
    ${adaptiveValue("font-size", 44, 22)}
    ${adaptiveValue("line-height", 62, 34)}
    color: ${Colors.dark};
    text-align: center;
`;

const Content = styled.div`
    ${adaptiveValue("margin-top", 56, 24)}
    ${Flex.spaceBetween};
    gap: 30px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const ContentBox = styled.div`
    max-width: 393px;
    ${adaptiveValue("padding", 24, 28)}
    ${Flex.spaceBetween}
    flex-direction: column;
    ${adaptiveValue("gap", 32, 16)}
    border-right: 1px solid ${Colors.primaryColor};
    border-left: 1px solid ${Colors.primaryColor};

    @media (max-width: 768px) {
        border-right: none;
        border-left: none;
        border-top: 1px solid ${Colors.primaryColor};
        border-bottom: 1px solid ${Colors.primaryColor};
    }
`;

const ContentBoxText = styled.p`
    ${adaptiveValue("font-size", 20, 16)}
    ${adaptiveValue("line-height", 32, 26)}
    color: ${Colors.gray};
    text-align: center;
`;

export { WhyUsSection, Title, Content, ContentBoxText, ContentBox };
