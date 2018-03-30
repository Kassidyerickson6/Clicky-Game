import React from "react";
import "./CharacterCard.css";


const CharacterCard = props => (
  <div className="disneyCard" onClick={props.clickImage}>
    <div className="img-container">
      <img alt={props.image.replace(".jpeg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default CharacterCard;