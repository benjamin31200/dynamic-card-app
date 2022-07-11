/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import PictureStyledComponents from "./pictureStyledComponent.jsx";

const PictureComponent = (props) => {
  const [picture, setPicture] = React.useState(props.picture);
  const [name, setName] = React.useState(props.name);

  useEffect(() => {
    const objPicture = {
      Avatar2: [
        "https://www.cinehorizons.net/sites/default/files/affiches/2030065977-avatar-la-voie-de-leau.jpg",
        "https://tse4.mm.bing.net/th?id=OIP.KOxWHeF-1I69CMeLw0QvBwHaEK&pid=Api&P=0&w=288&h=162",
        "https://tse1.mm.bing.net/th?id=OIP.eHnEAPmA5aJZWO7PdwYdZgHaD4&pid=Api&P=0&w=396&h=207",
        "https://tse1.mm.bing.net/th?id=OIP.3TVPW-wuYOo--tYKAhP0aQHaEK&pid=Api&P=0&w=345&h=194",
        "https://tse1.mm.bing.net/th?id=OIP.HX-rr_2vxu4UvDy6-KR8MwHaEK&pid=Api&P=0&w=317&h=178",
      ],
      indianaJones: [
        "https://tse2.mm.bing.net/th?id=OIP._65Cx3Eicgwi-_yHNXoJVAHaD5&pid=Api&P=0&w=299&h=157",
        "https://www.cinehorizons.net/sites/default/files/affiches/1308661343-indiana-jones-5.jpg",
        "https://tse2.mm.bing.net/th?id=OIP.pvUgpwHqak0toKE0L8n3eQHaEK&pid=Api&P=0&w=326&h=183",
        "https://tse4.mm.bing.net/th?id=OIP.GZm8CkzJ_LZCgfnb6vphQAHaEr&pid=Api&P=0&w=272&h=172",
      ],
      thor: [
        "https://www.cinehorizons.net/sites/default/files/affiches/1629703663-thor-love-and-thunder.jpg",
        "https://www.cinehorizons.net/sites/default/files/affiches/389627547-thor-love-and-thunder.jpg",
        "https://www.cinehorizons.net/sites/default/files/affiches/829874818-thor-love-and-thunder.jpg",
        "https://www.cinehorizons.net/sites/default/files/affiches/2133390382-thor-love-and-thunder.jpg"
      ],
      grayman: [
        "https://www.cinehorizons.net/sites/default/files/affiches/650806680-gray-man.jpg",
        "https://www.cinehorizons.net/sites/default/files/affiches/673665764-gray-man.jpg",
        "https://www.cinehorizons.net/sites/default/files/affiches/1479715538-gray-man.jpg"
      ]
    };
    const timeoutSrc = (ele, ind) => {
      setTimeout(() => {
        setPicture(ele);
      }, ind * 4000);
    };
    const getSec = objPicture[name].length * 4000;
    objPicture[name].forEach((element, index) => {
      timeoutSrc(element, index);
      setInterval(() => {
        timeoutSrc(element, index);
      }, getSec);
    });
  }, [name]);

  return (
    <PictureStyledComponents
      picture={picture}
      name={props.name}
    ></PictureStyledComponents>
  );
};

export default PictureComponent;

PictureComponent.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
};
