import { useEffect, useState } from "react";
import "./SoundtrackList.css";
import SoundtrackCard from "../SoundtrackCard/SoundtrackCard";
function SoundtracksList() {
    // eslint-disable-next-line no-unused-vars
    let [error, setError] = useState(false);
    let [soundtracks, setSoundtracks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://projetjs-backend.onrender.com/soundtracks"
                );
                const dataSoundtracks = await response.json();
                console.log(dataSoundtracks);
                setSoundtracks(dataSoundtracks);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="soundtracks-list">
            {soundtracks.map((soundtrack) => (
                <SoundtrackCard key={soundtrack.id} soundtrack={soundtrack} />
            ))}
        </div>
    );
}
export default SoundtracksList;
