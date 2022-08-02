import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import landing_left_card from "../assets/images/landing_left_card.png";
import UpK from "../assets/images/UpK.png";
import DownA from "../assets/images/DownA.png";
import landing_right_card from "../assets/images/landing_right_card.png";
import Button from "../components/Button";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { TbArrowRight } from "react-icons/tb";
const Game = () => {
  const flipCard = () => {};
  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <Left>
          <LeftCard>
            <img src={UpK} alt="left_card" />
            <CardContainer>
              <Button onClick={flipCard}> Click to flip</Button>
            </CardContainer>
            <img src={DownA} alt="left_card" />
          </LeftCard>
          Your Card
        </Left>
        <Middle>
          <Title>I Bet next card is</Title>
          <CardChoice>
            <ChoiceType>
              High Card
              <span>50%(2x)</span>
            </ChoiceType>
            <ChoiceTypeIconContainer>
              <TiArrowSortedUp color="#fff" size={40} />
            </ChoiceTypeIconContainer>
          </CardChoice>
          <CardChoice>
            <ChoiceType>
              Low Card
              <span>50%(2x)</span>
            </ChoiceType>
            <ChoiceTypeIconContainer>
              <TiArrowSortedDown color="#fff" size={40} />
            </ChoiceTypeIconContainer>
          </CardChoice>
          <Title>For</Title>

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
            <TipCard>
              1.0 <span>MATIC</span>
            </TipCard>
            <TipCard>
              2.0 <span>MATIC</span>
            </TipCard>
          </TipCardContainer>
          <Button variant="primary">
            Bet <TbArrowRight style={{ margin: "0 12px" }} size={20} />
          </Button>
        </Middle>
        <Right>
          <LeftCard>
            <img src={UpK} alt="left_card" />
            <CardContainer>Random card from the deck</CardContainer>
            <img src={DownA} alt="left_card" />
          </LeftCard>
          Your Card
        </Right>
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div``;
const CardContainer = styled.div`
  width: 275px;
  height: 394px;
  border: 2px dashed #000;
  border-radius: 24px;
  margin: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Left = styled.div`
  text-align: center;
`;
const LeftCard = styled.div`
  display: flex;
  margin-bottom: 12px;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  max-width: 320px;
`;
const Right = styled.div`
  text-align: center;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 16px;
  color: #000000;
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
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin-bottom: 32px;
`;
const CardChoice = styled.div`
  background: #fffcf6;
  border: 2px solid #0f0f0f;
  box-shadow: 4px 4px 0px #000000;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  max-width: 320px;
  width: 100%;
  margin-bottom: 16px;
`;
const ChoiceType = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #0f0f0f;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #0f0f0f;
  }
`;
const ChoiceTypeIconContainer = styled.div`
  width: 64px;
  height: 56px;
  background: #0f0f0f;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
`;
export default Game;
