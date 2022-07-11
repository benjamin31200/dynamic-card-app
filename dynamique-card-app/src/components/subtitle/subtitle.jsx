import React from "react";
import PropTypes from "prop-types";
import SubtitleStyledComponents from "./subtitleStyledComponent.jsx";

const SubtitleComponent = (props) => {

    return (
      <SubtitleStyledComponents
      title={props.title}
      category1={props.category1}
      category2={props.category2}
      category3={props.category3}
      category4={props.category4}
      category5={props.category5}
      ></SubtitleStyledComponents>
    );
};

SubtitleComponent.propTypes = {
  title: PropTypes.string,
  category1: PropTypes.string,
  category2: PropTypes.string,
  category3: PropTypes.string,
  category4: PropTypes.string,
  category5: PropTypes.string,
};

export default SubtitleComponent;



