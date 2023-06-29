import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, Flex } from "utils";
import { adaptiveValue } from "utils/variable";

const HeaderWrapper = styled.header`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 50;
`;

const HeaderNavbar = styled.div`
    width: 100%;
    padding-block: 20px;
    background: ${Colors.light};
    box-shadow: inset 0px -1px 0px ${Colors.borderColor};
    position: relative;
`;

const LogoLink = styled(Link)`
    @media (max-width: 768px) {
        display: none;
    }
`;

const HeaderNavContent = styled.div`
    ${Flex.spaceBetween}
`;

const HeaderNavLinkList = styled.nav`
    ${Flex.spaceBetween}
    ${adaptiveValue("gap", 32, 15)}

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled(Link)`
    font-weight: 300;
    ${adaptiveValue("font-size", 20, 14)}
    line-height: 24px;
    color: ${Colors.dark};
`;

const UserActions = styled.div`
    ${Flex.alignCenter}
    ${adaptiveValue("gap", 30, 15)}
`;

const PhoneContent = styled.a`
    ${Flex.alignCenter};
    gap: 8px;
    font-weight: 400;
    ${adaptiveValue("font-size", 18, 14)}
    line-height: 21px;
    color: ${Colors.gray};

    @media (max-width: 768px) {
        display: none;
    }
`;

const ActionBox = styled.div`
    ${Flex.alignCenter}
    ${adaptiveValue("gap", 24, 16)}
`;

const BurgerMenuContent = styled.div`
    width: 24px;
    height: 24px;
    flex-direction: column;
    gap: 6px;
    padding-block: 2px;
    display: none;

    @media (max-width: 768px) {
        ${Flex.spaceBetween};
    }
`;

const BurgerMenuRows = styled.span`
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background: ${Colors.dark};
`;

export {
    HeaderWrapper,
    HeaderNavbar,
    HeaderNavContent,
    HeaderNavLinkList,
    NavLink,
    UserActions,
    PhoneContent,
    ActionBox,
    LogoLink,
    BurgerMenuContent,
    BurgerMenuRows,
};
