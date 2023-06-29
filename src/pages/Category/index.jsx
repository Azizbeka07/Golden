import Header from "components/Header";
import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "components/ProductCard";
import { Container } from "components/Container/style";
import BreadCrumbs from "components/BreadCrumbs";
import Footer from "components/Footer";
import PopularProducts from "components/PopularProducts";
import ContactForm from "components/ContactForm";
import InfoColumns from "components/InfoColumns";
import { infoData, infoSecondData } from "components/InfoColumns/data";

const Category = () => {
    const { type } = useParams();
    const [data, setData] = useState([]);
    const categoryText = type.toLocaleLowerCase();

    async function getProduct() {
        const res = await axios.get(
            `${process.env.REACT_APP_MAIN_URL}?category=${categoryText}`
        );
        if (res.status == 200) {
            setData(res.data);
        }
    }

    useEffect(() => {
        getProduct();
    }, [type]);

    return (
        <>
            <Header />
            <Container>
                <BreadCrumbs disableText={"Каталог"} />
                <CategoryListWrapper>
                    {data?.map((el) => (
                        <ProductCard key={el.id} data={el} />
                    ))}
                </CategoryListWrapper>
            </Container>
            <PopularProducts />
            <InfoColumns data={infoData} />
            <InfoColumns data={infoSecondData} reverse={true} />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Category;

const CategoryListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 50px;
    flex-wrap: wrap;
    margin-block: 50px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
    }
`;
