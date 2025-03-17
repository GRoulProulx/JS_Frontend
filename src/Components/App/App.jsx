import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import SoundtracksList from "../SoundtrackList/Soundtracks";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/soundtracks" element={<SoundtracksList />} />
                    <Route path="" element={<Home />} />
                    <Route path="" element={<Home />} />
                    <Route path="" element={<Home />} />
                    <Route path="" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
