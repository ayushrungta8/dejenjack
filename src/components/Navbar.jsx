import React from "react";
import styled from "styled-components";
import { useAccount } from "wagmi";
import Button from "./Button";
import { Link } from "react-router-dom";
const Navbar = ({ setShowSelectWalletModal }) => {
  const { address, isConnected } = useAccount();

  return (
    <Container>
      <LogoContainer to="/">
        <img src="/logo.png" alt="" />
      </LogoContainer>
      <LinkContainer>
        {/* <Link>About</Link>
        <Link>FAQ's</Link>
        <Link>Leaderboard</Link> */}
        <MyLink
          href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask"
          target="_blank"
        >
          Add PolygonMumbai To Metamask
        </MyLink>
        <Button
          variant="disabled"
          style={{ marginRight: "12px", border: "2px solid black" }}
          onClick={() => window?.open("https://degenjack.xyz/#/nft", "_blank")}
        >
          Get NFT
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
