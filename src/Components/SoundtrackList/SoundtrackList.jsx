import { useEffect, useState } from "react";
import SoundtrackCard from "../SoundtrackCard/SoundtrackCard";
import "./SoundtrackList.css";

/**
 * Composant qui affiche une liste de bandes sonores récupérées depuis l'API.
 */

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
                setSoundtracks(dataSoundtracks);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, []);

    /*
     * Filtrer au travers les bandes sonores
     */

    function filterTitle(event) {
        const trigger = event.currentTarget;
        const direction = Number(trigger.dataset.direction);
        const copy = [...soundtracks];

        copy.sort((a, b) => {
            if (direction == 1) {
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        });
        setSoundtracks(copy);
    }

    return (
        <div>
            <div className="filters">
                <button
                    className="filter-button"
                    onClick={filterTitle}
                    data-direction="1">
                    Titre (croissant)
                </button>
                <button
                    className="filter-button"
                    onClick={filterTitle}
                    data-direction="-1">
                    Titre (décroissant)
                </button>
            </div>
            <div className="soundtracks-list">
                {soundtracks.map((soundtrack) => (
                    <SoundtrackCard
                        key={soundtrack.id}
                        soundtrack={soundtrack}
                    />
                ))}
            </div>
        </div>
    );
}
export default SoundtracksList;
