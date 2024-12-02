import React from "react";
import airport from "../assets/images/airport.jpg"; // Importação da imagem

const Cta = () => {
    return (
        <section
            className="relative overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
            style={{
                boxShadow: 'inset 0px -20px 30px -10px #FDF0D5', // Sombra interna no contêiner
            }}
        >
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-[#780000] md:text-3xl">
                        Uma viagem inesquecível esperando por você
                    </h2>

                    <p className="hidden text-gray-500 md:mt-4 md:block">
                        Estamos aqui para ajudá-lo a planejar a sua próxima aventura. Clique no botão abaixo e fale conosco agora mesmo!
                    </p>

                    <div className="mt-4 md:mt-8">
                        <a
                            href="#"
                            className="inline-block rounded bg-[#780000] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#c1121f] focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Entre em contato
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative">
                <img
                    alt="Aeroporto movimentado"
                    src={airport}
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                    style={{
                        boxShadow: 'inset 0px -20px 30px -10px #FDF0D5', // Sombra interna na parte inferior da imagem
                    }}
                />
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
        </section>
    );
};

export default Cta;
