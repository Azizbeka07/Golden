import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Flex } from "utils";

const FavoriteWarpper = styled.div`
  ${Flex.flexBetween}
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

const FavoriteLeft = styled.div`
  ${Flex.alignCenter};
  gap: 16px;
`;

const FavoriteImageWrapper = styled.img`
  width: 90px;
  height: 90px;
`;

const ImageLink = styled(Link)`
  display: block;
`;

const FavoriteTitleItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FavoriteTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${Colors.dark};
`;

const FavoritePrice = styled.div`
  display: flex;
  margin-top: 10px;
`;

const RateText = styled.div`
  ${Flex.alignCenter}
  justify-content: space-between;
  width: 250px;
`;

const RateTextInfo = styled.p`
  font-size: 14px;
  color: ${Colors.gray};
`;

const FavoriteRight = styled(Button)`
  width: 135px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FavoritePlus = styled.h4`
  color: ${Colors.primaryColor};
`;

export {
  FavoriteWarpper,
  FavoriteLeft,
  FavoriteImageWrapper,
  FavoriteTitleItems,
  FavoriteTitle,
  FavoritePrice,
  FavoriteRight,
  RateText,
  RateTextInfo,
  FavoritePlus,
  ImageLink,
};
