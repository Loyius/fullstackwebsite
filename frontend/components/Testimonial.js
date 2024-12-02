import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:flex md:items-end md:justify-between">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Alguns depoimentos de nossos clientes 🛫
                        </h2>

                        <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
                            Oferecemos experiências inesquecíveis ao redor do mundo, e nossos clientes têm histórias incríveis para contar.
                            Veja o que os viajantes estão dizendo sobre suas aventuras e o atendimento que receberam!
                        </p>
                    </div>

                    <a
                        href="/destinos"
                        className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#780000] px-5 py-3 text-[#780000] transition hover:bg-[#780000] hover:text-white md:mt-0"
                    >
                        <h2>Veja nossos destinos</h2>
                        <FontAwesomeIcon icon={faStar} className="h-5 w-5" />
                    </a>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                    <blockquote className="flex h-full w-96 flex-col justify-between bg-white p-8 shadow-sm rounded-2xl sm:p-10">
                        <div>
                            <div className="flex gap-1 text-[#669BBC]">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className="h-5 w-5 text-[#669BBC]"
                                    />
                                ))}
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-[#003049] sm:text-3xl">A melhor viagem da minha vida!</p>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    Viajar para a Grécia foi um sonho realizado, e tudo foi perfeito!
                                    Desde o planejamento até os pequenos detalhes, a equipe garantiu que nossa experiência fosse inesquecível.
                                    Recomendo de olhos fechados!
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                            &mdash; Sofia Martins
                        </footer>
                    </blockquote>

                    <blockquote className="flex h-full w-96 flex-col justify-between bg-white p-8 shadow-sm rounded-2xl sm:p-10">
                        <div>
                            <div className="flex gap-1 text-[#669BBC]">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className="h-5 w-5 text-[#669BBC]"
                                    />
                                ))}
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-[#003049] sm:text-3xl">Incrível do início ao fim</p>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    Minha viagem para a Tailândia foi uma aventura que nunca esquecerei.
                                    A organização foi impecável, e os passeios foram cuidadosamente planejados.
                                    Mal posso esperar para a próxima!
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                            &mdash; Gabriel Almeida
                        </footer>
                    </blockquote>

                    <blockquote className="flex h-full w-96 flex-col justify-between bg-white p-8 shadow-sm rounded-2xl sm:p-10">
                        <div>
                            <div className="flex gap-1 text-[#669BBC]">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className="h-5 w-5 text-[#669BBC]"
                                    />
                                ))}
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-[#003049] sm:text-3xl">Paisagens de tirar o fôlego</p>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    Minha viagem para a Patagônia foi maravilhosa. As paisagens eram de outro mundo,
                                    e cada dia parecia melhor que o anterior. Uma experiência que vou guardar para sempre!
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                            &mdash; Rafael Carvalho
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
