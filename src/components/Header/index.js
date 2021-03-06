import { Button } from "../Button";
import "./style.css";

const Header = ({ src, title, genres }) => {
  return (
    <div className="container">
      <img id="background" src={src} alt="Background" />
      <img src="/assets/images/overlay.png" alt="overlay" id="overlay" />
      <div className="content-play">
        <img src="/assets/images/play.png" alt="play" />
      </div>
      <div className="content-close">
        <img
          src="/assets/images/close.png"
          alt="close"
          className="image-close"
        />
      </div>
      <div className="content-title">
        <h1 className="header-title">{title}</h1>
      </div>
      <div className="content-genres">
        <span className="genres">{genres}</span>
      </div>
      <div className="content-button">
        <Button>Watch movie</Button>
      </div>
    </div>
  );
};

export { Header };
