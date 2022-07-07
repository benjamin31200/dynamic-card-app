import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: this.props.logo,
    };
  }

  componentDidMount() {
    const getDivRating = document.getElementById("note");
    const getNote = getDivRating.innerText.split("note: ")[1].split("/5");
    console.log(getNote[0]);
    this.getNewLogo = () => {
      if (getNote[0] <= 2) {
        this.setState({
          logo: "https://tse3.mm.bing.net/th?id=OIP.HpEhAf2CYLwHSAo-qUdyMgHaF7&pid=Api&P=0&w=270&h=216",
        });
      } else if (getNote[0] > 2 && getNote[0] < 4) {
        this.setState({
          logo: "https://tse3.mm.bing.net/th?id=OIP.6iV3x0jvBT_F6eoyLu6PhAHaHa&pid=Api&P=0&w=167&h=167",
        });
      } else if (getNote[0] >= 4) {
        this.setState({
          logo: "https://tse4.mm.bing.net/th?id=OIP.LF8J2NyBXenBOj5-kwrkvAAAAA&pid=Api&P=0&w=182&h=188",
        });
      } else {
        return console.warn("alert");
      }
    };
    console.log(getNote[0])
    setInterval(() => {
      this.getNewLogo();
    }, 0 * 5000);
  }

  render() {
    return (
      <SectionDesc>
        <Div className="title">
          <Div className="title-h1">
            <Title>{this.props.name}</Title>
          </Div>
          <Div className="rating">
            <Text logo id="note">
              {this.props.rating}
            </Text>
            <Logo logo={this.state.logo}></Logo>
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
  logo: PropTypes.string,
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
    background: url(https://img.freepik.com/vecteurs-libre/fond-abstrait-blanc_23-2148806276.jpg?t=st=1657015296~exp=1657015896~hmac=06acbdc…&w=996);
    background-position: center;
    background-clip: content-box;
    background-size: cover;
    border-radius: 2pc;
    border: 2px solid black;
    p {
      color: #070f4e;
      font-family: "SimplySansBold";
      font-weight: ${(props) => props.logo};
      padding: 0.2rem;
      margin: 0.4rem;
    }
  }
  &.title {
    place-content: space-evenly;
    flex-direction: row;
    background: #070f4e;
    height: 90px;
    align-items: center;
    &::before {
      content: "";
      width: 330px;
      height: 29px;
      background: #070f4e;
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
