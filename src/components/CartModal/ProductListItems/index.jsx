import { Button, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import * as S from "./style";
import MainContext from "reducer/CartContext";

const ProductListItems = ({ product }) => {
  const { image, name, currentPrice, id } = product;
  const { removeFromCart } = useContext(MainContext);;
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
      <S.Actions>
        <Button onClick={() => removeFromCart(id)}>
          <DeleteOutlinedIcon color="primary" />
          <S.DeleteText>Удалить</S.DeleteText>
        </Button>
        <S.CurrentPrice>{currentPrice}</S.CurrentPrice>
      </S.Actions>
    </S.ProductWrapper>
  );
};

export default ProductListItems;
