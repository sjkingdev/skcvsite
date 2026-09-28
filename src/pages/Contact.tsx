import ContactForm from "./ContactForm";

export function Contact() {
  return (
    <div className="container page contact">
      <p className="eyebrow">CONTACT</p>

      <h1>Let's talk.</h1>

      <p className="contact__lead">
        For software development, web applications, platform work or digital
        projects.
      </p>

      <ContactForm />

      <div className="contact-links">
        <a href="mailto:hello@seanking.co.uk">
          hello@seanking.co.uk ↗
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}