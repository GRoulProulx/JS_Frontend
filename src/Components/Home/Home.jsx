import "./Home.css";
function Home() {
    return (
        <div className="home-container">
            <main className="home-content">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>
                            <span className="highlight">CINESOUND</span>
                        </h1>
                        <p>
                            <a href="">Collections de bandes sonores</a>
                        </p>
                        <button className="cta-button">
                            <a href="/soundtracks">Explorer</a>
                        </button>
                    </div>
                </section>

                <section className="categories-section">
                    <div className="categories-grid">
                        <div className="category-card">
                            <h3>Spéciaux</h3>
                        </div>
                        <div className="category-card">
                            <h3>Spéciaux</h3>
                        </div>
                        <div className="category-card">
                            <h3>Spéciaux</h3>
                        </div>
                        <div className="category-card">
                            <h3>Spéciaux</h3>
                        </div>
                    </div>
                </section>

                <section className="featured-section">
                    <h2>Visionement récent</h2>
                    <div className="releases-grid">
                        <div className="release-card">
                            <div className="release-image"></div>
                            <div className="release-info">
                                <h3>Dune: Part Two</h3>
                                <p>Hans Zimmer</p>
                                <span className="release-year">2024</span>
                            </div>
                        </div>
                        <div className="release-card">
                            <div className="release-image"></div>
                            <div className="release-info">
                                <h3>Inception</h3>
                                <p>Hans Zimmer</p>
                                <span className="release-year">2010</span>
                            </div>
                        </div>
                        <div className="release-card">
                            <div className="release-image"></div>
                            <div className="release-info">
                                <h3>Gladiator</h3>
                                <p>Hans Zimmer</p>
                                <span className="release-year">2023</span>
                            </div>
                        </div>
                        <div className="release-card">
                            <div className="release-image"></div>
                            <div className="release-info">
                                <h3>Blade Runner</h3>
                                <p>Vangelis</p>
                                <span className="release-year">1982</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="newsletter-section">
                    <div className="newsletter-content">
                        <h2>Restez informé</h2>
                        <p>Recevez les dernières sorties et actualités</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Votre courriel" />
                            <button className="cta-button">S'abonner</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
