/* eslint-disable no-unused-expressions */
/*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
import React from "react";
import styled from "styled-components";
import { baseText } from "../../AppFunction";

const Input = styled.input.attrs((props) => ({
  type: "button",
  inputMarginTop: props.inputMarginTop,
}))`
  font-size: 1.2rem;
  width: 40px;
  height: 30px;
  font-style: normal;
  justify-content: center;
  display: flex;
  margin: ${(props) => props.inputMarginTop};
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
      margin: 1rem;
      font-family: "SimplySansBold";
      font-weight: bold;
      font-size: 1.8rem;
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
      transition: cubic-bezier(0.39, 0.575, 0.565, 3s);
    }
  }
  &.desc-h3 {
    justify-content: justify;
    padding-left: 0.3rem;
    justify-content: flex-start;
    h1:first-child {
      font-family: "ConstantineRegular";
      font-size: 1.3rem;
      margin: 0.7rem 0 0 0.5rem;
    }
  }
`;

const Logo = styled(Div)`
  background: url(${(props) => props.logo});
  width: 35px;
  background-position: center;
  background-size: cover;
  background-clip: content-box;
  height: 35px;
  position: relative;
  bottom: 10px;
  left: 5px;
  border-radius: 20px;
  mix-blend-mode: inherit;
  border: 2px ridge #07070799;
`;

const Title = styled.h1``;
const Text = styled.p``;

const StyledDescriptionComponents = (props) => {
  const initialState = "0.6rem";
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

  const [state, dispatch] = React.useReducer(changeMarginInput, initialState);
  const changeBool = () => {
    const actualValue = props.bool;
    const newTexte = baseText(props.propsTexte);
    actualValue
      ? (props.setInput({ bool: false, inputValue: "↑" }),
        dispatch({ type: "false" }),
        props.setTexte(props.propsTexte))
      : (props.setInput({ bool: true, inputValue: "↓" }),
        dispatch({ type: "true" }),
        props.setTexte(newTexte));
  };

  return (
    <SectionDesc>
      <Div className="title">
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
            inputMarginTop={state}
            value={props.inputValue}
            onClick={() => changeBool()}
          ></Input>
        </Div>
      </Div>
    </SectionDesc>
  );
};

export default StyledDescriptionComponents;
