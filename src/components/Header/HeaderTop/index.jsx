import React from "react";
import {
    DiscountText,
    HeaderTopWrapper,
    RecallText,
    TextContent,
} from "./style";

const HeaderTop = () => {
    return (
        <HeaderTopWrapper>
            <TextContent>
                <DiscountText>
                    Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
                </DiscountText>
                <RecallText href='tel:+998999999999'>
                    Обратный звонок
                </RecallText>
            </TextContent>
        </HeaderTopWrapper>
    );
};

export default HeaderTop;
