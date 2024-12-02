import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner"; // Importando o componente Banner
import Testimonial from "../components/Testimonial";
import Cta from "../components/Cta"; // Importando o componente Cta
import Section from "../components/Section";

const Home = () => {
    return (
        <div>         
                <Header />
            <section>
                <Banner />
            </section>
            <section className="bg-gray-50">
                        <Carousel />
            </section>

            <section className="bg-gray-50 py-16">
                <div className="container mx-auto">
                    <Section />
                </div>
            </section>

            <section className="py-10 bg-gray-50 flex flex-col justify-center items-center">
                <Testimonial />
            </section>
            <section>
                <Cta />
            </section>
            <Footer />
        </div>
    );
};

export default Home;
