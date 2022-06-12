import React from "react";
import styled from "styled-components";
import qr from "../assets/images/qr.png";
const QrModal = () => {
  return (
    <Container>
      <ModalContainer>
        <ModalHeader>Scan the QR</ModalHeader>
        <QrCodeContainer>
          <img src={qr} alt="qr code" />
        </QrCodeContainer>
        <Subtitle>Go back to select wallets</Subtitle>
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
  width: 380px;
  height: 428px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 24px 0px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 4px 4px 0px #000000;
`;
const QrCodeContainer = styled.div`
  width: 260px;
  height: 260px;
  margin: 12px 0;
  img {
    width: 100%;
  }
`;
const ModalHeader = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #545454;
  margin-bottom: 12px;
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #8d9099;
  margin: 12px 0;
`;
export default QrModal;
