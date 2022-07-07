import React from "react";
import styled from "styled-components";
import Picture from "./components/picture.jsx";
import Desc from "./components/description.jsx";
import Subtitle from "./components/subtitle.jsx";

function App() {
  return (
      <Card>
        <Picture name="Avatar2"></Picture>
        <Desc
          name="Avatar 2"
          rating="note: 4/5"
          descTitle="Synopsis :"
          descText="13 ans après les événements du premier film, Jake Sully et Neytiri forment une famille et restent ensemble malgré leurs différences. Ils sont cependant forcés de quitter leur maison et doivent explorer de nouvelles régions de Pandora lorsqu'une ancienne menace à la civilisation des Na'Vi refait surface."
        ></Desc>
        <Subtitle
          title="Catégorie :"
          category1="Action"
          category2="Aventure"
          category3="Fantastique"
          category4="Science-fiction"
        ></Subtitle>
      </Card>
  );
}

export default App;

const Card = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 330px;
  border: groove;
  background-image: url(https://img.freepik.com/vecteurs-libre/fond-abstrait-blanc_23-2148806276.jpg?t=st=1657015296~exp=1657015896~hmac=06acbdcf93c50155e15bad313a461525dc62094e25985ae65c30773bc17ff5ff&w=996);
  background-size: 240%;
  background-position: center;
  background-clip: content-box;
  background-size: cover;
  border: 2px solid black;
  border-radius: 22px;
`;