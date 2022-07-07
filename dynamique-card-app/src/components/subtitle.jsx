import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Subtitle extends React.Component {

  componentDidUpdate() {}

  render() {
    return (
      <Div className="scrollDiv">
        <Title>{this.props.title}</Title>
        <List className="scrollList">
          <Element>
            <Button type="button" value={this.props.category1}></Button>
          </Element>
          <Element>
            <Button type="button" value={this.props.category2}></Button>
          </Element>
          <Element>
            <Button type="button" value={this.props.category3}></Button>
          </Element>
          <Element>
            <Button type="button" value={this.props.category4}></Button>
          </Element>
          <Element>
            <Button type="button" value={this.props.category5}></Button>
          </Element>
        </List>
      </Div>
    );
  }
}

export default Subtitle;

Subtitle.propTypes = {
  title: PropTypes.string,
  category1: PropTypes.string,
  category2: PropTypes.string,
  category3: PropTypes.string,
  category4: PropTypes.string,
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #070f4e;
  padding-top: 0.5rem;
  border-radius: 0 0 20px 20px;
  overflow-x: scroll;
  scroll-behavior: auto;
  content-visibility: hidden-matchable;
`;

const Title = styled.h4`
  margin: 0.7rem 0 0 0.5rem;
  font-family: "SimplySansBold";
  font-weight: bold;
  font-size: 1.3rem;
  color: white;
  text-shadow: -5px 3px 7px rgb(0 0 0), -1px -3px 2px rgb(0 0 0);
`;

const Button = styled.input`
  font-family: "SimplySansBold";
  font-size: 0.8rem;
  font-weight: bold;
  background: white;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    font-size: 0.9rem;
    transition: ease-in-out 0.3s;
  }
`;

const List = styled.ol`
  display: flex;
  margin: 0.5rem 0.2rem 1.5rem 0;
  list-style-type: none;
  padding: 0;
  justify-content: left;
  width: auto;
`;

const Element = styled.li`
  padding: 0.2rem;
`;