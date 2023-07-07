import React, { useContext } from "react";
import MainContext from "context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import * as S from "./style";
import Rate from "components/Rate";

const FavoriteListItem = ({ favorite, select, data }) => {
  // const { id } = data;
  const { image, name, currentPrice, id, mark, data } = favorite;
  const { removeFromCart, addToCart } = useContext(MainContext);

  const FavoriteToggle = () => {
    return select ? removeFromCart(id) : addToCart(data);
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
      <S.FavoriteRight onClick={FavoriteToggle}>
        {select ? <RemoveIcon color="primary" /> : <AddIcon color="primary" />}
        <S.FavoritePlus>Добавить</S.FavoritePlus>
      </S.FavoriteRight>
    </S.FavoriteWarpper>
  );
};
export default FavoriteListItem;
