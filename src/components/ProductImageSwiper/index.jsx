import React from "react";
import * as S from "./style";

const ProductImageSwiper = ({ image }) => {
    return (
        <S.ImageWrapper>
            <img
                style={{
                    width: "100%",
                    objectFit: "contain",
                }}
                src={image}
                alt='product-img'
            />
        </S.ImageWrapper>
    );
};

export default ProductImageSwiper;
