import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-[#FDF0D5]">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-700">
                    Conectando você ao mundo, ajudando a criar experiências e memórias únicas. Estamos prontos para tornar sua próxima aventura inesquecível!
                </p>

                {/* Redes Sociais */}
                <ul className="mt-6 flex justify-center gap-6 md:gap-8">
                    <li>
                        <a
                            href="https://github.com/Loyius/fullstackwebsite/tree/main"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:text-gray-900"
                        >
                            <span className="sr-only">GitHub</span>
                            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                        </a>
                    </li>
                </ul>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <a className="text-gray-700 transition hover:text-gray-900" href="#">
                            Contato
                        </a>
                    </li>
                    <li>
                        <a className="text-gray-700 transition hover:text-gray-900" href="#">
                            Sobre nós
                        </a>
                    </li>
                </ul>

                <p className="mt-12 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} VaiTur. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
