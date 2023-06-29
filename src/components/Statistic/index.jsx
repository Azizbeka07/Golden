import React from "react";
import { statisticData } from "./data";
import * as S from "./style";

const Statistic = () => {
    return (
        <S.StatisticWrapper>
            <S.StatisticContainer>
                <S.StatisticContent>
                    {statisticData.map((el) => (
                        <S.StatisticContentBox key={el.id}>
                            <S.Count>{el.count}</S.Count>
                            <S.CountText>{el.text}</S.CountText>
                        </S.StatisticContentBox>
                    ))}
                </S.StatisticContent>
            </S.StatisticContainer>
        </S.StatisticWrapper>
    );
};

export default Statistic;
