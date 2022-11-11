import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import landing_left_card from "../assets/images/landing_left_card.png";
import landing_right_card from "../assets/images/landing_right_card.png";
import Button from "../components/Button";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import SelectWalletModal from "../components/SelectWalletModal";
import { useNetwork } from "wagmi";
import { useSwitchNetwork } from "wagmi";
import SwitchWalletModal from "../components/SwitchWalletModal";
import BeginGameModal from "../components/BeginGameModal";
import { VscArrowRight } from "react-icons/vsc";
import GameLoadingModal from "../components/GameLoadingModal";
import { ImTwitter } from "react-icons/im";
import GambleWarningModal from "../components/GambleWarningModal";
const Landing = ({ setGameStarted }) => {
  const [showSwitchWalletModal, setShowSwitchWalletModal] = useState(false);
  const [showSelectWalletModal, setShowSelectWalletModal] = useState(false);
  const [showBeginGameModal, setShowBeginGameModal] = useState(false);
  const [showGameLoadingModal, setShowGameLoadingModal] = useState(false);
  const [showGambleWarningModal, setShowGambleWarningModal] = useState(false);

  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const switchToPolygon = () => {
    console.log(chain?.id, "cirrent chain id");
    console.log(switchNetwork, "switch network id");
    switchNetwork?.(80001);
  };

  useEffect(() => {
    console.log(chain?.id, "cirrent chain id");
    if (isConnected && chain?.id !== 80001) {
      console.log("switch to polygon");
      setShowSwitchWalletModal(true);
    }
    if (chain?.id === 80001) {
      setShowSwitchWalletModal(false);
    }
  }, [chain, isConnected]);

  return (
    <Container>
      <Navbar setShowSelectWalletModal={setShowSelectWalletModal} />
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

          {isConnected && chain?.id === 80001 ? (
            <Button
              variant="primary"
              onClick={() => {
                setShowGambleWarningModal(true);
              }}
            >
              Let's Begin
              <VscArrowRight style={{ marginLeft: "8px" }} />
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                setShowSelectWalletModal(true);
              }}
            >
              Connect Wallet
            </Button>
          )}
        </Middle>

        <Right>
          <img src={landing_right_card} alt="right_card" />
        </Right>
      </ContentContainer>
      {!isConnected && showSelectWalletModal && (
        <SelectWalletModal connect={connect} />
      )}
      {showSwitchWalletModal && (
        <SwitchWalletModal
          setShowSwitchWalletModal={setShowSwitchWalletModal}
          switchToPolygon={switchToPolygon}
          chain={chain}
        />
      )}
      {showGambleWarningModal && (
        <GambleWarningModal
          setShowBeginGameModal={setShowBeginGameModal}
          setShowGambleWarningModal={setShowGambleWarningModal}
        />
      )}
      {showBeginGameModal && (
        <BeginGameModal onClick={() => setShowGameLoadingModal(true)} />
      )}

      {showGameLoadingModal && (
        <GameLoadingModal setGameStarted={setGameStarted} />
      )}
      <TwitterBubble href="https://twitter.com/degen_jack" target="_blank">
        <ImTwitter />
      </TwitterBubble>
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
const TwitterBubble = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1da1f2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  color: white;
  padding: 8px;
  svg {
    width: 25px;
    height: 25px;
  }
`;
export default Landing;
