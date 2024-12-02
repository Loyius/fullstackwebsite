import React from "react";
import BannerImage from "../assets/images/banner.webp"; // Importando a imagem correta

const Banner = () => {
    return (
        <section
            className="relative bg-cover bg-left bg-no-repeat"
            style={{ backgroundImage: `url(${BannerImage})` }} // Definindo a imagem de fundo dinamicamente
        >
            <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

            <div className="relative ml-30px max-w-screen-xl px-4 py-32 sm:px-9 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                        Descubra
                        <strong className="block font-extrabold text-[#003049]"> o mundo. </strong>
                    </h1>

                    <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                        Encontre destinos únicos e crie memórias inesquecíveis com nossos pacotes de viagem exclusivos.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full rounded bg-[#003049] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#002635] focus:outline-none focus:ring active:bg-[#001F24] sm:w-auto"
                        >
                            Entre em contato
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#003049] shadow hover:text-[#002635] focus:outline-none focus:ring active:text-[#001F24] sm:w-auto"
                        >
                            Verifique nossos destinos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
