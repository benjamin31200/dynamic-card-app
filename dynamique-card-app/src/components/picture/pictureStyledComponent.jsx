import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  background-image: url(${(props) => props.picture});
  background-position: center;
  background-size: cover;
  background-clip: content-box;
  border-radius: 20px 20px 30px 30px;
  transition: cubic-bezier(0.1, 0.75, 0.59, 0.64) 0.6s;
  border-bottom: 2px solid black;
  box-shadow: inset rgb(227 229 231) 0px 10px 40px -15px,
    inset rgb(227 229 231) 10px 0px 40px -15px;
`;

const PictureStyledComponents = (props) => {
    return(
        <Div picture={props.picture} className={props.name}></Div>
      );
};

export default PictureStyledComponents;