import React from "react";
import styled from "styled-components";
import Loader from "./Loader";

const MintingNftModal = () => {
  return (
    <Container>
      <ModalContainer>
        <Loader></Loader>
        <ModalHeader>Minting the NFT for you....</ModalHeader>

        <Subtitle>This may take a minute to complete</Subtitle>
      </ModalContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 620px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 24px 0px;
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 4px 4px 0px #000000;
`;

const ModalHeader = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  text-align: center;
  letter-spacing: -0.05em;
  margin-bottom: 12px;
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #545454;
  text-align: center;
  letter-spacing: -0.04em;
  margin: 12px 0;
`;
export default MintingNftModal;
