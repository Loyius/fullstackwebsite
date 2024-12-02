import React from "react";
import { useNavigate } from "react-router-dom";
import rioDeJaneiro from "../assets/images/rio-de-janeiro.jpg";
import bangkok from "../assets/images/bangkok.jpg";
import novaYork from "../assets/images/nova-york.jpg";
import roma from "../assets/images/roma.jpg";
import toquio from "../assets/images/toquio.jpg";
import paris from "../assets/images/paris.jpg";

const destinos = [
    {
        id: 1,
        url: "rio-de-janeiro",
        title: "Rio de Janeiro",
        location: "Brasil, América do Sul",
        price: "R$2,300",
        rating: "4.6",
        image: rioDeJaneiro,
    },
    {
        id: 2,
        url: "bangkok",
        title: "Bangkok",
        location: "Tailândia, Ásia",
        price: "$3,500",
        rating: "5.0",
        image: bangkok,
    },
    {
        id: 3,
        url: "nova-york",
        title: "Nova York",
        location: "Estados Unidos, América do Norte",
        price: "R$7,200",
        rating: "4.7",
        image: novaYork,
    },
    {
        id: 4,
        url: "roma",
        title: "Roma",
        location: "Itália, Europa",
        price: "R$4,421",
        rating: "4.9",
        image: roma,
    },
    {
        id: 5,
        url: "toquio",
        title: "Tóquio",
        location: "Japão, Ásia",
        price: "R$5,800",
        rating: "4.9",
        image: toquio,
    },
    {
        id: 6,
        url: "paris",
        title: "Paris",
        location: "França, Europa",
        price: "R$9,999",
        rating: "4.8",
        image: paris,
    },
];

export default function ProductCards() {
    const navigate = useNavigate(); // Hook para navegação

    return (
        <div className="bg-white relative">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {destinos.map((destino) => (
                        <div
                            key={destino.id}
                            className="group relative cursor-pointer"
                            onClick={() => navigate(`/viagens/${destino.url}`)} // Redireciona ao clicar no card
                        >
                            <img
                                alt={destino.title}
                                src={destino.image}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        {destino.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {destino.location}
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    {destino.price}
                                </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-500">
                                <span className="flex items-center">
                                    ⭐ {destino.rating}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradiente no rodapé */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "10%",
                    background: "linear-gradient(to top, #FDF0D5, transparent)",
                    zIndex: 1,
                }}
            ></div>
        </div>
    );
}
