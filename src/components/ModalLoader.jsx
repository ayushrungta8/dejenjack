import React from "react";
import { useEffect } from "react";
import Lottie from "react-lottie-player";
import styled from "styled-components";
import LoaderJson from "../loader.json";
import { facts } from "../cardFacts";
const ModalLoader = () => {
  const [fact, setFact] = React.useState(facts[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNum = Math.floor(Math.random() * facts.length);
      setFact(facts[randomNum]);
    }, [10000]);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <Container>
      <Lottie loop play animationData={LoaderJson} width={30} height={30} />
      <Fact>{fact}</Fact>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Fact = styled.div`
  border-radius: 12px;
  padding: 12px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  height: 300px;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #000;
  text-align: center;
`;
export default ModalLoader;
