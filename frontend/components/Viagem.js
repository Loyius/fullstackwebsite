import React from "react";
import rioDeJaneiro from "../assets/images/rio-de-janeiro.jpg";
import bangkok from "../assets/images/bangkok.jpg";
import novaYork from "../assets/images/nova-york.jpg";
import roma from "../assets/images/roma.jpg";
import toquio from "../assets/images/toquio.jpg";
import paris from "../assets/images/paris.jpg";

import { useParams } from "react-router-dom";

const tripsData = {
    paris: {
        title: "Paris",
        description: "Conhecida como a Cidade Luz, Paris encanta com seus monumentos icônicos, como a Torre Eiffel e o Louvre, suas charmosas ruas e cafés e uma atmosfera romântica única no mundo.",
        image: paris,
        price: "R$9,999",
        rating: 4.8,
        days: 7,
    },
    "rio-de-janeiro": {
        title: "Rio de Janeiro",
        description: "Viva a energia vibrante do Rio de Janeiro, com praias deslumbrantes como Copacabana e Ipanema, o icônico Cristo Redentor e o espírito contagiante do Carnaval.",
        image: rioDeJaneiro,
        price: "R$2,300",
        rating: 4.6,
        days: 9,
    },
    bangkok: {
        title: "Bangkok",
        description: "Descubra Bangkok, onde tradições antigas e modernidade se encontram. Visite templos dourados, mercados flutuantes e aproveite a vida noturna dinâmica desta capital tailandesa.",
        image: bangkok,
        price: "R$3,500",
        rating: 5.0,
        days: 11,
    },
    "nova-york": {
        title: "Nova York",
        description: "Explore a cidade que nunca dorme, com sua mistura vibrante de cultura, marcos icônicos como a Times Square e a Estátua da Liberdade, além de shows na Broadway e restaurantes de classe mundial.",
        image: novaYork,
        price: "R$7,200",
        rating: 4.7,
        days: 7,
    },
    roma: {
        title: "Roma",
        description: "Passeie pela Roma Antiga, onde história e arte se entrelaçam. Admire o Coliseu, o Vaticano e as charmosas praças repletas de fontes e arquitetura renascentista.",
        image: roma,
        price: "R$4,421",
        rating: 4.9,
        days: 10,
    },
    toquio: {
        title: "Tóquio",
        description: "Mergulhe na mistura fascinante de tradição e tecnologia em Tóquio. Explore templos históricos, ruas cheias de neon e saboreie a culinária japonesa autêntica.",
        image: toquio,
        price: "R$5,800",
        rating: 4.9,
        days: 5,
    },
};

const Viagem = () => {
    const { nomeViagem } = useParams();
    const trip = tripsData[nomeViagem?.toLowerCase()];

    if (!trip) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Viagem Não Encontrada</h1>
                    <p className="text-gray-600 mt-4">
                        Desculpe, não conseguimos encontrar a viagem que você está procurando.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Hero Section */}
                <div className="relative w-full h-64 lg:h-96 rounded-lg overflow-hidden shadow-md">
                    <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <h1 className="text-white text-3xl lg:text-5xl font-bold">{trip.title}</h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-10 flex flex-col lg:flex-row gap-8">
                    {/* Left Content */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800">{trip.title}</h2>
                        <p className="text-gray-600 mt-4">{trip.description}</p>

                        {/* Details */}
                        <div className="mt-6">
                            <div className="flex items-center space-x-4">
                                <span className="text-lg font-semibold text-gray-800">Preço:</span>
                                <span className="text-lg font-bold text-green-600">{trip.price}</span>
                            </div>
                            <div className="flex items-center space-x-4 mt-2">
                                <span className="text-lg font-semibold text-gray-800">Avaliação:</span>
                                <span className="text-lg text-yellow-500">{trip.rating} ★</span>
                            </div>
                            <div className="flex items-center space-x-4 mt-2">
                                <span className="text-lg font-semibold text-gray-800">Duração:</span>
                                <span className="text-lg">{trip.days} dias</span>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Reserve sua Viagem</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Preço por pessoa:</span>
                                <span className="font-semibold">{trip.price}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Duração:</span>
                                <span className="font-semibold">{trip.days} dias</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Avaliação:</span>
                                <span className="font-semibold text-yellow-500">{trip.rating} ★</span>
                            </div>
                        </div>
                        <button className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                            Reserve Agora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Viagem;
