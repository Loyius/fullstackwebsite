import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";

const Destinos = () => {
    return (
        <>
            <Header />
            <main className="bg-[#FDF0D5] min-h-screen">
                {/* Adicione aqui o conteúdo principal da página */}
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-3xl font-bold text-center">Destinos</h1>
                    <p className="text-center text-gray-600 mt-4">
                        Explore os melhores destinos para sua próxima aventura!
                    </p>
                </div>
                <section>
                    <ProductCards/>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Destinos;
