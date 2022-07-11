/* eslint-disable no-unused-expressions */
/*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { baseText } from "../../AppFunction";

const Input = styled.input.attrs((props) => ({
  type: "button",
  inputMarginTop: props.inputMarginTop,
}))`
  font-size: 1.2rem;
  width: 30px;
  background-color: white ;
  cursor: pointer;
  height: 27px;
  border: 1px solid;
  font-style: normal;
  justify-content: center;
  display: flex;
  margin: ${(props) => props.inputMarginTop};
  &:hover {
    background-image: linear-gradient(#020520, rgba(21, 21, 214, 0.5)),
      url(https://tse1.mm.bing.net/th?id=OIP.1GrT5PWR6d1WhbyQWcvd8AHaEo&pid=Api&P=0&w=275&h=171);
      color: white;
  }
`;

const SectionDesc = styled.section`
  width: auto;
  display: flex;
  height: auto;
  justify-content: center;
  flex-direction: column;
`;

const Div = styled.div`
  width: auto;
  justify-content: center;
  display: flex;
  &.rating {
    background: url(https://img.freepik.com/vecteurs-libre/fond-abstrait-blanc_23-2148806276.jpg?t=st=1657015296~exp=1657015896~hmac=06acbdc…&w=996);
    background-position: center;
    background-clip: content-box;
    background-size: cover;
    border-radius: 2pc;
    border: 2px solid black;
    p {
      color: #070f4e;
      font-family: "SimplySansBold";
      font-weight: bold;
      padding: 0.2rem;
      margin: 0.4rem;
      font-size: 1rem;
    }
  }
  &.title {
    place-content: space-evenly;
    flex-direction: row;
    background-image: linear-gradient(#020520, rgba(21, 21, 214, 0.5)),
      url(https://tse1.mm.bing.net/th?id=OIP.1GrT5PWR6d1WhbyQWcvd8AHaEo&pid=Api&P=0&w=275&h=171);
    background-position: center;
    background-clip: content-box;
    background-size: cover;
    height: 90px;
    align-items: center;
    border-bottom: 2px solid;
    &::before {
      content: "";
      width: 330px;
      height: 29px;
      background-color: #02072b;
      position: absolute;
      top: 175px;
      z-index: -1;
    }
    h1 {
      font-family: "SimplySansBold";
      font-weight: bold;
      font-size: ${(props) => props.sizeH1};
      color: white;
      text-shadow: -5px 3px 7px rgb(0 0 0), -1px -3px 2px rgb(0 0 0);
    }
  }
  &.desc {
    flex-direction: column;
  }
  &.desc-p {
    text-align: justify;
    padding: 0.7rem 0.5rem 0.5rem 0.7rem;
    align-items: center;
    flex-direction: column;
    p:nth-child(0n + 1) {
      display: contents;
      font-style: italic;
      font-family: "ConstantineRegular";
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
  &.desc-h3 {
    justify-content: justify;
    padding-left: 0.3rem;
    justify-content: flex-start;
    h1:first-child {
      font-family: "ConstantineRegular";
      margin: 0.7rem 0 0 0.5rem;
      font-size: 1.2rem;
    }
  }
`;

const Logo = styled(Div)`
  background-image: url(${(props) => props.logo});
  width: 25px;
  background-position: center;
  background-size: cover;
  background-clip: content-box;
  height: 25px;
  position: relative;
  bottom: 10px;
  left: 5px;
  border-radius: 20px;
  mix-blend-mode: inherit;
`;

const Title = styled.h1``;
const Text = styled.p``;

const StyledDescriptionComponents = (props) => {
  const initialStateInput = "0.6rem";
  const initialStateH1 ="1.3rem";
  const getLengthH1 = props.name.length;
  const changeMarginInput = (state, action) => {
    switch (action.type) {
      case "true":
        return (state = "0.6rem");
      case "false":
        return (state = "0.3rem");
      default:
        throw new Error(); 
    }
  };

  const changeSizeH1 = (state, action) => {
    switch (action.type) {
      case "big":
        return (state = "1.5rem");
      case "medium":
        return (state = "1.2rem");
      case "small":
        return (state = "0.9rem");
      default:
        throw new Error();
    }
  };

  const [stateInput, dispatchInput] = React.useReducer(
    changeMarginInput,
    initialStateInput
  );
  const [stateH1, dispatchH1] = React.useReducer(changeSizeH1, initialStateH1);
  const changeBool = () => {
    const actualValue = props.bool;
    const newTexte = baseText(props.propsTexte);
    actualValue
      ? (props.setInput({ bool: false, inputValue: "↑" }),
        dispatchInput({ type: "false" }),
        props.setTexte(props.propsTexte))
      : (props.setInput({ bool: true, inputValue: "↓" }),
        dispatchInput({ type: "true" }),
        props.setTexte(newTexte));
  };

  useEffect(() => {
    if (getLengthH1 < 10) {
      dispatchH1({ type: "big" });
    } else if (getLengthH1 >= 12 && getLengthH1 <= 16) {
      dispatchH1({ type: "medium" });
    } else if (getLengthH1 > 16) {
      dispatchH1({ type: "small" });
    }
  }, [getLengthH1]);

  return (
    <SectionDesc>
      <Div sizeH1={stateH1} className="title">
        <Div className="title-h1">
          <Title>{props.name}</Title>
        </Div>
        <Div className="rating">
          <Text id="note">{props.rating}</Text>
          <Logo logo={props.logo}></Logo>
        </Div>
      </Div>
      <Div className="desc">
        <Div className="desc-h3">
          <Title>{props.descTitle}</Title>
        </Div>
        <Div className="desc-p">
          <Text>{props.texte}</Text>
          <Input
            inputMarginTop={stateInput}
            value={props.inputValue}
            onClick={() => changeBool()}
          ></Input>
        </Div>
      </Div>
    </SectionDesc>
  );
};

StyledDescriptionComponents.propTypes = {
  rating: PropTypes.string,
  name: PropTypes.string,
  descTitle: PropTypes.string,
  logo: PropTypes.string,
  texte: PropTypes.string,
  inputValue: PropTypes.string,
  setTexte: PropTypes.func,
  setInput: PropTypes.func,
  bool: PropTypes.func,
  propsTexte: PropTypes.string,
};

export default StyledDescriptionComponents;
