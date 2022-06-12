import React from "react";
import { AiOutlineWarning } from "react-icons/ai";
import styled from "styled-components";
import Button from "./Button";

const ConfirmBetModal = () => {
  return (
    <Container>
      <ModalContainer>
        <Warning>
          <AiOutlineWarning size={24} style={{ margin: " 0 4px " }} />
          Bet wisely you can lose money
        </Warning>

        <ModalHeader>Confirm your bet ?</ModalHeader>
        <Subtitle>
          You have predicted the next card will be a <span>HIGH CARD</span>
        </Subtitle>
        <TransactionContainer>
          <Transaction>Your Bet</Transaction>
          <Amount>$ 0.25 USD</Amount>
        </TransactionContainer>
        <TransactionContainer>
          <Transaction>Transaction fee (Gas fee)</Transaction>
          <Amount>$ 0.0001 USD</Amount>
        </TransactionContainer>
        <ButtonContainer>
          <Button style={{ width: "200px" }} variant="disabled">
            Cancel
          </Button>
          <Button style={{ width: "200px" }} variant="secondary">
            Sign & Confirm
          </Button>
        </ButtonContainer>
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
  height: 310px;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin: 20px;
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  color: #545454;
  text-align: center;
  letter-spacing: -0.04em;
  /* margin: 12px 0; */
  span {
    color: #000;
  }
`;

const Warning = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  background: #fff3f3;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #f24822;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px;
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
const TransactionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Transaction = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #000000;
`;
const Amount = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #000000;
`;
export default ConfirmBetModal;
