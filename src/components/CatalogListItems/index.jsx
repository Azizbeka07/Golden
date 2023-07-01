import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const CatalogListItems = ({ image, text, type }) => {
    return (
        <S.ListItems>
            <Link to={`/category/${type}`}>
                <S.ListItemImage src={image} />
                <S.ListItemText>{text}</S.ListItemText>
            </Link>
        </S.ListItems>
    );
};

export default CatalogListItems;
