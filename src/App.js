import React from "react";
import "./scss/main.scss";
import Header from "./components/Header";
import Opening from "./components/Opening";
import Statistics from "./components/Statistics";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";

const App = () => {
    return (
        <>
            <Header/>
            <Opening/>
            <Statistics/>
            <Benefits/>
            <Pricing/>
        </>
    )
}

export default App;
