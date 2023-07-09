import React, { useContext } from "react";
import MainContext from "context/CartContext";
import * as S from "./style";
import Rate from "components/Rate";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FavoriteListItem = ({ favorite, select }) => {
  const { image, id, mark, currentPrice, name } = favorite;

  const { addToCart, removeFromCart } = useContext(MainContext);

  const cartToggle = () => {
    return select ? removeFromCart(id) : addToCart(favorite);
  };

  return (
    <S.FavoriteWarpper>
      <S.FavoriteLeft>
        <S.ImageLink to={`/product/detail/${id}`}>
          <S.FavoriteImageWrapper src={image} alt="" />
        </S.ImageLink>
        <S.FavoriteTitleItems>
          <S.FavoriteTitle>{name}</S.FavoriteTitle>
          <S.RateText>
            <Rate mark={mark} />
            <S.RateTextInfo>(12) отзывов</S.RateTextInfo>
          </S.RateText>
          <S.FavoritePrice>{currentPrice}</S.FavoritePrice>
        </S.FavoriteTitleItems>
      </S.FavoriteLeft>
      <S.FavoriteRight onClick={cartToggle}>
        {select ? <RemoveIcon color="primary" /> : <AddIcon color="primary" />}
        <S.FavoritePlus>Добавить</S.FavoritePlus>
      </S.FavoriteRight>
    </S.FavoriteWarpper>
  );
};
export default FavoriteListItem;
