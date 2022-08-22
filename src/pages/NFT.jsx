import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

import Button from "../components/Button";
import { useAccount, useContract } from "wagmi";

import { useNetwork } from "wagmi";
import { useSwitchNetwork } from "wagmi";
import SwitchWalletModal from "../components/SwitchWalletModal";
import { ImTwitter } from "react-icons/im";
import useApnaNftContract from "../hooks/useNftContract";
import { ethers } from "ethers";
import { HILOW_NFT_ADDRESS } from "../constants";
import nftContractABI from "../abi/HilowNFT.json";
import MintingNftModal from "../components/MintingNftModal";
import MintingSuccessfulModal from "../components/MintingSuccessfulModal";
import ConfirmMintModal from "../components/ConfirmMintModal";

const NFT = ({ setGameStarted }) => {
  const [showSwitchWalletModal, setShowSwitchWalletModal] = useState(false);
  const [showConfirmMintModal, setShowConfirmMintModal] = useState(false);
  const [showMintingNftModal, setShowMintingNftModal] = useState(false);
  const [showMintingSuccessfulModal, setShowMintingSuccessfulModal] =
    useState(false);
  const [mintedTokenId, setMintedTokenId] = useState(null);
  // const [nftCount, setNftCount] = useState(1);
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { isConnected } = useAccount();
  // const { connect } = useConnect({
  //   connector: new InjectedConnector(),
  // });
  const contractReader = useApnaNftContract();
  const provider =
    window.ethereum && new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider?.getSigner();

  const contractConfig = {
    addressOrName: HILOW_NFT_ADDRESS,
    contractInterface: nftContractABI.abi,
    signerOrProvider: signer,
  };
  // const { address } = useAccount();

  const contract = useContract(contractConfig);
  const switchToPolygon = () => {
    console.log(chain?.id, "cirrent chain id");
    console.log(switchNetwork, "switch network id");
    switchNetwork?.(80001);
  };
  const mintNft = async () => {
    try {
      // setShowLoader(true);
      await contractReader()().mint({
        value: ethers.utils.parseEther("0.001"),
      });
    } catch (err) {
      // setShowLoader(false);
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(chain?.id, "cirrent chain id");
    if (isConnected && chain?.id !== 80001) {
      console.log("switch to polygon");
      setShowSwitchWalletModal(true);
    }
    if (chain?.id === 80001) {
      setShowSwitchWalletModal(false);
    }
  }, [chain, isConnected]);

  useEffect(() => {
    window.ethereum &&
      contract.on("NFTMinted", (owner, tokenId) => {
        console.log(owner, tokenId);
        setMintedTokenId(tokenId.toNumber());
        setShowMintingNftModal(false);
        setShowMintingSuccessfulModal(true);
      });
  });
  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <Left>
          <img src="nft.svg" alt="left_card" />
        </Left>
        <Middle>
          <Title>DEGENJACK NFT</Title>
          <Subtitle>
            Own our NFT to become our supporter and get a portion of the pool.
          </Subtitle>
          <Subtitle>
            NFT Supply : <span>676</span> | Max Mint : <span>3</span> | Mint
            Price : <span>@10 MATIC</span>
          </Subtitle>
          {/* <QuantityContainer>
            <IncrementButton
              onClick={() => nftCount > 1 && setNftCount(nftCount - 1)}
              disabled={nftCount === 1}
            >
              -
            </IncrementButton>
            <Quantity>{nftCount}</Quantity>
            <IncrementButton
              onClick={() => nftCount < 3 && setNftCount(nftCount + 1)}
              disabled={nftCount === 3}
            >
              +
            </IncrementButton>
          </QuantityContainer>
          <GreyText>≈ 20.023 MATIC</GreyText> */}

          <Button
            style={{ width: "300px" }}
            variant="primary"
            onClick={() => {
              setShowConfirmMintModal(true);
            }}
          >
            Mint Now
          </Button>
          <Button
            style={{
              width: "300px",
              border: "2px solid #000000",
              margin: "12px 0",
            }}
            variant="disabled"
            onClick={() => {}}
          >
            Opensea Collection
          </Button>
        </Middle>
      </ContentContainer>
      {showConfirmMintModal && (
        <ConfirmMintModal
          mintNft={mintNft}
          setShowMintingNftModal={setShowMintingNftModal}
          setShowConfirmMintModal={setShowConfirmMintModal}
        />
      )}
      {showMintingNftModal && <MintingNftModal />}
      {showMintingSuccessfulModal && (
        <MintingSuccessfulModal
          tokenId={mintedTokenId}
          contractAddress={HILOW_NFT_ADDRESS}
          setShowMintingSuccessfulModal={setShowMintingSuccessfulModal}
        />
      )}
      {showSwitchWalletModal && (
        <SwitchWalletModal
          setShowSwitchWalletModal={setShowSwitchWalletModal}
          switchToPolygon={switchToPolygon}
          chain={chain}
        />
      )}
      {/* <MintingSuccessfulModal
        tokenId={mintedTokenId}
        contractAddress={HILOW_NFT_ADDRESS}
      /> */}
      <TwitterBubble href="https://twitter.com/degen_jack" target="_blank">
        <ImTwitter />
      </TwitterBubble>
    </Container>
  );
};
const Container = styled.div``;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Left = styled.div`
  border: 2px solid black;
  padding: 8px;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;
// const Right = styled.div``;
const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #0f0f0f;
  font-family: "Space Grotesk", sans-serif;
`;
const Subtitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #0f0f0f;
  margin: 16px 0;

  span {
    color: rgba(178, 71, 229, 1);
    font-weight: 500;
  }
`;
const TwitterBubble = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1da1f2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  color: white;
  padding: 8px;
  svg {
    width: 25px;
    height: 25px;
  }
`;
// const IncrementButton = styled.button`
//   width: 64px;
//   height: 64px;
//   background-color: transparent;
//   border: ${(props) => (props.disabled ? "1px solid #ccc" : "3px solid black")};
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   font-size: 32px;
// `;
// const Quantity = styled.div`
//   background-color: transparent;
//   border: 3px solid black;
//   padding: 8px 32px;
//   width: 96px;
//   font-size: 32px;
//   margin: 0 32px;
// `;
// const QuantityContainer = styled.div`
//   display: flex;
//   margin-top: 32px;
//   margin-bottom: 8px;
// `;
// const GreyText = styled.div`
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 19px;
//   text-align: center;
//   color: #545454;
//   margin-bottom: 16px;
// `;
export default NFT;
