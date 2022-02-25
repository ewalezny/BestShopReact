import React from "react";
import "./scss/main.scss";
import Header from "./components/Header";
import Opening from "./components/Opening";
import Statistics from "./components/Statistics";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <Opening/>
            <Statistics/>
            <Benefits/>
            <Pricing/>
            <Footer/>
        </>
    )
}

export default App;
