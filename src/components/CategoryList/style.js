import styled from "styled-components";
import { Link } from "react-router-dom";
import { adaptiveValue } from "utils/variable";
import { Colors, Flex } from "utils";

const CategoryWrapper = styled.section`
    width: 100%;
    background-color: ${Colors.light};
    ${adaptiveValue("padding-bottom", 100, 40)}
`;

const CategoryList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    ${adaptiveValue("gap", 40, 20)}
    ${adaptiveValue("margin-top", 64, 24)}
`;

const CategoryListItem = styled.li`
    max-width: 600px;
    width: 100%;
    background-color: ${Colors.lightGray};
    ${adaptiveValue("padding", 40, 20)}
`;

const ListImage = styled.img`
    max-width: 250px;
    width: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    object-fit: contain;
`;

const ListTitle = styled.h3`
    ${adaptiveValue("font-size", 22, 14)}
    ${adaptiveValue("line-height", 34, 24)}
    ${adaptiveValue("margin-top", 25, 12)}
`;

const ListLink = styled(Link)`
    max-width: 220px;
    width: 100%;
    ${Flex.center}
    ${adaptiveValue("font-size", 16, 14)}
    ${adaptiveValue("line-height", 26, 16)}
    color: ${Colors.dark};
    margin-top: 16px;
    border: 1px solid #454f5b;
    border-radius: 2px;
    ${adaptiveValue("height", 50, 35)}
`;

const AllCategoryBtn = styled(Link)`
    padding: 12px 37px;
    background-color: ${Colors.primaryColor};
    font-weight: 500;
    font-size: 16px;
    ${adaptiveValue("line-height", 26, 19)}
    color: ${Colors.light};
    border: none;
    cursor: pointer;
    border: 1px solid ${Colors.primaryColor};
    transition: 0.4s;
    ${adaptiveValue("margin-top", 50, 25)}
    display: block;
    width: max-content;
    margin-inline: auto;

    &:hover {
        background-color: transparent;
        color: ${Colors.primaryColor};
    }
`;

export {
    CategoryWrapper,
    CategoryList,
    CategoryListItem,
    ListImage,
    ListTitle,
    ListLink,
    AllCategoryBtn,
};
