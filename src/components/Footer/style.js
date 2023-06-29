import styled from "styled-components";
import { Colors, Flex } from "utils";

const FooterWrapper = styled.footer`
    width: 100%;
    background-color: ${Colors.deepDark};
    padding: 64px 0 0;
`;

const FooterContent = styled.div`
    ${Flex.spaceBetween}
    padding-bottom: 25px;
`;

const SocialMediaLinks = styled.div`
    ${Flex.alignCenter}
    gap: 24px;
`;

const MediaLink = styled.a`
    display: block;
`;

const FooterBottom = styled.div`
    width: 100%;
    padding-block: 24px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: ${Colors.light};
    opacity: 0.6;
    border-top: 1px solid ${Colors.gray};
`;

export {
    FooterWrapper,
    FooterContent,
    SocialMediaLinks,
    MediaLink,
    FooterBottom,
};
