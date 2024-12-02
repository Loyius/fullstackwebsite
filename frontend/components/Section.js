import React from "react";
import familia from "../assets/images/familia.jpg"; // Importação da imagem

const Section = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center md:gap-8">
                    {/* Alterando a largura da imagem para cobrir mais espaço */}
                    <div className="md:col-span-2">
                        <img
                            src={familia} // Uso da imagem importada
                            className="w-full h-auto rounded-[20px] object-cover" // Ajustando tamanho da imagem
                            alt="Família aproveitando um momento especial"
                        />
                    </div>

                    <div className="md:col-span-1">
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                Momentos inesquecíveis com sua família
                            </h2>

                            <p className="mt-4 text-gray-700">
                                Descubra destinos incríveis e crie memórias especiais ao lado das pessoas que você ama.
                                Planeje a viagem perfeita para toda a família!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
