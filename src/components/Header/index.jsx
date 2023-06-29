import React, { useContext, useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import HeaderTop from "./HeaderTop";
import { Container } from "components/Container/style";
import Badge from "@mui/material/Badge";
import * as Style from "./style";

import { CartIcon, LogoIcon, PhoneLogo } from "assets/images/svgIcons";
import like from "assets/images/like.png";
import CartModal from "components/CartModal";
import MainContext from "reducer/CartContext";

const Header = () => {
    const [burger, setBurger] = useState(false);
    const [cartModal, setCartModal] = useState(false);
    const [likeModal, setLikeModal] = useState(false);
    const { cartItems, likeItems } = useContext(MainContext);

    const handleClick = () => {
        setBurger(!burger);
    };

    const handleModal = () => {
        setCartModal(!cartModal);
    };

    const handleLike = () => {
        setLikeModal(!likeModal);
    };

    useEffect(() => {
        if (burger) {
            window.document.body.style.overflow = "hidden";
        } else {
            window.document.body.style.overflow = "auto";
        }
    });

    return (
        <>
            <HeaderTop />
            <Style.HeaderWrapper>
                <Style.HeaderNavbar>
                    <Container>
                        <Style.HeaderNavContent>
                            <Style.BurgerMenuContent
                                onClick={() => handleClick()}
                            >
                                <Style.BurgerMenuRows />
                                <Style.BurgerMenuRows />
                                <Style.BurgerMenuRows />
                            </Style.BurgerMenuContent>
                            <Style.LogoLink to='/'>
                                <LogoIcon />
                            </Style.LogoLink>
                            <Style.HeaderNavLinkList>
                                <Style.NavLink to='/'>Главная</Style.NavLink>
                                <Style.NavLink to='/'>Каталог</Style.NavLink>
                                <Style.NavLink to='/discount'>
                                    Оптовая продажа
                                </Style.NavLink>
                                <Style.NavLink to='/about-us'>
                                    О нас
                                </Style.NavLink>
                            </Style.HeaderNavLinkList>
                            <Style.UserActions>
                                <Style.PhoneContent href={`tel:+${7966558499}`}>
                                    <PhoneLogo />
                                    +7 (966) 55 88 499
                                </Style.PhoneContent>
                                <Style.ActionBox>
                                    <Badge
                                        badgeContent={Number(likeItems.length)}
                                        color='primary'
                                    >
                                        <button onClick={handleLike}>
                                            <img src={like} alt='' />
                                        </button>
                                    </Badge>
                                    <Badge
                                        badgeContent={Number(cartItems.length)}
                                        color='primary'
                                    >
                                        <button onClick={handleModal}>
                                            <CartIcon />
                                        </button>
                                    </Badge>
                                </Style.ActionBox>
                            </Style.UserActions>
                        </Style.HeaderNavContent>
                        <CartModal
                            cartModal={cartModal}
                            handleModal={handleModal}
                            data={cartItems}
                        />
                    </Container>
                    <BurgerMenu open={burger} handleClick={handleClick} />
                </Style.HeaderNavbar>
            </Style.HeaderWrapper>
        </>
    );
};

export default Header;
