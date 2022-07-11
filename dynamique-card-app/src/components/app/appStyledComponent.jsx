/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import TestCardComponent from "../card/testCardComponent";

const Section = styled.section`
  width: auto;
  display: flex;
  height: auto;
  justify-content: space-between;
  flex-direction: row;
   align-items: center;
`;

const Input = styled.input.attrs(() => ({
    type: "button",
  }))`
    font-size: 1.6rem;
    width: 50px;
    background-color: white ;
    cursor: pointer;
    height: 50px;
    border: 1px solid;
    &:hover {
      background-image: linear-gradient(#020520, rgba(21, 21, 214, 0.5)),
        url(https://tse1.mm.bing.net/th?id=OIP.1GrT5PWR6d1WhbyQWcvd8AHaEo&pid=Api&P=0&w=275&h=171);
        color: white;
    }
  `;

const SideDiv = styled.div`
width: 230px;
height: 430px;
background-color: red;
`;

const MiddleDiv = styled.div`
width: 400px;
height: 530px;
`;

const AppStyledComponents = () => {
    const arrayCard = [
        <TestCardComponent key="first"
        picName="Avatar2"
        name="Avatar 2"
        rating="note: 4/5"
        synopsisH1="Synopsis:"
        texte="13 ans après les événements du premier film, Jake Sully et Neytiri forment une famille et restent ensemble malgré leurs différences. Ils sont cependant forcés de quitter leur maison et doivent explorer de nouvelles régions de Pandora lorsqu'une ancienne menace à la civilisation des Na'Vi refait surface."
        categoryH1="Catégorie:"
        category1="Action"
        category2="Aventure"
        category3="Fantastique"
        category4="Science-fiction"
        category5="épique"
        ></TestCardComponent>
    ];
    console.log(arrayCard);
    return (
    <Section>
        <SideDiv></SideDiv>
        <Input value="←"></Input>
        <MiddleDiv>
        </MiddleDiv>
        <Input value="→"></Input>
        <SideDiv></SideDiv>
    </Section>
    );
  };
  
  export default AppStyledComponents;