import { Button, IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import * as S from "./style";
import MainContext from "context/CartContext";

const ProductListItems = ({ product }) => {
  const { image, name, currentPrice, id } = product;
  const { removeFromCart } = useContext(MainContext);
  const [count, setCount] = useState(1);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <S.ProductWrapper>
      <S.ProductWrapperGroup>
        <Link to={`/product/detail/${id}`}>
          <S.ImageWrapper>
            <img src={image} alt={name} />
          </S.ImageWrapper>
        </Link>
        <S.ProductInfoWrapper>
          <S.ProductInfo>
            <S.ProductInfoTitle>{name}</S.ProductInfoTitle>
            <S.BtnGroup>
              <S.CounterBtn onClick={() => decrement()} disabled={count == 1} > <RemoveIcon color="black" /> </S.CounterBtn>
              <S.ProductCount>{count}</S.ProductCount>
              <S.CounterBtn onClick={() => increment()}> <AddIcon color="black" /> </S.CounterBtn>
            </S.BtnGroup>
          </S.ProductInfo>
        </S.ProductInfoWrapper>
      </S.ProductWrapperGroup>
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
