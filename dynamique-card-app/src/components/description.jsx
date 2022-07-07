import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Description extends React.Component {

  render() {
    return (
      <SectionDesc>
        <Div className="title">
          <Div className="title-h1">
            <Title>{this.props.name}</Title>
          </Div>
          <Div className="rating">
            <Text>{this.props.rating}</Text>
          </Div>
        </Div>
        <Div className="desc">
          <Div className="desc-h3">
            <Title>{this.props.descTitle}</Title>
          </Div>
          <Div className="desc-p">
            <Text>{this.props.descText}</Text>
          </Div>
        </Div>
      </SectionDesc>
    );
  }
}

export default Description;

Description.propTypes = {
  rating: PropTypes.string,
  name: PropTypes.string,
  descTitle: PropTypes.string,
  descText: PropTypes.string,
};

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
    p {
      color: white;
      text-shadow: -5px 3px 7px rgb(7 15 78), -1px -3px 2px rgb(0 0 0);
      font-family: "SimplySansBold";
      font-weight: bold;
    }
  }
  &.title {
    place-content: space-evenly;
    flex-direction: row;
    background: #070f4e;
    height: 90px;
    align-items: center;
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
    padding: 0.7rem 0.5rem 1.2rem 0.7rem;
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
      font-size: 1.3rem;
      margin: 0.7rem 0 0 0.5rem;
    }
  }
`;

const Title = styled.h1``;

const Text = styled.p``;