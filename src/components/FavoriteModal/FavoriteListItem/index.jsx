import MainContext from "context/CartContext";
import React from "react";
import * as S from "./style";

const FavoriteListItem = ({ favorite }) => {
    const { image, name, currentPrice, id } = favorite;
    const { removeFromCart } = useContext(MainContext)

    return (
        <S.FavoriteWarpper>
            
        </S.FavoriteWarpper>
    );
};
export default FavoriteListItem;
