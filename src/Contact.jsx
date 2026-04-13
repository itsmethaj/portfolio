function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-text-container">
        <h1>Contact</h1>
      </div>

      <div className="contact-icons">
        <a href="https://www.instagram.com/am_thaj">
          <img src="./insta.svg" alt="Instagram" />
          <p className="social-caption">catch me posting fits</p>
        </a>

        <a href="https://www.github.com/itsmethaj">
          <img src="./github.svg" alt="GitHub" />
          <p className="social-caption">where my projects live</p>
        </a>

        <a href="https://www.linkedin.com/in/mohammad-thaj">
          <img src="./linkedin.svg" alt="LinkedIn" />
          <p className="social-caption">yes i have a LinkedIn</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
