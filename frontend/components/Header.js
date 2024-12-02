import React from "react";
import Logo from "../assets/images/logo-com-texto-no-background.png";

const Header = () => {
    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block" href="/#">
                            <span className="sr-only">Home</span>
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-16"
                            />
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav
                            aria-label="Global"
                            className="hidden md:block md:flex-1 md:justify-start"
                        >
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-[#780000]"
                                        href="#"
                                    >
                                        Sobre nós
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-[#780000]"
                                        href="/destinos"
                                    >
                                        Destinos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-[#780000]"
                                        href="#"
                                    >
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-[#780000] px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-[#c1121f]"
                                    href="/login"
                                >
                                    Login
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#780000] transition hover:bg-[#c1121f] hover:text-white"
                                        href="/registro"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-[#780000]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
