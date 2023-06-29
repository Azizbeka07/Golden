import styled from "styled-components";
import { Colors, Flex } from "utils";
import { adaptiveValue } from "utils/variable";

const StatisticWrapper = styled.section`
    width: 100%;
    padding: 40px 0;
    background-color: ${Colors.secondaryColor};
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

const StatisticContentBox = styled.div`
    ${Flex.alignCenter};
    flex-direction: column;
    ${adaptiveValue("gap", 16, 8)}
`;

const Count = styled.h2`
    ${adaptiveValue("font-size", 32, 24)}
    ${adaptiveValue("line-height", 38, 34)}
    color:${Colors.dark}
`;

const CountText = styled.p`
    ${adaptiveValue("font-size", 16, 14)}
    ${adaptiveValue("line-height", 26, 24)}
    color: ${Colors.dark}
`;

export {
    StatisticWrapper,
    StatisticContent,
    StatisticContentBox,
    Count,
    CountText,
    StatisticContainer,
};
