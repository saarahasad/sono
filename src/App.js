import React from "react";
import "./App.css";



function App() {
  const cardData = [
    {
      image: "/images/sebastian.png",
      title: "Sebastian Kochan",
      designation: "Founder & CEO",
      country: "(Bolivia)",
    },
    {
      image: "/images/yusuf.png",
      title: "Yusuf Rafique",
      designation: "Co-Founder",
      country: "(India)",
    },
    {
      image: "/images/javier.png",
      title: "Javier Guachalla",
      designation: "Co-Founder",
      country: "(Bolivia)",
    },
    {
      image: "/images/ishaaq.png",
      title: "Ishaaq Shafi",
      designation: "(United Kingdom)",
      country: "",
    },
    {
      image: "/images/german.png",
      title: "German Guachalla",
      designation: "(Bolivia)",
      country: "",
    },
    {
      image: "/images/gonzalo.png",
      title: "Gonzalo Salas Enao",
      designation: "(Bolivia)",
      country: "",
    },
  ];
  return (
    <div className="App">
      <section id="home" className="home-section">
        <header className="App-header">
          <div className="logo">
            <img src="/images/logo-small.png" alt="Logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a className="nav-link-i" href="#home">
                  HOME
                </a>
              </li>
              <li>
                <a className="nav-link-i" href="#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="nav-link-i" href="#team">
                  TEAM
                </a>
              </li>
              <li>
                <a className="nav-link-i" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="center-image">
          <img src="/images/logo-big.png" alt="Centered Main" />
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="left-column">
          <h1 style={{ color: "#9aacea" }}>OUR VISION</h1>
          <br />
          <p style={{ color: "white" }}>
            Sonoluminessence is an impact investment start-up founded in 2023,
            developing and operating a diversified portfolio of companies within
            the field international development – deterministically confronting
            a wide range of current and future social and environmental issues
            spanning from Energy Transition, the Built Environment, food and
            water security, anti-human trafficking and beyond.
          </p>
          <br />
          <button className="explore-button">EXPLORE</button>
        </div>
        <div className="right-column">
          {/* Content for the right column goes here */}
        </div>{" "}
        {/* Your content here */}
      </section>

      <section id="lithium" className="lithium-section">
        <section className="lithium-two-columns-section">
          <div className="lithium-left-column"></div>
          <div className="lithium-right-column">
            <h2>LITHIUM: A CRITICAL RAW MATERIAL</h2>
            <br/>
            <p>
              'Transition-Critical Materials’ are the materials that will have
              to serve as critical, and therefore transition- enabling inputs,
              for the low-carbon technologies needed to bring about the energy
              transition.
            </p>
            <button className="lithium-learnmore-button">LEARN MORE</button>
          </div>
        </section>
      </section>

      <section id="team" className="team-section">
        <h1 style={{ color: "#9aacea" }}>TEAM</h1>
        <br />
        <div className="centered-text">
          {" "}
          We are a multidisciplinary team of believers, innovators and change
          makers.
          <br /> <br />
          Our team of experts, endeavour to generate maximum value for the
          planet, the communities in which we work; the non-profit organisations
          which we support; all stakeholders throughout our value chain, as well
          as future generations.
        </div>
        <div className="grid-container">
          {cardData.map((card, index) => (
            <div key={index} className="grid-item">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.designation}</p>
              <p>{card.country}</p>
            </div>
          ))}
        </div>{" "}
      </section>

      <section id="sustainability" className="sustainability-section">
        <section className="sustainability-two-columns-section">
          <div className="sustainability-left-column">
            <h2>Sustainability</h2>
          </div>
          <div className="sustainability-right-column">
            <p>
              The hidden environmental costs of Lithium production puts battery
              manufacturing at odds with environmental regulations and broader
              socio-environmental and socio- economic goals.
            </p>
            <button className="explore-button">LEARN MORE</button>
          </div>
        </section>
        {/* Your content here */}
      </section>

      <section id="contact" className="contact-section">
      <section className="contact-two-columns-section">
        <div className="contact-left-column"></div>
        <div className="contact-right-column">
          <p>
            Climate change is not a 'problem' waiting for a 'solution'. It is
            an environmental, cultural and political phenomenon that is
            reshaping the way we think about ourselves, about our societies and
            about humanity's place on Earth. <br /><br />Prof. Mike Hulme, MSc PhD.
          </p>
        </div>
      </section>
    </section> {/* End of contact section */}

    {/* Start of footer section */}
    <section id="footer-section">
      <footer className="footer">
        <div className="footer-column logo-column">
          <img src="/images/logo-big.png" alt="Company Logo" className="logo" />
        </div>
        <br/>
        <div className="footer-column info-column">
          <div className="title-row">
            <p>Contact </p>
          </div>
          <div className="info-row">
            <div className="info-section">
              Bolivia: +59 178886070<br/>
              India: +91 97402 78478<br/>
              Mexico: +52 55435 61641<br/>
              UK: +44 77344 99942<br/>
            </div>
           <br/>
            <div className="info-section">
              <p>EMAIL ADDRESS: <br/>Info@sonoluminessence.com</p>
            </div>
            <div className="info-section">
              <p>ADDRESS: <br/>1 Cumberland Park, London, W3 6SY, United Kingdom</p>
            </div>
          </div>
        </div>
      </footer>
    </section> {/* End of footer section */}

    </div>
  );
}

export default App;
