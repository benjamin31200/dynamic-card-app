import React from "react";
import styled from "styled-components";
import Picture from "./components/picture/picture.jsx";
import Desc from "./components/description/description.jsx";
import Subtitle from "./components/subtitle/subtitle.jsx";

function App() {
  return (
    <Section>
      <Card>
        <Picture name="Avatar2"></Picture>
        <Desc
          name="Avatar 2"
          rating="note: 4/5"
          descTitle="Synopsis:"
          texte="13 ans après les événements du premier film, Jake Sully et Neytiri forment une famille et restent ensemble malgré leurs différences. Ils sont cependant forcés de quitter leur maison et doivent explorer de nouvelles régions de Pandora lorsqu'une ancienne menace à la civilisation des Na'Vi refait surface."
        ></Desc>
        <Subtitle
          title="Catégorie:"
          category1="Action"
          category2="Aventure"
          category3="Fantastique"
          category4="Science-fiction"
          category5="épique"
        ></Subtitle>
      </Card>
      <Card>
        <Picture name="indianaJones"></Picture>
        <Desc
          name="Indiana Jones 5"
          rating="note: 2/5"
          descTitle="Synopsis:"
          texte="Thor entreprend un voyage différent de tout ce qu'il a connu jusqu'à présent : une quête de paix intérieure. Mais sa retraite est interrompue par un tueur galactique connu sous le nom de Gorr le Boucher des dieux, qui cherche à faire disparaître les dieux. Pour combattre cette nouvelle menace, Thor demande de l'aide au Roi Valkyrie, à Korg et à son ex-petite amie Jane Foster, qui - à sa grande surprise - manie inexplicablement son marteau magique, Mjolnir. Ensemble, ils se lancent dans une aventure cosmique poignante pour percer le mystère autour de la vengeance du Boucher des dieux et l'arrêter avant qu'il ne soit trop tard."
        ></Desc>
        <Subtitle
          title="Catégorie:"
          category1="Action"
          category2="Aventure"
          category3="suspense"
          category4="fiction"
          category5="épique"
        ></Subtitle>
      </Card>
      <Card>
        <Picture name="thor"></Picture>
        <Desc
          name="Thor: love and thunder"
          rating="note: 3.5/5"
          descTitle="Synopsis:"
          texte="Thor entreprend un voyage différent de tout ce qu'il a connu jusqu'à présent : une quête de paix intérieure. Mais sa retraite est interrompue par un tueur galactique connu sous le nom de Gorr le Boucher des dieux, qui cherche à faire disparaître les dieux. Pour combattre cette nouvelle menace, Thor demande de l'aide au Roi Valkyrie, à Korg et à son ex-petite amie Jane Foster, qui - à sa grande surprise - manie inexplicablement son marteau magique, Mjolnir. Ensemble, ils se lancent dans une aventure cosmique poignante pour percer le mystère autour de la vengeance du Boucher des dieux et l'arrêter avant qu'il ne soit trop tard."
        ></Desc>
        <Subtitle
          title="Catégorie:"
          category1="Action"
          category2="Aventure"
          category3="marvel"
          category4="fiction"
          category5="comédie"
        ></Subtitle>
      </Card>
      <Card>
        <Picture name="grayman"></Picture>
        <Desc
          name="The Gray Man"
          rating="note: 4/5"
          descTitle="Synopsis:"
          texte="Gray Man est le nom de code de l'agent de la CIA Court Gentry , alias Sierra Six. Extirpé d'une prison fédérale et recruté par Donald Fitzroy , ce tueur hautement qualifié opère pendant des années pour le compte de l'agence de renseignement américaine. Sauf que la roue tourne, et Sierra Six se retrouve dans le rôle de la cible, pourchassé par Lloyd Hansen, un ancien acolyte des services secrets désormais prêt à tout pour l'éliminer. Mais l'agente Dani Miranda le soutient, et son aide est la bienvenue…"
        ></Desc>
        <Subtitle
          title="Catégorie:"
          category1="Action"
          category2="policier"
          category3="drame"
          category4="fiction"
          category5="suspense"
        ></Subtitle>
      </Card>
    </Section>
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
  background-position: center;
  background-clip: content-box;
  background-size: cover;
  border: 2px solid black;
  border-radius: 22px;
  position: sticky;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: auto;
  width: auto;
`;
