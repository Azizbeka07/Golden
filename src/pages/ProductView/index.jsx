import InfoColumns from "components/InfoColumns";
import { infoData, infoSecondData } from "components/InfoColumns/data";
import ContactForm from "components/ContactForm";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "components/Container/style";
import BreadCrumbs from "components/BreadCrumbs";
import styled from "styled-components";
import { Flex } from "utils/index";
import ProductImageSwiper from "components/ProductImageSwiper";
import ProductInfo from "components/ProductInfo";

const ProductView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const getData = async () => {
        const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}/${id}`);
        if (res.status == 200) {
            setProduct(res.data);
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    return (
        <>
            <Header />
            <Container>
                <BreadCrumbs
                    disableText={product?.name}
                    additionalPageName={"Каталог"}
                    additionalHrefText={"/catalog"}
                />
                <ProductWrapper>
                    <ProductImageSwiper image={product?.image} />
                    <ProductInfo {...product} />
                </ProductWrapper>
            </Container>
            <InfoColumns data={infoData} />
            <InfoColumns data={infoSecondData} reverse={true} />
            <ContactForm />
            <Footer />
        </>
    );
};

export default ProductView;

const ProductWrapper = styled.section`
    width: 100%;
    margin-block: 40px;
    ${Flex.justFlex}
    gap: 30px;
`;
