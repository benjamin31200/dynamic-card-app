import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Div = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  background-image: url(${(props) => props.picture});
  background-position: ${(props) => props.backPos};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px 20px 30px 30px;
  transition: ease-in 200ms;
  border-bottom: 2px solid black;
  box-shadow: inset rgb(227 229 231) 0px 10px 40px -15px,
    inset rgb(227 229 231) 10px 0px 40px -15px;
`;

const PictureStyledComponents = (props) => {
  const changeBackSize = (state, action) => {
    switch (action.type) {
      case "grayman":
        return (state = "top 20% right 20% bottom 40% left 20%");
      case "others":
        return (state = "center");
      default:
        throw new Error();
    }
  };
  const intialStateSize = "center";

  const [stateSize, dispatchSize] = React.useReducer(
    changeBackSize,
    intialStateSize
  );
  const verifyName = (name, dispatch) => {
    if (name === "Avatar2" || name === "indianaJones" || name === "thor") {
      dispatch({ type:"others"});
    } else if (name === "grayman") {
      dispatch({ type:"grayman"});
    }
  };
  useEffect(() => {
    verifyName(props.name, dispatchSize);
  }, [props.name]);
  return (
    <Div
      backPos={stateSize}
      picture={props.picture}
      className={props.name}
    ></Div>
  );
};

export default PictureStyledComponents;

PictureStyledComponents.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
};
