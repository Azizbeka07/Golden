import React from "react";
import { CatalogBreadCrumbs, CurrentPageLink } from "pages/Catalog/style";
import { Link } from "react-router-dom";

const BreadCrumbs = ({
    disableText,
    additionalPageName,
    additionalHrefText,
}) => {
    return (
        <CatalogBreadCrumbs aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' to='/'>
                Главная
            </Link>
            {additionalPageName ? (
                <Link underline='hover' color='inherit' to={additionalHrefText}>
                    {additionalPageName}
                </Link>
            ) : null}
            <CurrentPageLink>{disableText}</CurrentPageLink>
        </CatalogBreadCrumbs>
    );
};

export default BreadCrumbs;
