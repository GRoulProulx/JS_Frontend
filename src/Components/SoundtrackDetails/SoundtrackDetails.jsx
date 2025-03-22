import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
            <p>Année de sortie: {soundtrack.year}</p>
            <p>Compositeur: {soundtrack.composer}</p>
            <p>Label: {soundtrack.label}</p>
            <p>Genre: {soundtrack.genre.join(", ")}</p>
            <Link to={`/soundtracks/edit/${id}`}>
                <button>Modifier</button>
            </Link>
            <button onClick={deleteSoundtrack}>Supprimer</button>
        </div>
    );
}

export default SoundtrackDetails;
