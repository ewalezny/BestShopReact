import React from "react";
import "./scss/main.scss";
import Header from "./components/Header";
import Opening from "./components/Opening";
import Statistics from "./components/Statistics";

const App = () => {
    return (
        <>
            <Header/>
            <Opening/>
            <Statistics/>
        </>
    )
}

export default App;
