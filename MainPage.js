import './mainpage.css';
import React, { useState } from "react";
import styled from "styled-components";
import Logo from '../view/Balkans-modified.png';
import { db } from '../pages/Firebase';
import { Link } from 'react-router-dom';
import CustomButton from '../components/customButton/CustomButton';
import ButtonContainer from '../components/buttonContainer/ButtonContainer';

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
  height: 17,5vh;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
`;

// const NewTravelButton = styled.button`
//   background-color: ${(props) => theme[props.theme].default};
//   color: grey;
//   padding: 10px 15px;
//   &:hover {
//     background-color: ${(props) => theme[props.theme].hover};
//   }
//   &:disabled {
//     cursor: default;
//     opacity: 0.7;
//   }
// `;

// NewTravelButton.defaultProps = {
//   theme: "yellow",
// };

// const PastTravelsButton = styled.button`
//   background-color: ${(props) => theme[props.theme].default};
//   color: white;
//   padding: 5px 15px;
//   border-radius: 1px;
//   outline: 0;
//   border: 0; 
//   text-transform: uppercase;
//   margin: 10px 0px;
//   cursor: pointer;
//   transition: ease background-color 250ms;
//   &:hover {
//     background-color: ${(props) => theme[props.theme].hover};
//   }
//   &:disabled {
//     cursor: default;
//     opacity: 0.7;
//   }
// `;

// PastTravelsButton.defaultProps = {
//   theme: "grey",
// };

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
      <div className="Mainpage">
        <header className="Mainpage-header">
          <p>BALKAN TRAVEL</p>
        </header>
      </div>
      <Container>
        <ButtonContainer children={
          <Link to="/newTravel"><CustomButton value="New Travel" /></Link>
        } />
      </Container>
      <br/><br/><br/>
      <Container>
        <ButtonContainer children={
          <Link to="/pastTravels"><CustomButton value="Past Travels" /></Link>
        } />      
          {/* <PastTravelsButton onClick={<LoginPage/>}>Past Travels</PastTravelsButton> */}
      </Container>
    </div>
  );
}