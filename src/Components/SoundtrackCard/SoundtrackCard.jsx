import React from "react";
import { useNavigate } from "react-router-dom";
import "./SoundtrackCard.css";

function SoundtrackCard(props) {
    const { soundtrack = { title: "", year: "", composer: "", image: "" } } =
        props;
    let navigate = useNavigate();

    function clickDetails(event) {
        const trigger = event.currentTarget;
        navigate(`/soundtracks/${trigger.id}`);
    }
    return (
        <div className="soundtrack-card">
            <img
                className="soundtrack-image"
                src={`/img/${soundtrack.image}`}
                alt={soundtrack.title}
            />
            <div className="soundtrack-info">
                <h3>{soundtrack.title}</h3>
                <p>{soundtrack.year}</p>
                <p>{soundtrack.composer}</p>
                <div>
                    <button
                        onClick={() => window.open(soundtrack.track.link)}
                        className="sample-button">
                        Extrait
                    </button>
                    <button
                        className="sample-button"
                        key={soundtrack.id}
                        onClick={clickDetails} 
                        id={soundtrack.id}>
                        Détails
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SoundtrackCard;
