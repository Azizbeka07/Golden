import React from "react";
import { Container } from "@mui/system";
import Header from "components/Header";
import Footer from "components/Footer";
import { AboutUsData } from "./data";
import * as S from "./style";

import AboutUsBannerImage from "assets/images/AboutUs/DiscountSale_1.png";
import AboutUsPlayImage from "assets/images/AboutUs/PlayImage.png";
import CategoryList  from "components/CategoryList";
import PopularProducts from "components/PopularProducts";

const AboutUs = ({}) => {
  return (
    <>
      <Header />
      <Container>
        <S.AboutUsWrapper>
          <S.AboutUsLeftWrapper>
            <S.AboutUsLeftImage src={AboutUsBannerImage} alt="img" />
            <S.AboutUsPlayImage src={AboutUsPlayImage} alt="img" />
          </S.AboutUsLeftWrapper>
          <S.AboutUsRightWrapper>
            <S.AboutUsRightAboutUs>о нас</S.AboutUsRightAboutUs>
            <S.AboutUsTitleGroup>
              <S.AboutUsRightTitle>Компания</S.AboutUsRightTitle>
              <S.AboutUsRightTitleSpan>Golden Soft</S.AboutUsRightTitleSpan>
            </S.AboutUsTitleGroup>
            <S.AboutUsRightText>
              Sit tempor ante justo amet duis. Ultricies cras eleifend elit,
              posuere et risus non. Id et ut pellentesque consequat, amet erat
              gravida euismod pharetra.
            </S.AboutUsRightText>
          </S.AboutUsRightWrapper>
        </S.AboutUsWrapper>
      </Container>
      <S.AboutUsStaticWrapper>
        <S.StatisticWrapper>
          <S.StatisticContent>
            {AboutUsData.map((el) => (
              <S.StatisticContentBox key={el.id}>
                <S.Count>{el.count}</S.Count>
                <S.CountText>{el.text}</S.CountText>
              </S.StatisticContentBox>
            ))}
          </S.StatisticContent>
        </S.StatisticWrapper>
      </S.AboutUsStaticWrapper>
      <CategoryList />
      <PopularProducts />
      <Footer />
    </>
  );
};

export default AboutUs;
