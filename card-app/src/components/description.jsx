import React from "react";
import styled from "styled-components";

class Description extends React.Component {
  render() {
    return (
      <SectionDesc>
        <Div className="title">
          <Div className="title-h1">
            <Title>Title</Title>
          </Div>
          <Div className="rating">
            <Text>Note: 4/5</Text>
          </Div>
        </Div>
        <Div className="desc">
          <Div className="desc-h3">
            <Title>descriptif</Title>
          </Div>
          <Div className="desc-p">
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              facilis amet voluptate neque veritatis nihil officia perferendis
              adipisci sed odit deleniti porro culpa vero doloribus iusto fuga,
              sapiente earum perspiciatis?
            </Text>
          </Div>
        </Div>
      </SectionDesc>
    );
  }
}

export default Description;

const SectionDesc = styled.section`
  width: inherit;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: -webkit-fill-available;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border: 1px solid black;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const Div = styled.div`
  width: -webkit-fill-available;
  justify-content: center;
  display: flex;
  border: 1px solid black;
  &.rating {
    background-color: olive;
  }
  &.title {
    height: 70px;
    place-content: space-evenly;
    flex-direction: row;
  }
  &.desc {
    flex-direction: column;
  }
`;

const Title = styled.h1``;

const Text = styled.p``;
