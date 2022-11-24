import React from "react";
import { BsTwitter } from "react-icons/bs";
import styled from "styled-components";
import Button from "./Button";

const GameWonModal = ({ payoutAmount, setGameStarted }) => {
  return (
    <Container>
      <ModalContainer>
        <Emoji>🚀</Emoji>
        <ModalHeader>
          Congratulations! You just won {payoutAmount} MATIC !
        </ModalHeader>
        <Subtitle>Keep going and create a streak!</Subtitle>

        <ButtonContainer>
          <Button
            style={{ width: "200px" }}
            variant="disabled"
            onClick={() => setGameStarted(false)}
          >
            I'm leaving
          </Button>
          <Button
            style={{ width: "200px" }}
            variant="secondary"
            onClick={() => window.location.reload()}
          >
            Degen Again
          </Button>
        </ButtonContainer>
        <MyLink
          href="http://twitter.com/intent/tweet?text=Just%20played%20a%20few%20hands%20%40DegenJack.%20%0ATry%20your%20luck%20and%20stand%20a%20chance%20to%20win%20100%20USDC%21%20%0AGive%20it%20a%20try%20https%3A%2F%2Fdegenjack.xyz%0A"
          target={"_blank"}
        >
          <BsTwitter />
          Tweet about it
        </MyLink>
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
const MyLink = styled.a`
  margin-top: 40px;
  text-decoration: "none";
  color: rgb(29, 155, 240);
  display: flex;
  gap: 8px;
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
// const Link = styled.a`
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 19px;
//   color: #545454;
//   text-align: center;
//   letter-spacing: -0.04em;
//   margin: 16px 0;
//   text-decoration: underline;
// `;
export default GameWonModal;
