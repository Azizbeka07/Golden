import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "assets/images/svgIcons";
import { socialMediaData } from "./data";
import { Container } from "components/Container/style";
import * as S from "./style";

const Footer = () => {
    return (
        <S.FooterWrapper>
            <Container>
                <S.FooterContent>
                    <Link to='/'>
                        <LogoIcon color='#fff' />
                    </Link>
                    <S.SocialMediaLinks>
                        {socialMediaData.map((el) => (
                            <S.MediaLink key={el.id} href={el.href}>
                                {el.icon}
                            </S.MediaLink>
                        ))}
                    </S.SocialMediaLinks>
                </S.FooterContent>
                <S.FooterBottom>
                    © {new Date().getFullYear()} Golden Soft All rights
                    reserved.
                </S.FooterBottom>
            </Container>
        </S.FooterWrapper>
    );
};

export default Footer;
