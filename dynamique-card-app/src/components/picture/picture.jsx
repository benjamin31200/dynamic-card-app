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
        "https://tse4.mm.bing.net/th?id=OIP.VvTBUM4GrF-fEZMmTAEmngHaER&pid=Api&P=0&w=350&h=202",
        "https://tse4.mm.bing.net/th?id=OIP.KOxWHeF-1I69CMeLw0QvBwHaEK&pid=Api&P=0&w=288&h=162",
        "https://tse1.mm.bing.net/th?id=OIP.eHnEAPmA5aJZWO7PdwYdZgHaD4&pid=Api&P=0&w=396&h=207",
        "https://tse1.mm.bing.net/th?id=OIP.3TVPW-wuYOo--tYKAhP0aQHaEK&pid=Api&P=0&w=345&h=194",
        "https://tse1.mm.bing.net/th?id=OIP.HX-rr_2vxu4UvDy6-KR8MwHaEK&pid=Api&P=0&w=317&h=178",
      ],
      indianaJones: [
        "https://tse2.mm.bing.net/th?id=OIP._65Cx3Eicgwi-_yHNXoJVAHaD5&pid=Api&P=0&w=299&h=157",
        "https://tse3.mm.bing.net/th?id=OIP.pPyULv9UlxAn4iVSoD8ruwHaE8&pid=Api&P=0&w=253&h=169",
        "https://tse4.mm.bing.net/th?id=OIP.3IWLEFcQxDkCj2mYYfpN7QHaEH&pid=Api&P=0&w=277&h=154",
        "https://tse2.mm.bing.net/th?id=OIP.pvUgpwHqak0toKE0L8n3eQHaEK&pid=Api&P=0&w=326&h=183",
        "https://tse4.mm.bing.net/th?id=OIP.GZm8CkzJ_LZCgfnb6vphQAHaEr&pid=Api&P=0&w=272&h=172",
      ],
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
