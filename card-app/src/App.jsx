import React from "react";
import styled from "styled-components";
import Picture from "./components/picture.jsx";
import Desc from "./components/description.jsx";

function App() {
  return (
    <Card>
      <Picture></Picture>
      <Desc></Desc>
    </Card>
  );
}

export default App;

const Card = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 300px;
`;
