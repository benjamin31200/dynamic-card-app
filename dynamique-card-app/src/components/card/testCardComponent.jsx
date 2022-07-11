import React from "react";
import styled from "styled-components";
import Picture from "../picture/picture.jsx";
import Desc from "../description/description.jsx";
import Subtitle from "../subtitle/subtitle.jsx";
import PropTypes from "prop-types";

const Card = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 330px;
  border: groove;
  background-image: url(https://img.freepik.com/vecteurs-libre/fond-abstrait-blanc_23-2148806276.jpg?t=st=1657015296~exp=1657015896~hmac=06acbdcf93c50155e15bad313a461525dc62094e25985ae65c30773bc17ff5ff&w=996);
  background-position: center;
  background-clip: content-box;
  background-size: cover;
  border: 2px solid black;
  border-radius: 22px;
  position: sticky;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: auto;
  width: auto;
`;

const TestCardComponent = (props) => {
  return (
    <Section>
      <Card>
        <Picture name={props.picName}></Picture>
        <Desc
          name={props.name}
          rating={props.rating}
          descTitle={props.synopsisH1}
          texte={props.texte}
        ></Desc>
        <Subtitle
          title={props.categoryH1}
          category1={props.category1}
          category2={props.category1}
          category3={props.category1}
          category4={props.category1}
          category5={props.category1}
        ></Subtitle>
      </Card>
    </Section>
  );
};

TestCardComponent.propTypes = {
    title: PropTypes.string,
    category1: PropTypes.string,
    category2: PropTypes.string,
    category3: PropTypes.string,
    category4: PropTypes.string,
    category5: PropTypes.string,
    categoryH1: PropTypes.string,
    texte: PropTypes.string,
    synopsisH1: PropTypes.string,
    rating: PropTypes.string,
    name: PropTypes.string,
    picName: PropTypes.string,
  };

export default TestCardComponent;
