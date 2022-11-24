import React from "react";
import styled from "styled-components";
import { useAccount } from "wagmi";
import Button from "./Button";
import { Link } from "react-router-dom";
const Navbar = ({ setShowSelectWalletModal }) => {
  const { address, isConnected } = useAccount();
  const addMumbai = () => {
    let params = [
      {
        chainId: "0x13881",
        chainName: "Mumbai",
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18,
        },
        rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
      },
    ];
    window.ethereum
      .request({ method: "wallet_addEthereumChain", params })
      .then(() => console.log("Success"))
      .catch((error) => console.log("Error", error.message));
  };

  return (
    <Container>
      <LogoContainer to="/">
        <img src="/logo.png" alt="" />
      </LogoContainer>
      <LinkContainer>
        {/* <Link>About</Link>
        <Link>FAQ's</Link>
        <Link>Leaderboard</Link> */}
        {/* <MyLink
          href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask"
          target="_blank"
        >
          Add PolygonMumbai To Metamask
        </MyLink> */}
        <Button
          variant="disabled"
          style={{
            marginRight: "12px",
            border: "2px solid black",
            cursor: "not-allowed",
            opacity: "0.5",
          }}
          // onClick={() => window?.open("https://degenjack.xyz/#/nft", "_blank")}
        >
          Get NFT
        </Button>
        <Button
          variant="disabled"
          style={{
            marginRight: "12px",
            border: "2px solid black",
          }}
          onClick={() => addMumbai()}
        >
          Add Mumbai To Metamask
        </Button>
        <Button
          variant="primary"
          onClick={
            !isConnected ? () => setShowSelectWalletModal(true) : () => {}
          }
        >
          {isConnected ? address.substring(0, 10) + "..." : "Connect Wallet"}
        </Button>
      </LinkContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 128px;
  padding: 36px 72px;
  /* background-color: #170d0d; */
`;
const LogoContainer = styled(Link)``;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MyLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #0f0f0f;
  text-decoration: none;
  margin: 0 48px;
  cursor: pointer;
`;
export default Navbar;
