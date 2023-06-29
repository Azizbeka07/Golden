import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Statistic from "components/Statistic";
import WhyUs from "components/WhyUs";
import CategoryList from "components/CategoryList";
import PopularProducts from "components/PopularProducts";
import ContactForm from "components/ContactForm";

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Banner />
                <Statistic />
                <WhyUs />
                <CategoryList />
                <PopularProducts />
                <ContactForm />
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Home;
