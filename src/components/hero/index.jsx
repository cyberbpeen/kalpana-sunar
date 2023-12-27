import { RiArticleLine } from "react-icons/ri";
import Social from "../social";
import "./hero.css";

const Hero = () => {
  return (
    <section className="home__section">
      <div className="home__container container grid">
        <div className="home__content">
          <h3>Namaste, I am</h3>
          <h1 className="home__title">Kalpana Sunar</h1>
          <h3 className="home__subtitle">education counsellor</h3>
          <p className="home__description">
            Laculis eget elementum felis pellentesque tellus tellus tincidunt
            tortor natoque. Cras amet ornare egestas.
          </p>
          <a href="#" className="btn btn-primary">
            <RiArticleLine />
            Download CV
          </a>
          <div className="social__media flex">
            <span className="social__title">Follow Me</span>
            <Social />
          </div>
        </div>
        <div className="home__image"></div>
      </div>
    </section>
  );
};

export default Hero;
