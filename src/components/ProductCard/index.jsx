import React, { useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import Rate from "components/Rate";
import MainContext from "reducer/CartContext";
import * as S from "./style";

const ProductCard = ({ data, select, like }) => {
  console.log(like);
  const { inCash, image, name, currentPrice, oldPrice, id, mark } = data;
  const { addToCart, removeFromCart, addToLike, removeFromLike } =
    useContext(MainContext);

  const cartToggle = () => {
    return select ? removeFromCart(id) : addToCart(data);
  };
  const likeToggle = () => {
    return like ? removeFromLike(id) : addToLike(data);
  };
  return (
    <S.ProductCardWrapper>
      <S.ProductImageLink to={`/product/detail/${id}`}>
        <S.InCashTextBox>
          <S.CashText>{inCash ? "В наличии" : "Нет в наличии"}</S.CashText>
        </S.InCashTextBox>
        <S.SaleBox>Sale</S.SaleBox>
        <S.ProductImage src={image} />
      </S.ProductImageLink>
      <S.ProductCardInfo>
        <S.RateText>
          <Rate mark={mark} />
          <S.RateTextInfo>(12) отзывов</S.RateTextInfo>
        </S.RateText>

        <S.InfoTitle>{name}</S.InfoTitle>
        <S.PriceBoard>
          <S.MainPrice>{currentPrice}</S.MainPrice>
          <S.OldPrice>{oldPrice}</S.OldPrice>
          <IconButton onClick={likeToggle}>
            {like ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon color="error" />
            )}
          </IconButton>
          <IconButton onClick={cartToggle}>
            {select ? (
              <ShoppingCartIcon color="primary" />
            ) : (
              <ShoppingCartOutlinedIcon color="primary" />
            )}
          </IconButton>
        </S.PriceBoard>
      </S.ProductCardInfo>
    </S.ProductCardWrapper>
  );
};

export default ProductCard;
