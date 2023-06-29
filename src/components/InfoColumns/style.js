import styled from "styled-components";
import { adaptiveValue } from "utils/variable";
import { Colors, Flex } from "utils/index";

const InfoColumnsWrapper = styled.section`
    width: 100%;
    background-color: ${Colors.light};
    ${adaptiveValue("margin-bottom", 100, 40)}
`;

const Content = styled.div`
    ${Flex.flexBetween};
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    gap: 30px;

    @media (max-width: 820px) {
        flex-direction: column;
        align-items: center;
    }
`;

const InfoContent = styled.div`
    ${Flex.justFlex};
    justify-content: center;
    flex-direction: column;
    flex-basis: 100%;
    gap: 24px;
`;

const ContentTitle = styled.h3`
    ${adaptiveValue("font-size", 32, 16)}
    ${adaptiveValue("line-height", 42, 26)}
    color: ${Colors.dark};
`;

const ContentText = styled.p`
    ${adaptiveValue("font-size", 18, 14)}
    ${adaptiveValue("line-height", 32, 24)}
    color: ${Colors.gray};
`;

const ImageWrapper = styled.div`
    width: 100%;
    overflow: hidden;

    @media (max-width: 820px) {
        width: 80%;
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`;

const ContentImage = styled.img`
    display: block;
    width: 100%;
    object-fit: contain;
`;

const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 12px;
    flex-wrap: wrap;

    @media (max-width: 820px) {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 8px;
    }
`;

const ListItems = styled.p`
    ${Flex.alignCenter}
    gap: 12px;
    ${adaptiveValue("font-size", 20, 16)}
    ${adaptiveValue("line-height", 24, 26)}
`;

export {
    InfoColumnsWrapper,
    Content,
    ContentTitle,
    ContentText,
    InfoContent,
    ImageWrapper,
    ContentImage,
    List,
    ListItems,
};
