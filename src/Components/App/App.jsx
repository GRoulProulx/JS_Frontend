import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import SoundtracksList from "../SoundtrackList/SoundtrackList";
import AddSoundtrackForm from "../AddSoundtrackForm/AddSoundtrackForm";
import SoundtrackDetails from "../SoundtrackDetails/SoundtrackDetails";
import ModifySoundtrackForm from "../ModifySoundtrackForm/ModifySoundtrackForm";
import Page404 from "../error 404/error";
import AdminSection from "../Admin/Admin";

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
                    <Route path="/admin" element={<AdminSection />} />
                    <Route path="/error" element={<Page404 />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
