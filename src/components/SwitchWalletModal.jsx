import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { RiErrorWarningLine } from "react-icons/ri";
const SwitchWalletModal = () => {
  return (
    <Container>
      <ModalContainer>
        <Warning>
          <RiErrorWarningLine size={24} style={{ margin: " 0 4px " }} />
          You are connected to Ethereum mainnet
        </Warning>
        <ModalHeader>Switch to polygon mainnet ?</ModalHeader>
        <Subtitle>We use polygon for all the transactions</Subtitle>
        <ButtonContainer>
          <Button style={{ width: "200px" }} variant="disabled">
            Cancel
          </Button>
          <Button style={{ width: "200px" }} variant="secondary">
            Sign & Confirm
          </Button>
        </ButtonContainer>
        <Link>No, I would like to manually change the network</Link>
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
  height: 360px;
  display: flex;

  flex-direction: column;
  align-items: center;
  padding: 48px;
  background: #ffffff;
  border: 1px solid #000000;
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
  margin: 12px;
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #545454;
  text-align: center;
  letter-spacing: -0.04em;
  /* margin: 12px 0; */
`;

const Warning = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  background: #f3d9ff;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #c16aea;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 24px;
`;
const Link = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #545454;
  text-align: center;
  letter-spacing: -0.04em;
  margin: 16px 0;
  text-decoration: underline;
`;
export default SwitchWalletModal;
