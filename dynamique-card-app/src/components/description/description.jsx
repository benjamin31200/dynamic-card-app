/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import StyledDescriptionComponents from "./descriptionStyledComponent.jsx";
import { baseText } from "../../AppFunction.js";

const DescriptionComponent = (props) => {
  const smallTexte = baseText(props.texte);
  const [logo, setLogo] = React.useState(props.logo);
  const [texte, setTexte] = React.useState(smallTexte);
  const [input, setInput] = React.useState({
    bool: Boolean,
    inputValue: props.inputValue,
  });
  useEffect(() => {
    const getDivRating = props.rating
    const getNote = getDivRating.split("note: ")[1].split("/5");

    if (getNote[0] <= 2) {
      setLogo(
        "https://tse4.mm.bing.net/th?id=OIP.Mbxj-qx8QeUEqSzV6iUqFgAAAA&pid=Api&P=0&w=238&h=178"
      );
    } else if (getNote[0] > 2 && getNote[0] < 4) {
      setLogo(
        "https://tse2.mm.bing.net/th?id=OIP.naB40B_QUAHHixKvC1AH0AAAAA&pid=Api&P=0&w=167&h=165"
      );
    } else if (getNote[0] >= 4) {
      setLogo(
        "https://tse2.explicit.bing.net/th?id=OIP.EqhFQY5VypD2VL_9DmKE2AHaGw&pid=Api&P=0&w=184&h=168"
      );
    }
  }, [props.rating]);

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
  inputValue: "↓",
};

export default DescriptionComponent;
