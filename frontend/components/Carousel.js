import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";

// Importação das imagens locais
import rioDeJaneiro from "../assets/images/rio-de-janeiro.jpg";
import bangkok from "../assets/images/bangkok.jpg";
import novaYork from "../assets/images/nova-york.jpg";
import roma from "../assets/images/roma.jpg";
import toquio from "../assets/images/toquio.jpg";
import paris from "../assets/images/paris.jpg";

const Carousel = () => {
    const navigate = useNavigate(); // Hook para navegação

    const destinos = [
        {
            url: "rio-de-janeiro",
            title: "Rio de Janeiro",
            location: "Brasil, América do Sul",
            price: "R$2,300",
            rating: "4.6",
            image: rioDeJaneiro,
        },
        {
            url: "bangkok",
            title: "Bangkok",
            location: "Tailândia, Ásia",
            price: "$3,500",
            rating: "5.0",
            image: bangkok,
        },
        {
            url: "nova-york",
            title: "Nova York",
            location: "Estados Unidos, América do Norte",
            price: "R$7,200",
            rating: "4.7",
            image: novaYork,
        },
        {
            url: "roma",
            title: "Roma",
            location: "Itália, Europa",
            price: "R$4,421",
            rating: "4.9",
            image: roma,
        },
        {
            url: "toquio",
            title: "Tóquio",
            location: "Japão, Ásia",
            price: "R$5,800",
            rating: "4.9",
            image: toquio,
        },
        {
            url: "paris",
            title: "Paris",
            location: "França, Europa",
            price: "R$9,999",
            rating: "4.8",
            image: paris,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-center mb-12 mt-10">Melhores destinos</h2>
            <div className="w-full max-w-6xl mx-auto py-8 relative pb-12">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    autoplay={{ delay: 4000 }}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    className="swiper-container"
                >
                    {destinos.map((destino, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
                                onClick={() => navigate(`/viagens/${destino.url}`)} // Redireciona ao clicar no card
                            >
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img
                                        src={destino.image}
                                        alt={destino.title}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="h-5 w-5 text-[#c1121f]"
                                        />
                                        <span className="ml-1 text-sm text-slate-400">
                                            {destino.rating}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-1 p-2">
                                    <h2 className="text-slate-700 font-bold">{destino.title}</h2>
                                    <p className="mt-1 text-sm text-slate-400">
                                        {destino.location}
                                    </p>

                                    <div className="mt-3 flex items-end justify-between">
                                        <p>
                                            <span className="text-lg font-bold text-[#c1121f]">
                                                {destino.price}
                                            </span>
                                        </p>
                                        <div className="group inline-flex rounded-xl bg-[#c1121f]/10 p-2 hover:bg-[#c1121f]/20">
                                            <FontAwesomeIcon
                                                icon={faShoppingCart}
                                                className="h-4 w-4 text-[#c1121f] group-hover:text-[#c1121f]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination mt-4"></div>
            </div>
        </div>
    );
};

export default Carousel;
