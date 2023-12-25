import { useState } from "react";
import * as cert from "./createCert";
import tempPng from "./assets/cert.png";
import "./App.css";

function App() {

    const createCert = async () => {
        const buffer = await cert.createCert();
        return buffer;
    }
    const [cert, setCert] = useState(null);

    const handleCreateCert = async () => {
        const buffer = await createCert();
        setCert(buffer);
    }

    const handleDownloadCert = () => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(new Blob([cert], { type: "application/pdf" }));
        link.download = "certificate.pdf";
        link.click();
    }

    handleCreateCert();
    return (
        <>
            <div className="flex-col space-y-5">
                <div className="flex-1 max-w-2xl shadow-[0_5px_15px_-5px_white] ">
                    <img src={tempPng} alt="" className="" />
                </div>
                <h1 className="flex-2 text-3xl font-bold ">Hello world!</h1>
                <button onClick={handleDownloadCert} className="flex-2 btn btn-primary ">Button</button>
            </div>
        </>
    );
}

export default App;
