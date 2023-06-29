import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const ProductListItems = ({ product }) => {
    const { image, name, currentPrice, id } = product;
    return (
        <S.ProductWrapper>
            <Link to={`/product/detail/${id}`}>
                <S.ImageWrapper>
                    <img src={image} alt={name} />
                </S.ImageWrapper>
            </Link>
            <S.ProductInfoWrapper>
                <S.ProductInfo>
                    <S.ProductInfoTitle>{name}</S.ProductInfoTitle>
                    <S.BtnGroup>
                        <S.CounterBtn>-</S.CounterBtn>
                        <S.ProductCount>1</S.ProductCount>
                        <S.CounterBtn>+</S.CounterBtn>
                    </S.BtnGroup>
                </S.ProductInfo>
            </S.ProductInfoWrapper>
        </S.ProductWrapper>
    );
};

export default ProductListItems;
