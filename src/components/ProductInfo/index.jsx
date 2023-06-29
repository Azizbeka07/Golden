import React from "react";
import { ContentTitle } from "components/InfoColumns/style";
import * as S from "./style";
import { DiscountText, MainPriceText, PriceBox } from "components/Banner/style";
import Button from "components/Button";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import Rate from "components/Rate";
import { RateText, RateTextInfo } from "components/ProductCard/style";

const ProductInfo = ({ name, oldPrice, currentPrice }) => {
    return (
        <S.ProductInfoWrapper>
            <RateText>
                <Rate />
                <RateTextInfo>(12) отзывов</RateTextInfo>
            </RateText>
            <ContentTitle>{name}</ContentTitle>
            <PriceBox>
                <MainPriceText>{currentPrice}</MainPriceText>
                <DiscountText>{oldPrice}</DiscountText>
            </PriceBox>
            <Button text={"Купить"} />
            <MainAccordion>
                <AccordionHeader
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography>Оплата</Typography>
                </AccordionHeader>
                <AccordionDetails>
                    <Typography>
                        Оплата при получении товара, Картой онлайн, Google Pay,
                        Акционная оплата картой Visa, Безналичными для
                        юридических лиц, Безналичными для физических лиц, Apple
                        Pay, PrivatPay, Оплата картой в отделении
                    </Typography>
                </AccordionDetails>
            </MainAccordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2a-content'
                    id='panel2a-header'
                >
                    <Typography>Монтаж и доставка</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel3a-content'
                    id='panel3a-header'
                >
                    <Typography>Гарантии и выгода</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </S.ProductInfoWrapper>
    );
};

export default ProductInfo;

const MainAccordion = styled(Accordion)`
    margin-top: 40px;
    border: none !important;

    & > * {
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
    }
`;

const AccordionHeader = styled(AccordionSummary)`
    border: none !important;
    box-shadow: none !important;
`;
