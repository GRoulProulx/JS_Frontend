import { useEffect, useState } from "react";
import "./Soundtracks.css";

function SoundtracksList() {
    // eslint-disable-next-line no-unused-vars
    let [error, setError] = useState([]);
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
                <div className="soundtrack" key={soundtrack.id}>
                    <img
                        className="soundtrack-img"
                        src={`img/${soundtrack.image}`}
                        alt={soundtrack.title}
                    />
                    <div className="soundtrack-info">
                        <h3>{soundtrack.title}</h3>
                        <p>{soundtrack.year}</p>
                        <p>{soundtrack.composer}</p>
                        {/* <p>{ soundtrack.track.song }</p> */}
                        <button
                            onClick={() =>
                                window.open(
                                    soundtrack.track.link  
                                )
                            }
                            className="sample-button"
                            aria-label="Écouter un extrait sur YouTube">
                            Extrait
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default SoundtracksList;
