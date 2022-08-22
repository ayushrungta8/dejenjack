import React from "react";
import styled from "styled-components";
import Button from "./Button";

const TippingModal = () => {
  return (
    <Container>
      <ModalContainer>
        <Emoji>🎁</Emoji>
        <ModalHeader>Congratulations on your win !</ModalHeader>
        {/* <Subtitle>Keep going and create a streak!</Subtitle> */}
        <TipCardContainer>
          <TipCard>
            0.05 <span>MATIC</span>
          </TipCard>
          <TipCard>
            0.1 <span>MATIC</span>
          </TipCard>
          <TipCard>
            0.25 <span>MATIC</span>
          </TipCard>
          <TipCard>
            0.5 <span>MATIC</span>
          </TipCard>
        </TipCardContainer>
        <ButtonContainer>
          <Button style={{ width: "200px" }} variant="secondary">
            Tip Degenjack
          </Button>
        </ButtonContainer>
        {/* <Link>I'd like to tip DegenJack</Link> */}
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
  height: 395px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
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
  margin: 20px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px;
`;

const Emoji = styled.div`
  font-size: 40px;
`;

const TipCard = styled.div`
  cursor: pointer;
  width: 96px;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 100%;
  text-align: center;
  padding: 12px 16px;
  color: #0f0f0f;
  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    text-align: center;
    color: #0f0f0f;
  }
`;
const TipCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default TippingModal;
