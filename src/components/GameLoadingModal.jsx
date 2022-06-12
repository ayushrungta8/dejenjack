import React from "react";
import styled from "styled-components";
import Loader from "./Loader";

const GameLoadingModal = () => {
  return (
    <Container>
      <ModalContainer>
        <Loader />
        <ModalHeader>Get ready to play !</ModalHeader>
        <Subtitle>This may take 1 minute to complete</Subtitle>
        <Divider />
        <ModalFooter>
          <StepContainer>Step 1 of 3</StepContainer>
          <ProgressContainer>
            40% Done
            <ProgressBar />
          </ProgressContainer>
        </ModalFooter>
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
  height: 290px;
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
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #8d9099;
  margin: 12px 0;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(84, 84, 84, 1);
  margin: 20px 0;
`;
const ModalFooter = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StepContainer = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;
const ProgressContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;
const ProgressBar = styled.div`
  margin-left: 8px;
  width: 120px;
  height: 14px;
  background: #f0f0f0;
  border: 2px solid #000000;
  border-radius: 21.4138px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: #b247e5;
    border-radius: 21.4138px;
  }
`;
export default GameLoadingModal;
