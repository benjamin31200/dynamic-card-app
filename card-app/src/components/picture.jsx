import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Picture extends React.Component {
  render() {
    return (
      <HeadDiv>
        <HeadImg src={this.props.image} alt={this.props.name} />
      </HeadDiv>
    );
  }
}

export default Picture;

Picture.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
};

const HeadDiv = styled.div`
border: 1px solid black;
width: -webkit-fill-available;
height: -webkit-fill-available;
`;

const HeadImg = styled.img`
`;