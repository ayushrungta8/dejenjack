import React from "react";
import styled from "styled-components";
import { useAccount } from "wagmi";
import Button from "./Button";

const Navbar = () => {
  const { address, isConnected } = useAccount();

  return (
    <Container>
      <LogoContainer>
        <img src="/logo.png" alt="" />
      </LogoContainer>
      <LinkContainer>
        {/* <Link>About</Link>
        <Link>FAQ's</Link>
        <Link>Leaderboard</Link> */}
        <Link
          href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask"
          target="_blank"
        >
          Add PolygonMumbai To Metamask
        </Link>
        <Button variant="primary">
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
const LogoContainer = styled.div``;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Link = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #0f0f0f;
  text-decoration: none;
  margin: 0 48px;
  cursor: pointer;
`;
export default Navbar;
