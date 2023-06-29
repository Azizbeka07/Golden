import styled from "styled-components";
import { Colors, Flex } from "utils";
import { adaptiveValue } from "utils/variable";

const HeaderTopWrapper = styled.div`
    width: 100%;
    padding: 9px 16px;
    background-color: ${Colors.gray};
`;

const TextContent = styled.div`
    ${Flex.center}
    ${adaptiveValue("gap", 100, 60)}
`;

const DiscountText = styled.p`
    font-weight: 500;
    ${adaptiveValue("font-size", 16, 12)}
    ${adaptiveValue("line-height", 26, 12)}
    color: ${Colors.light};
`;

const RecallText = styled.a`
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.12em;
    text-decoration-line: underline;
    color: ${Colors.light};

    @media (max-width: 768px) {
        display: none;
    }
`;

export { HeaderTopWrapper, DiscountText, RecallText, TextContent };
