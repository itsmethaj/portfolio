import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <div className="hero-text-wrapper">
          <h1>
            It's me
            <span className="block">
              <b>Thaj</b>
            </span>
          </h1>

          <h2>
            CS Student &<span className="block">Web Developer</span>
          </h2>
        </div>

        <div className="stickynotes-container">
          <a className="sticky-note" href="#about">
            <img src="/sticky4.svg" alt="About" />
            <span>About</span>
          </a>

          <a className="sticky-note" href="#projects">
            <img src="/sticky3.svg" alt="Projects" />
            <span>Projects</span>
          </a>

          <a className="sticky-note" href="#contact">
            <img src="/sticky2.svg" alt="Contact" />
            <span>Contact</span>
          </a>

          <a className="sticky-note" href="#blog">
            <img src="/sticky1.svg" alt="Blog" />
            <span>Blog</span>
          </a>
        </div>
      </div>
      <div className="profile-image-container">
        <img src="/profile 2.png" alt="Profile" />
      </div>
    </div>
  );
}

export default Hero;
