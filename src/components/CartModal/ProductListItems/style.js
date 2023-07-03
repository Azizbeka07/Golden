import styled from "styled-components";
import { Colors, Flex } from "utils/index";
import { adaptiveValue } from "utils/variable";

const ProductWrapper = styled.div`
  ${Flex.spaceBetween}
  width: 100%;
  height: 100%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const ImageWrapper = styled.div`
  width: 136px;
  height: 120px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ProductInfoWrapper = styled.div`
  ${Flex.justFlex}
`;
const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  flex-direction: column;
  gap: 30px;
  height: 100%;
`;

const ProductInfoTitle = styled.h3`
  ${adaptiveValue("font-size", 16, 12)}
  ${adaptiveValue("line-height", 26, 18)}
`;

const BtnGroup = styled.div`
  ${Flex.alignCenter};
  text-align: start;
  gap: 8px;
`;

const CounterBtn = styled.button`
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
  color: ${Colors.dark};

  &:disabled {
    color: ${Colors.borderColor};
  }
`;

const ProductCount = styled.span`
  padding: 5px 22px;
  border: 1px solid ${Colors.lightGray};
  color: ${Colors.dark};
`;

const ProductAction = styled.div`
  ${Flex.spaceBetween};
  flex-direction: column;
`;

const Actions = styled.div`
  ${Flex.justFlex};
  gap: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DeleteText = styled.p`
  color: ${Colors.primaryColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-transform: capitalize;
`;

const CurrentPrice = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

const ProductWrapperGroup = styled.div`
  display: flex;
`;

export {
  ProductWrapper,
  ImageWrapper,
  ProductInfoWrapper,
  ProductInfo,
  ProductAction,
  BtnGroup,
  CounterBtn,
  ProductCount,
  ProductInfoTitle,
  Actions,
  DeleteText,
  CurrentPrice,
  ProductWrapperGroup,
};
