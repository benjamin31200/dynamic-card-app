/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import StyledDescriptionComponents from "./descriptionStyledComponent.js";

const DescriptionComponent = (props) => {
  const [logo, setLogo] = React.useState(props.logo);
  const [texte, setTexte] = React.useState(props.texte);
  const [input, setInput] = React.useState({
    bool: Boolean,
    inputValue: props.inputValue,
  });

  
  console.log(input);

  useEffect(() => {
    const getDivRating = document.getElementById("note");
    const getNote = getDivRating.innerText.split("note: ")[1].split("/5");

    if (getNote[0] <= 2) {
      setLogo(
        "https://tse3.mm.bing.net/th?id=OIP.HpEhAf2CYLwHSAo-qUdyMgHaF7&pid=Api&P=0&w=270&h=216"
      );
    } else if (getNote[0] > 2 && getNote[0] < 4) {
      setLogo(
        "https://tse3.mm.bing.net/th?id=OIP.6iV3x0jvBT_F6eoyLu6PhAHaHa&pid=Api&P=0&w=167&h=167"
      );
    } else if (getNote[0] >= 4) {
      setLogo(
        "https://tse4.mm.bing.net/th?id=OIP.LF8J2NyBXenBOj5-kwrkvAAAAA&pid=Api&P=0&w=182&h=188"
      );
    }
  }, []);

  return (
    <StyledDescriptionComponents
      name={props.name}
      rating={props.rating}
      logo={logo}
      descTitle={props.descTitle}
      texte={texte}
      inputValue={input.inputValue}
      bool={input.bool}
      setInput={setInput}
    ></StyledDescriptionComponents>
  );
};

DescriptionComponent.propTypes = {
  rating: PropTypes.string,
  name: PropTypes.string,
  descTitle: PropTypes.string,
  logo: PropTypes.string,
  texte: PropTypes.string,
  inputValue: PropTypes.string,
};

DescriptionComponent.defaultProps = {
  texte:
    "13 ans après les événements du premier film, Jake Sully et Neytiri forment une famille et restent ensemble malgré leurs différences. Ils sont cependant forcés de quitter leur maison et doivent explorer de nouvelles régions de Pandora lorsqu'une ancienne menace à la civilisation des Na'Vi refait surface.",
  inputValue: "[↓]",
};

export default DescriptionComponent;
