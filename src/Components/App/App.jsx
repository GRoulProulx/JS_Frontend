import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import SoundtracksList from "../SoundtrackList/SoundtrackList";
import AddSoundtrackForm from "../AddSoundtrackForm/AddSoundtrackForm";
import SoundtrackDetails from "../SoundtrackDetails/SoundtrackDetails";
import ModifySoundtrackForm from "../ModifySoundtrackForm/ModifySoundtrackForm";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/soundtracks-list"
                        element={<SoundtracksList />}
                    />
                    <Route
                        path="/soundtracks/:id"
                        element={<SoundtrackDetails />}
                    />
                    <Route
                        path="/add-soundtrack"
                        element={<AddSoundtrackForm />}
                    />{" "}
                    <Route path="/soundtracks/edit/:id" element={<ModifySoundtrackForm />} />
                    <Route path="/admin" element={<Home />} />
                    <Route path="\*" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
