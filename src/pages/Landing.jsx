import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import landing_left_card from "../assets/images/landing_left_card.png";
import landing_right_card from "../assets/images/landing_right_card.png";
import Button from "../components/Button";
import { chainId, useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import SelectWalletModal from "../components/SelectWalletModal";
// import GameLoadingModal from "../components/GameLoadingModal";
// import GenerateCardModal from "../components/GenerateCardModal";
// import DrawingCardModal from "../components/DrawingCardModal";
// import ConfirmBetModal from "../components/ConfirmBetModal";
// import GameLostModal from "../components/GameLostModal";
// import GameWonModal from "../components/GameWonModal";
// import TippingModal from "../components/TippingModal";
import { useNetwork } from "wagmi";
import { useSwitchNetwork } from "wagmi";
import SwitchWalletModal from "../components/SwitchWalletModal";
import BeginGameModal from "../components/BeginGameModal";
import { VscArrowRight } from "react-icons/vsc";
import GameLoadingModal from "../components/GameLoadingModal";

const Landing = () => {
  const { address, isConnected } = useAccount();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const { chain } = useNetwork();
  const [showSwitchWalletModal, setShowSwitchWalletModal] =
    React.useState(false);
  const [showSelectWalletModal, setShowSelectWalletModal] =
    React.useState(false);
  const [showBeginGameModal, setShowBeginGameModal] = React.useState(false);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const switchToPolygon = () => {
    switchNetwork?.(80001);
  };
  // const handleWalletConnect = () => {
  //   connect();
  //   setShowSelectWalletModal(false);
  //   console.log(chain.id);
  //   chain.id !== 80001 && switchToPolygon();
  // };
  useEffect(() => {
    console.log(chain?.id);
    if (isConnected && chain?.id !== 80001) {
      console.log("switch to polygon");
      setShowSwitchWalletModal(true);
    }
    if (chain?.id === 80001) {
      setShowSwitchWalletModal(false);
    }
  }, [chain]);
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
          {isConnected && chain?.id === 80001 ? (
            <Button
              variant="primary"
              onClick={() => {
                setShowBeginGameModal(true);
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
      {showBeginGameModal && <BeginGameModal />}
      {/* <QrModal /> */}
      {/* <ConnectingWalletModal /> */}
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
