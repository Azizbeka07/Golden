import styled from "styled-components";
import { Breadcrumbs, Typography } from "@mui/material";
import { Colors } from "utils/index";
import { adaptiveValue } from "utils/variable";

const CatalogWrapper = styled.section`
    width: 100%;
    background-color: ${Colors.light};
`;

const CatalogBreadCrumbs = styled(Breadcrumbs)`
    margin-top: 20px !important;
`;

const CatalogContent = styled.div`
    width: 100%;
    ${adaptiveValue("margin-top", 40, 12)}
    ${adaptiveValue("margin-bottom", 100, 40)}
`;

const CatalogList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    ${adaptiveValue("column-gap", 30, 20)}
    ${adaptiveValue("row-gap", 50, 24)}
    ${adaptiveValue("margin-top", 64, 24)}
    ${adaptiveValue("margin-bottom", 50, 32)}


    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
`;

const CurrentPageLink = styled(Typography)`
    color: #9d9d9d;
`;

export {
    CatalogWrapper,
    CatalogBreadCrumbs,
    CatalogList,
    CatalogContent,
    CurrentPageLink,
};
