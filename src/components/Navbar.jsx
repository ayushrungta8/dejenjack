import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Navbar = () => {
  return (
    <Container>
      <Link>About</Link>
      <Link>FAQ's</Link>
      <Link>Leaderboard</Link>
      <Button variant="primary">Connect Wallet</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 128px;
  padding: 36px 72px;
  /* background-color: #170d0d; */
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
