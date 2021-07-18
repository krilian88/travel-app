import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import getTemplate from "./Language/Templates";
import Video from "../videos/digital.mp4";

const HeroSection = ({ lang, heroRef, scroll }) => {
  return (
    <div className="hero-container" ref={heroRef}>
      <video src={Video} autoPlay loop muted />
      <h1>{getTemplate(lang, "heroTitle")}</h1>
      <p>{getTemplate(lang, "subtitle")}</p>
      <div className="hero-btns">
        <Button
          onClick={scroll}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          {getTemplate(lang, "heroBtnLeft")}
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          {getTemplate(lang, "heroBtnRight")}{" "}
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
