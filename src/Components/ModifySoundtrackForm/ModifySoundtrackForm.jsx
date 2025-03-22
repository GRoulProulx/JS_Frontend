import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isInt, isLength, trim } from "validator";


/**
 * Composant de formulaire pour modifier une bande sonore existante.
 */

function ModifySoundtrackForm() {
    const { id } = useParams();
    const formRef = useRef();
    const navigate = useNavigate();

    const [genres, setGenres] = useState([]);
    const [formData, setFormData] = useState({
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
    const [errors, setErrors] = useState({});
    const [msg, setMsg] = useState("");

    useEffect(() => {
        async function fetchSoundtrackData() {
            try {
                const response = await fetch(
                    `https://projetjs-backend.onrender.com/soundtracks/${id}`
                );

                if (!response.ok) {
                    setMsg("Erreur réseau. Veuillez réessayer plus tard.");
                }

                const soundtrackData = await response.json();
                // État principal contenant toutes les données du formulaire
                setFormData({
                    title: soundtrackData.title,
                    composer: soundtrackData.composer,
                    year: soundtrackData.year,
                    genre: soundtrackData.genre,
                    label: soundtrackData.label,
                    image: soundtrackData.image,
                    track: {
                        song: soundtrackData.track.song,
                        link: soundtrackData.track.link,
                    },
                });

                setGenres(soundtrackData.genre);
            } catch (error) {
                console.error("Erreur:", error);
                setMsg("Erreur réseau. Veuillez réessayer plus tard.");
            }
        }
        fetchSoundtrackData();
    }, []);

    useEffect(() => {
        const data = { ...formData, genres };
        setFormData(data);
    }, [genres]);

    function handleChange(event) {
        const field = event.currentTarget;
        const name = field.name;

        let value = field.value;
        let track = { ...formData.track };

        if (name === "track.song") {
            track.song = value;
            setFormData({ ...formData, track });
        } else if (name === "track.link") {
            track.link = value;
            setFormData({ ...formData, track });
        } else {
            value = trim(value);
            setFormData({ ...formData, [name]: value });
        }
    }

    function handleGenre(event) {
        const value = event.target.value;
        const isChecked = event.target.checked;

        let newGenres = [...genres];

        if (isChecked && !newGenres.includes(value)) {
            newGenres.push(value);
        } else if (!isChecked && newGenres.includes(value)) {
            newGenres = newGenres.filter((genre) => genre !== value);
        }

        setGenres(newGenres);
    }

    function validateForm() {
        const newErrors = {};

        if (!isLength(formData.title, { min: 3, max: 100 })) {
            newErrors.title =
                "Le titre doit contenir entre 3 et 100 caractères.";
        }

        if (!isLength(formData.composer, { min: 3, max: 100 })) {
            newErrors.composer =
                "Le nom du compositeur doit contenir entre 3 et 100 caractères.";
        }

        if (!isLength(formData.label, { min: 3, max: 100 })) {
            newErrors.label =
                "Le nom de l'éditeur doit contenir entre 3 et 100 caractères.";
        }

        if (!isLength(formData.track.song, { min: 3, max: 100 })) {
            newErrors.trackSong =
                "Le nom de la piste doit contenir entre 3 et 100 caractères.";
        }

        if (!isLength(formData.track.link, { min: 3 })) {
            newErrors.trackLink = "Le lien de la piste est requis.";
        }

        if (genres.length === 0) {
            newErrors.genre = "Vous devez au moins choisir un genre.";
        }

        if (!isLength(formData.image, { min: 3, max: 100 })) {
            newErrors.image =
                "L'image doit contenir entre 3 et 100 caractères.";
        }

        if (
            !isInt(formData.year, { min: 1900, max: new Date().getFullYear() })
        ) {
            newErrors.year =
                "L'année doit être comprise entre 1900 et l'année en cours.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch(
                    `https://projetjs-backend.onrender.com/soundtracks/${id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    }
                );

                if (response.ok) {
                    setMsg("Bande sonore modifiée avec succès");
                    navigate(`/soundtracks/${id}`);
                }
            } catch (error) {
                setMsg(error);
            }
        }
    }

    return (
        <div className="soundtrack-form-container">
            <h2>Modifier la Bande Sonore</h2>
            {msg && <div className="message">{msg}</div>}
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="soundtrack-form">
                <div className="form-group">
                    <label htmlFor="title">Titre:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        value={formData.title}
                    />
                    {errors.title && (
                        <div className="error">{errors.title}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="composer">Compositeur:</label>
                    <input
                        type="text"
                        id="composer"
                        name="composer"
                        onChange={handleChange}
                        value={formData.composer}
                    />
                    {errors.composer && (
                        <div className="error">{errors.composer}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="year">Année:</label>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        onChange={handleChange}
                        value={formData.year}
                    />
                    {errors.year && <div className="error">{errors.year}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="label">Label:</label>
                    <input
                        type="text"
                        id="label"
                        name="label"
                        onChange={handleChange}
                        value={formData.label}
                    />
                    {errors.label && (
                        <div className="error">{errors.label}</div>
                    )}
                </div>

                <div className="form-group">
                    <label>Genre:</label>
                    <div className="genre-options">
                        <label>
                            <input
                                type="checkbox"
                                name="genre"
                                value="Rock"
                                onChange={handleGenre}
                                checked={genres.includes("Rock")}
                            />
                            Rock
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="genre"
                                value="Classical"
                                onChange={handleGenre}
                                checked={genres.includes("Classical")}
                            />
                            Classical
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="genre"
                                value="Electronic"
                                onChange={handleGenre}
                                checked={genres.includes("Electronic")}
                            />
                            Electronic
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="genre"
                                value="Orchestral"
                                onChange={handleGenre}
                                checked={genres.includes("Orchestral")}
                            />
                            Orchestral
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="genre"
                                value="Western"
                                onChange={handleGenre}
                                checked={genres.includes("Western")}
                            />
                            Western
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="genre"
                                value="Dramatic"
                                onChange={handleGenre}
                                checked={genres.includes("Dramatic")}
                            />
                            Dramatic
                        </label>
                    </div>
                    {errors.genre && (
                        <div className="error">{errors.genre}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image (nom du fichier):</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    {errors.image && (
                        <div className="error">{errors.image}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="track.song">Titre de la Piste:</label>
                    <input
                        type="text"
                        id="track.song"
                        name="track.song"
                        value={formData.track.song}
                        onChange={handleChange}
                    />
                    {errors.trackSong && (
                        <div className="error">{errors.trackSong}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="track.link">Lien de la Piste:</label>
                    <input
                        type="url"
                        id="track.link"
                        name="track.link"
                        value={formData.track.link}
                        onChange={handleChange}
                    />
                    {errors.trackLink && (
                        <div className="error">{errors.trackLink}</div>
                    )}
                </div>
                <button type="submit" className="submit-button">
                    Modifier la Bande Sonore
                </button>
            </form>
        </div>
    );
}

export default ModifySoundtrackForm;
