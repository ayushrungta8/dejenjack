import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import landing_left_card from "../assets/images/landing_left_card.png";
import landing_right_card from "../assets/images/landing_right_card.png";
import Button from "../components/Button";
// import GameLoadingModal from "../components/GameLoadingModal";
// import GenerateCardModal from "../components/GenerateCardModal";
// import DrawingCardModal from "../components/DrawingCardModal";
// import ConfirmBetModal from "../components/ConfirmBetModal";
// import GameLostModal from "../components/GameLostModal";
// import GameWonModal from "../components/GameWonModal";
// import TippingModal from "../components/TippingModal";
const Landing = () => {
  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <Left>
          <img src={landing_left_card} alt="left_card" />
        </Left>
        <Middle>
          <Title>3x your $MATIC within a minute</Title>
          <Subtitle>
            Guessing game strong? Use it to guess the next
            <br /> card and win upto 3x your bet amount!
          </Subtitle>
          <Button variant="primary">Connect Wallet</Button>
        </Middle>
        <Right>
          <img src={landing_right_card} alt="right_card" />
        </Right>
      </ContentContainer>
      {/* <SelectWalletModal /> */}
      {/* <QrModal /> */}
      {/* <ConnectingWalletModal /> */}
      {/* <SwitchWalletModal /> */}
      {/* <SwitchingWalletModal /> */}
      {/* <GameLoadingModal /> */}
      {/* <GenerateCardModal /> */}
      {/* <DrawingCardModal /> */}
      {/* <ConfirmBetModal /> */}
      {/* <GameLostModal /> */}
      {/* <GameWonModal /> */}
      {/* <TippingModal /> */}
    </Container>
  );
};
const Container = styled.div``;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div``;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;
const Right = styled.div``;
const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #0f0f0f;
  font-family: "Space Grotesk", sans-serif;
`;
const Subtitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 186%;
  text-align: center;
  color: #0f0f0f;
  margin-top: 16px;
  margin-bottom: 64px;
`;
export default Landing;
