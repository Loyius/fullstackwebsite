import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Viagem from "../components/Viagem";

const Viagens = () => {
    return (
        <div>
            <Header />
                <Viagem/>
            <Footer />
        </div>
    );
};

export default Viagens;
