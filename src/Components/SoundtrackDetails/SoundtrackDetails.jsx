import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./SoundtrackDetails.css";


/**
 * Composant pour afficher les détails d'une bande sonore spécifique.
 */
function SoundtrackDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    let [soundtrack, setSoundtrack] = useState({
        title: "",
        composer: "",
        year: "",
        genre: [],
        label: "",
        image: "",
        track: {
            song: "",
            link: "",
        },
    });
    useEffect(() => {
        async function fetchSoundtrack() {
            const response = await fetch(
                `https://projetjs-backend.onrender.com/soundtracks/${id}`
            );
            const data = await response.json();
            setSoundtrack(data);
        }
        fetchSoundtrack();
    }, []);

    
    async function deleteSoundtrack() {
        const response = await fetch(
            `https://projetjs-backend.onrender.com/soundtracks/${id}`,
            {
                method: "DELETE",
            }
        );
        if (response.ok) {
            navigate("/soundtracks-list");
        }
    }
    return (
        <div className="soundtrack-details">
            <h2>{soundtrack.title}</h2>
            <img
                src={`/img/${soundtrack.image}`}
                alt={soundtrack.title}
                className="soundtrack-image"
            />
            <p>
                Année de sortie :<br />{" "}
            </p>
            <span>{soundtrack.year}</span>
            <p>
                Compositeur :<br />{" "}
            </p>
            <span>{soundtrack.composer}</span>
            <p>
                Label :<br />{" "}
            </p>
            <span>{soundtrack.label}</span>
            <p>
                Genre :<br />{" "}
            </p>
            <span>{soundtrack.genre.join(", ")}</span>
            <Link to={`/soundtracks/edit/${id}`}>
                <button>Modifier</button>
            </Link>
            <button onClick={deleteSoundtrack} className="delete-button">
                Supprimer
            </button>
        </div>
    );
}

export default SoundtrackDetails;
