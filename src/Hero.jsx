import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <div className="hero-text-wrapper">
          {" "}
          {/* ← new wrapper */}
          <h1>
            It's me{" "}
            <span className="thaj">
              <b>Thaj</b>
            </span>
          </h1>
          <h2>CS Student & Web Developer</h2>
        </div>

        <div className="stickynotes-container">
          <a className="sticky-note" href="#about">
            <img src="/sticky4.svg" alt="" />
            <span>About</span>
          </a>
          <a className="sticky-note" href="#projects">
            <img src="/sticky3.svg" alt="Projects" />
            <span>Projects</span>
          </a>
          <a className="sticky-note" href="#blog">
            <img src="/sticky2.svg" alt="Blog" />
            <span>Blog</span>
          </a>
          <a className="sticky-note" href="#contact">
            <img src="/sticky1.svg" alt="Contact" />
            <span>Contact</span>
          </a>
        </div>
      </div>

      <div className="profile-image-container">
        <img src="/profile.svg" />
      </div>
    </div>
  );
}

export default Hero;
