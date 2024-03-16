import './App.css';
import React, { useState } from "react";
import styled from "styled-components";
import Logo from './view/Balkans-modified.png';
import { db } from './pages/Firebase';
import { Link } from 'react-router-dom';
import CustomButton from './components/customButton/CustomButton';
import ButtonContainer from './components/buttonContainer/ButtonContainer';

const theme = {
  yellow: {
    default: "#FDED92",
    hover: "#DAAP20",
  },
  grey: {
    default: "#808080",
    hover: "#5C5C5C",
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dede3b;
  height: 37vh;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Question = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const OptionButton = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  margin-bottom: 3px;
  margin-top: 3px;
`;

OptionButton.defaultProps = {
  theme: "grey",
};

const CloseButton = styled.button`
  align-self: center;
  background: none;
  border: none;
  cursor: pointer;
`;

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <LogoContainer>
        <img src={Logo} alt="Logo" style={{width: '15%', height: '15%', borderRadius: '50%', border: '5px solid #DAA520'}}/>
      </LogoContainer>
      
      <div className="App">
        <header className="App-header">
          <p>BALKAN TRAVEL</p>
        </header>
      </div>
      <Container>
        <ButtonContainer children={
          <Link to="/login"><CustomButton pad_height="60px" pad_weight="40px" value="Sign In" /></Link>
        } />
      </Container>
    </div>
  );
}


// {showPopup && (
//   <Popup>
//     <Question>Do you have transport(veichel)?</Question>
//     <OptionButton onClick={clickMe}>Yes</OptionButton>
//     <OptionButton onClick={clickMe}>No(traveling with train)</OptionButton>
//     <CloseButton onClick={togglePopup}>Close</CloseButton>
//   </Popup>
// )}