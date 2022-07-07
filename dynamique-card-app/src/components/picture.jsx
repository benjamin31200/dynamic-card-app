import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.props.picture,
    };
    this.state = {
      name: this.props.name,
    };
  }



  componentDidMount() {
    const objPicture = {
      Avatar2: [
       "https://tse2.mm.bing.net/th?id=OIP.RfJR18HOK-VSTrH8UY0O4wHaE8&pid=Api&P=0&w=293&h=195",
       "https://tse4.mm.bing.net/th?id=OIP.VvTBUM4GrF-fEZMmTAEmngHaER&pid=Api&P=0&w=350&h=202",
       "https://tse4.mm.bing.net/th?id=OIP.KOxWHeF-1I69CMeLw0QvBwHaEK&pid=Api&P=0&w=288&h=162",
       "https://tse1.mm.bing.net/th?id=OIP.eHnEAPmA5aJZWO7PdwYdZgHaD4&pid=Api&P=0&w=396&h=207",
     ],
     indianaJones: [
       "https://tse2.mm.bing.net/th?id=OIP._65Cx3Eicgwi-_yHNXoJVAHaD5&pid=Api&P=0&w=299&h=157",
       "https://tse3.mm.bing.net/th?id=OIP.pPyULv9UlxAn4iVSoD8ruwHaE8&pid=Api&P=0&w=253&h=169",
       "https://tse4.mm.bing.net/th?id=OIP.3IWLEFcQxDkCj2mYYfpN7QHaEH&pid=Api&P=0&w=277&h=154",
     ],
   };
    this.ChangePicture = (obj) => {
      const changePic = (para) => {
        for (let i = 0; i < para.length; i++) {
          setTimeout(() => {
            this.setState({ picture: para[i] });
          }, i * 4000);
  }
      }

      const changeSrc = () => {
        for (const key in obj) {
          if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[this.state.name];
            changePic(element);
          }
        }
      };
      changeSrc();
    };
    const Name = this.props.name;
    const getSec = objPicture[Name].length * 4000;
    this.ChangePicture(objPicture)
    setInterval(() => {
      this.ChangePicture(objPicture);
    }, getSec);
  }
  componentDidUpdate() {
  }

  render() {
    return <Div picture={this.state.picture} className={this.props.name}></Div>;
  }
}

export default Picture;

Picture.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
};

const Div = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  background-image: url(${(props) => props.picture});
  background-position: center;
  background-size: cover;
  background-clip: content-box;
  border-radius: 20px 20px 0 0;
  transition: ease-in-out 1s;
`;
