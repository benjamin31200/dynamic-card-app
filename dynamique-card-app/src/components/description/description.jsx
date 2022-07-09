/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import StyledDescriptionComponents from "./descriptionStyledComponent.jsx";

const DescriptionComponent = (props) => {
  const [logo, setLogo] = React.useState(props.logo);
  const [texte, setTexte] = React.useState("");
  const [input, setInput] = React.useState({
    bool: true,
    inputValue: props.inputValue,
  });
 
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

      const baseText = (ppTexte, sTexte) => {
      const getSmallText = ppTexte.split(" ");
      const arrayText = [];
      for (let i = 0; i < 19; i++) {
        arrayText.push(getSmallText[i]);
      }
      const newText = arrayText.join(" ") + "...";
      sTexte(newText);
    }
    baseText(props.texte, setTexte);
  }, [props.texte]);

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
      setTexte={setTexte}
      propsTexte={props.texte}
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
  inputValue: "[↓]",
};

export default DescriptionComponent;
