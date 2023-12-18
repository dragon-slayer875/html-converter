import { useState } from "react";
import tempPng from "./assets/cert.png";
import "./App.css";

function App() {
    return (
        <>
            <div className="flex-col space-y-5">
                <div className="flex-1 max-w-2xl shadow-[0_5px_15px_-5px_white] ">
                    <img src={tempPng} alt="" className="" />
                </div>
                <h1 className="flex-2 text-3xl font-bold ">Hello world!</h1>
                <button className="flex-2 btn btn-primary ">Button</button>
            </div>
        </>
    );
}

export default App;
