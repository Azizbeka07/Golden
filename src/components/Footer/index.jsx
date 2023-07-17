import React from "react";
import * as S from "./style";
import { Container } from "components/Container/style";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "assets/imgs/svgIcons/logo";
import VcontactIcon from "assets/imgs/svgIcons/VcontactIcon";
import FacebookIcon from "assets/imgs/svgIcons/facebookIcon";
import TwitterIcon from "assets/imgs/svgIcons/twitterIcon";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <Container>
        <S.FooterContentsWrapper>
          <S.IconsContent>
            <S.FooterLogoWrapper>
              <Logo color="#ffffff" />
            </S.FooterLogoWrapper>

            <S.SocialMediaContent>
              <FacebookIcon />
              <TwitterIcon />
              <VcontactIcon />
            </S.SocialMediaContent>
          </S.IconsContent>

          <S.FooterNavsWrapper>
            <S.FooterNav>
              <S.NavTitle>Навигация</S.NavTitle>
              <S.NavLinksWrapper>
                <Link to="/">
                  <S.NavLink>Главная</S.NavLink>
                </Link>
                <Link to="/catalog">
                  <S.NavLink>Каталог</S.NavLink>
                </Link>
                <Link to="/about-us">
                  <S.NavLink>О нас</S.NavLink>
                </Link>
              </S.NavLinksWrapper>
            </S.FooterNav>

            <S.FooterNav>
              <S.NavTitle>Наши контакты</S.NavTitle>
              <S.NavLinksWrapper>
                <S.NavLink>Телефоны</S.NavLink>
                <S.NavLink href={`tel:+${79885650038}`}>
                  +7 (988) 565 00 38
                </S.NavLink>
                <S.NavLink href={`tel:+${375336628256}`}>
                  +375 33 662 82 56
                </S.NavLink>
              </S.NavLinksWrapper>
              <S.NavLinksWrapper>
                <S.NavLink>Email</S.NavLink>
                <S.NavLink>vladpertcev@mail.ru</S.NavLink>
                <S.NavLink>korobko416@gmail.com</S.NavLink>
              </S.NavLinksWrapper>
            </S.FooterNav>

            <S.FooterNav>
              <S.NavTitle>Наш адрес</S.NavTitle>
              <S.NavLink style={{ width: "182px" }}>
                Россия, Ростов-на-Дону ул. Богачева, 16
              </S.NavLink>
            </S.FooterNav>

            <S.FooterNav>
              <S.NavTitle>Информация</S.NavTitle>
              <S.NavLink>Доставка и оплата</S.NavLink>
              <S.NavLink>Гарантии</S.NavLink>
              <S.NavLink>Возврат товара</S.NavLink>
            </S.FooterNav>
          </S.FooterNavsWrapper>

          <S.AccordionsWrapper>
            <Accordion sx={{ backgroundColor: "#1F5D98", borderRadius: "5px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                backgroun-color="#fff"
              >
                <Typography>
                  <S.NavTitle>Навигация</S.NavTitle>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <S.NavLinksWrapper>
                    <Link to="/">
                      <S.NavLink>Главная</S.NavLink>
                    </Link>
                    <Link to="/catalog">
                      <S.NavLink>Каталог</S.NavLink>
                    </Link>
                    <Link to="/about-us">
                      <S.NavLink>О нас</S.NavLink>
                    </Link>
                  </S.NavLinksWrapper>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#1F5D98", borderRadius: "5px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <S.NavTitle>Наши контакты</S.NavTitle>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <S.NavLinksWrapper>
                    <S.NavSubTitle>Телефоны</S.NavSubTitle>
                    <S.NavLink>+7 (988) 565 00 38</S.NavLink>
                    <S.NavLink>+375 33 662 82 56</S.NavLink>
                  </S.NavLinksWrapper>
                  <S.NavLinksWrapper>
                    <S.NavSubTitle>Email</S.NavSubTitle>
                    <S.NavLink>vladpertcev@mail.ru</S.NavLink>
                    <S.NavLink>korobko416@gmail.com</S.NavLink>
                  </S.NavLinksWrapper>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#1F5D98", borderRadius: "5px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <S.NavTitle>Наш адрес</S.NavTitle>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <S.NavLink style={{ width: "182px" }}>
                    Россия, Ростов-на-Дону ул. Богачева, 16
                  </S.NavLink>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#0C365E", borderRadius: "5px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <S.NavTitle>Информация</S.NavTitle>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <S.NavLink>Доставка и оплата</S.NavLink>
                  <S.NavLink>Гарантии</S.NavLink>
                  <S.NavLink>Возврат товара</S.NavLink>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </S.AccordionsWrapper>
        </S.FooterContentsWrapper>
        <S.FooterBottom>
          © {new Date().getFullYear()} Golden Soft All rights reserved.
        </S.FooterBottom>
      </Container>
    </S.FooterWrapper>
  );
};

export default Footer;
