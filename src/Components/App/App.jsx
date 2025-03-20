import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import SoundtracksList from "../SoundtrackList/SoundtrackList";
import "./App.css";
import AddSoundtrackForm from "../AddSoundtrackForm/AddSoundtrackForm";

function App() {
    return (
        <div >
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/soundtracks-list" element={<SoundtracksList />} />
                    <Route path="/soundtracks/:id" element={<Home />} />
                    <Route path="/add-soundtrack" element={<AddSoundtrackForm />} />
                    <Route path="/admin" element={<Home />} />
                    <Route path="\*" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
