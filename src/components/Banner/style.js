import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Colors, Flex } from "utils";
import { adaptiveValue } from "utils/variable";

const BannerWrapper = styled.div`
    padding: 100px 0 30px;
    background-color: #fafafa;
`;

const SwiperItems = styled(SwiperSlide)`
    display: flex !important;
    align-items: flex-start;
    ${adaptiveValue("gap", 75, 35)}

    @media(max-width: 993px) {
        flex-direction: column;
        align-items: center;
    }
`;

const SwiperItemsImage = styled.div`
    max-width: 500px;
    width: 100%;
    height: auto;

    & > img {
        width: 100%;
        object-fit: contain;
    }
`;

const SwiperInfo = styled.div`
    max-width: 604px;
    width: 100%;
    text-align: left;
`;

const InfoTitle = styled.h1`
    font-weight: 600;
    ${adaptiveValue("font-size", 44, 22)}
    ${adaptiveValue("line-height", 62, 34)}
    color: ${Colors.dark};
    width: 100%;
`;

const InfoText = styled.p`
    font-weight: 400;
    ${adaptiveValue("font-size", 14, 12)}
    ${adaptiveValue("line-height", 24, 18)}
    color: ${Colors.gray};
    margin-top: 20px;
    width: 287px;
`;

const PriceBox = styled.div`
    ${Flex.alignCenter};
    gap: 10px;
    ${adaptiveValue("margin-top", 32, 20)}
    margin-block: 20px;
`;

const PriceBadge = styled.span`
    font-size: 12px;
    line-height: 22px;
    color: ${Colors.gray};
`;

const MainPriceText = styled.p`
    ${adaptiveValue("font-size", 24, 18)}
    ${adaptiveValue("line-height", 28, 21)}
    color: ${Colors.gray}
`;

const DiscountText = styled.p`
    font-weight: 300;
    ${adaptiveValue("font-size", 24, 18)}
    ${adaptiveValue("line-height", 28, 21)}
    text-decoration: line-through;
    color: ${Colors.borderColor};
`;

const SwiperNavigation = styled.div`
    width: 180px;
    margin-inline: auto;
    ${adaptiveValue("margin-top", 50, 32)}
    ${adaptiveValue("margin-bottom", 48, 40)}
    ${Flex.center}
    gap: 10px;

    @media (max-width: 576px) {
        width: 100%;
        justify-content: space-between;
    }
`;

const SwiperNavBtn = styled.button`
    background-color: transparent;
    display: block;
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export {
    BannerWrapper,
    SwiperItems,
    SwiperItemsImage,
    SwiperInfo,
    InfoTitle,
    InfoText,
    PriceBox,
    PriceBadge,
    MainPriceText,
    DiscountText,
    SwiperNavigation,
    SwiperNavBtn,
};
