import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import UpK from "../assets/images/UpK.png";
import DownA from "../assets/images/DownA.png";
import Button from "../components/Button";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { TbArrowRight } from "react-icons/tb";
import { useContract, useAccount } from "wagmi";
import HilowABI from "../abi/Hilow.json";
import { HILOW_ADDRESS } from "../constants";
import { ethers } from "ethers";
import useApnaContract from "../hooks/useContract";
import Cards from "./cardMap.json";
import GameWonModal from "../components/GameWonModal";
import GameLostModal from "../components/GameLostModal";
import FirstGameLostModal from "../components/FirstGameLostModal";
import FirstGameWonModal from "../components/FirstGameWonModal";
import ModalLoader from "../components/ModalLoader";
const Game = ({ setGameStarted }) => {
  //states
  const [firstCard, setFirstCard] = useState(0);
  const [secondCard, setSecondCard] = useState(0);
  const [thirdCard, setThirdCard] = useState(0);
  const [higher, setHigher] = useState(null);
  const [betAmount, setBetAmount] = useState(0);
  const [firstPrediction, setFirstPrediction] = useState(null);
  const [secondPrediction, setSecondPrediction] = useState(null);
  const [choice, setChoice] = useState(0);
  const [showGameWonModal, setShowGameWonModal] = useState(false);
  const [showGameLostModal, setShowGameLostModal] = useState(false);
  const [showFirstGameWonModal, setShowFirstGameWonModal] = useState(false);
  const [showFirstGameLostModal, setShowFirstGameLostModal] = useState(false);
  const [firstGameWon, setFirstGameWon] = useState(false);
  const [firstGameLost, setFirstGameLost] = useState(false);
  const [secondGameWon, setSecondGameWon] = useState(false);
  const [secondGameLost, setSecondGameLost] = useState(false);
  const [choiceDisabled, setChoiceDisabled] = useState(true);
  const [betDisabled, setBetDisabled] = useState(true);
  const [ctaDisabled, setCtaDisabled] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState(0);

  const bets = [0.05, 0.1, 0.25, 0.5, 1.0, 2.0];

  //web3 hooks
  const [contractLoaded, setContractLoaded] = useState(false);
  const contractLoadedRef = useRef(contractLoaded);
  contractLoadedRef.current = contractLoaded;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contractConfig = {
    addressOrName: HILOW_ADDRESS,
    contractInterface: HilowABI.abi,
    signerOrProvider: signer,
  };
  const { address } = useAccount();

  const contract = useContract(contractConfig);
  const contractReader = useApnaContract();

  const getRandomCard = (n) => {
    const randomCard = Math.floor(Math.random() * Cards[n.toString()].length);
    return Cards[n.toString()][randomCard];
  };

  useEffect(() => {
    const findActiveGame = async () => {
      const [activeGameFound, activeGame] = await contract.getActiveGame();
      console.log("activeGameFound", activeGameFound);
      if (activeGameFound) {
        console.log("activeGame", activeGame);
        const tempFirstCard = activeGame.cards.firstDraw.value.toNumber();
        tempFirstCard !== 0 && setFirstCard(tempFirstCard);
        const tempSecondCard = activeGame.cards.secondDraw.value.toNumber();
        tempSecondCard !== 0 && setSecondCard(tempSecondCard);
        const tempThirdCard = activeGame.cards.thirdDraw.value.toNumber();
        tempThirdCard !== 0 && setThirdCard(tempThirdCard);

        const tempBetAmount = activeGame.betAmount;
        console.log(
          "tempBetAmount",
          tempBetAmount.toString(),
          typeof ethers.utils.formatEther(tempBetAmount.toString())
        );
        const tempBetAmountSmall = ethers.utils.formatEther(
          tempBetAmount.toString()
        );
        console.log("tempBetAmountSmall", parseFloat(tempBetAmountSmall));
        setBetAmount(parseFloat(tempBetAmountSmall));

        const tempFirstPrediction = activeGame.firstPrediction;
        setFirstPrediction(tempFirstPrediction);

        const tempSecondPrediction = activeGame.secondPrediction;
        setSecondPrediction(tempSecondPrediction);

        tempFirstCard !== 0 &&
          tempBetAmount !== 0 &&
          setChoice(tempFirstPrediction ? "high" : "low");
        tempFirstCard !== 0 && tempSecondCard !== 0 && setFirstGameWon(true);
      }
    };
    findActiveGame();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setShowFirstGameWonModal(firstGameWon);
    setShowFirstGameLostModal(firstGameLost);
  }, [firstGameWon, firstGameLost]);
  useEffect(() => {
    setShowGameWonModal(secondGameWon);
    setShowGameLostModal(secondGameLost);
  }, [secondGameWon, secondGameLost]);

  const drawFirstCard = async () => {
    try {
      setShowLoader(true);
      await contractReader()().drawCard();
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
  };
  const makeFirstBet = async () => {
    try {
      setShowLoader(true);
      await contractReader()().makeFirstBet(higher, {
        value: ethers.utils.parseEther(betAmount.toString()),
      });
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
  };
  const makeSecondBet = async () => {
    try {
      setShowLoader(true);
      setShowFirstGameWonModal(false);
      await contractReader()().makeSecondBet(higher);
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(
      firstCard,
      secondCard,
      thirdCard,
      betAmount,
      higher,
      firstPrediction,
      secondPrediction
    );
    if (firstCard !== 0) {
      if (firstGameWon) {
        setChoiceDisabled(false);
        setBetDisabled(true);
      } else {
        setChoiceDisabled(false);
        setBetDisabled(false);
      }
    }
    if (choice && betAmount.toString() !== "0") {
      console.log("choice", choice);
      console.log("betAmount", betAmount);
      setCtaDisabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    firstCard,
    secondCard,
    thirdCard,
    betAmount,
    higher,
    firstPrediction,
    secondPrediction,
    choice,
    // firstGameWon,
  ]);
  // useEffect(() => {
  //   !betDisabled && !choiceDisabled && setCtaDisabled(false);
  // });
  useEffect(() => {
    if (contract && !contractLoadedRef.current) {
      try {
        contract.on("CardDrawn", (player, firstDrawCard) => {
          // console.log(player, firstDrawCard);
          // console.log("accountData", address);
          if (player.toLowerCase() === address?.toLowerCase()) {
            // console.log("firstDrawCard", firstDrawCard.toNumber());
            setShowLoader(false);
            setFirstCard(firstDrawCard.toNumber());
            setBetDisabled(false);
            setChoiceDisabled(false);
          }
        });
      } catch (error) {
        console.log(error);
      }

      try {
        contract.on(
          "FirstBetMade",
          (player, firstDrawCard, secondDrawCard, isWin) => {
            console.log("accountData", address);
            console.log(player, firstDrawCard, secondDrawCard, isWin);
            if (player.toLowerCase() === address?.toLowerCase()) {
              // Manage first bet made state
              console.log("firstDrawCard", firstDrawCard.toNumber());
              console.log("secondDrawCard", secondDrawCard.toNumber());
              setShowLoader(false);

              setFirstCard(firstDrawCard.toNumber());
              setSecondCard(secondDrawCard.toNumber());
              isWin
                ? setShowFirstGameWonModal(true)
                : setShowFirstGameLostModal(true);
              isWin ? setFirstGameWon(true) : setFirstGameLost(true);
              setBetDisabled(true);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }

      try {
        contract.on(
          "GameFinished",
          (
            player,
            firstDrawCard,
            secondDrawCard,
            thirdDrawCard,
            isWin,
            payoutMultiplier,
            payoutAmount
          ) => {
            console.log(
              player,
              firstDrawCard,
              secondDrawCard,
              thirdDrawCard,
              isWin,
              payoutMultiplier,
              payoutAmount
            );
            console.log("accountData", address);

            if (player.toLowerCase() === address?.toLowerCase()) {
              // Manage second bet made and game finished state
              console.log("th", thirdDrawCard.toNumber());
              setFirstCard(secondDrawCard.toNumber());
              setSecondCard(thirdDrawCard.toNumber());
              setPayoutAmount(
                ethers.utils.formatEther(payoutAmount.toString())
              );
              isWin ? setShowGameWonModal(true) : setShowGameLostModal(true);
              isWin ? setSecondGameWon(true) : setSecondGameLost(true);
              setShowLoader(false);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }

      setContractLoaded(true);
    }
  }, [contract, address]);

  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <Left>
          <LeftCard>
            <img src={UpK} alt="left_card" />
            <CardContainer
              style={{ border: firstCard !== 0 ? "none" : "2px dashed #000" }}
            >
              {firstCard ? (
                <img src={`/cards/${getRandomCard(firstCard)}.png`} alt="" />
              ) : (
                <Button onClick={drawFirstCard}> Click to flip</Button>
              )}
            </CardContainer>
            <img src={DownA} alt="left_card" />
          </LeftCard>
          Your Card
        </Left>
        <Middle>
          <Title>I Bet next card is</Title>
          <CardChoice
            onClick={() => {
              setHigher(true);
              setChoice("higher");
            }}
            style={{
              backgroundColor: choice === "higher" ? "#B6F72B" : "white",
            }}
            disabled={choiceDisabled}
          >
            <ChoiceType>
              High Card
              <span>50%(2x)</span>
            </ChoiceType>
            <ChoiceTypeIconContainer>
              <TiArrowSortedUp color="#fff" size={40} />
            </ChoiceTypeIconContainer>
          </CardChoice>
          <CardChoice
            onClick={() => {
              setHigher(false);
              setChoice("low");
            }}
            id="low"
            disabled={choiceDisabled}
            choice={choice}
            style={{ backgroundColor: choice === "low" ? "#B6F72B" : "white" }}
          >
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
            {bets.map((bet) => {
              return (
                <TipCard
                  key={bet}
                  disabled={betDisabled}
                  onClick={() => setBetAmount(bet)}
                  style={{
                    backgroundColor: !secondCard
                      ? betAmount === bet
                        ? "#B6F72B"
                        : "white"
                      : betAmount === bet
                      ? "#B6F72B"
                      : "#E1E1E1",
                  }}
                >
                  {bet} <span>MATIC</span>
                </TipCard>
              );
            })}
          </TipCardContainer>
          <Button
            variant={betAmount !== "0" ? "primary" : "disabled"}
            onClick={firstGameWon ? makeSecondBet : makeFirstBet}
            disabled={ctaDisabled}
          >
            Bet <TbArrowRight style={{ margin: "0 12px" }} size={20} />
          </Button>
        </Middle>
        <Right>
          <LeftCard>
            <img src={UpK} alt="left_card" />
            <CardContainer
              style={{ border: secondCard ? "none" : "2px dashed #000" }}
            >
              {thirdCard ? (
                <img src={`/cards/${getRandomCard(thirdCard)}.png`} alt="" />
              ) : secondCard ? (
                <img src={`/cards/${getRandomCard(secondCard)}.png`} alt="" />
              ) : (
                "Random card from the deck"
              )}
            </CardContainer>
            <img src={DownA} alt="left_card" />
          </LeftCard>
          Your Card
        </Right>
      </ContentContainer>
      {showGameWonModal && (
        <GameWonModal
          payoutAmount={payoutAmount}
          setGameStarted={setGameStarted}
        />
      )}
      {showGameLostModal && <GameLostModal setGameStarted={setGameStarted} />}
      {showFirstGameLostModal && (
        <FirstGameLostModal setGameStarted={setGameStarted} />
      )}
      {showFirstGameWonModal && (
        <FirstGameWonModal
          setShowFirstGameWonModal={setShowFirstGameWonModal}
          setFirstCard={setFirstCard}
          setSecondCard={setSecondCard}
          firstCard={firstCard}
          secondCard={secondCard}
          setGameStarted={setGameStarted}
        />
      )}
      {showLoader && <ModalLoader />}
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
  object-fit: contain;
  img {
    width: 100%;
  }
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

const TipCard = styled.button`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
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
const CardChoice = styled.button`
  border: 2px solid #0f0f0f;
  box-shadow: 4px 4px 0px #000000;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
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
