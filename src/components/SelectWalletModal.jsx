import React from "react";
import styled from "styled-components";
import metamask_icon from "../assets/images/metamask_icon.png";
import rainbow_icon from "../assets/images/rainbow_icon.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { VscLock } from "react-icons/vsc";
const SelectWalletModal = ({ connect }) => {
  return (
    <Container>
      <ModalContainer>
        <ModalHeader>Choose your preferred wallet</ModalHeader>
        <WalletCard onClick={() => connect()}>
          MetaMask
          <WalletIconContainer>
            <img src={metamask_icon} alt="metamask_icon" />
            <MdOutlineArrowForwardIos color="rgba(196, 198, 202, 1)" />
          </WalletIconContainer>
        </WalletCard>
        {/* <WalletCard>
          Rainbow
          <WalletIconContainer>
            <img src={rainbow_icon} alt="rainbow_icon" />
            <MdOutlineArrowForwardIos color="rgba(196, 198, 202, 1)" />
          </WalletIconContainer>
        </WalletCard> */}
        {/* <Subtitle>View QR code instead</Subtitle> */}
        <Divider />
        <ModalFooter>
          <FooterCard>
            <IconContainer>
              <AiOutlineEye size={24} />
            </IconContainer>
            View-only permissions. We will never do anything without your
            approval
          </FooterCard>
          <FooterCard>
            <IconContainer>
              <VscLock size={24} />
            </IconContainer>
            Audited Smart contract
          </FooterCard>
          <FooterCard>
            <IconContainer>
              <AiOutlineHeart size={24} />
            </IconContainer>
            Trusted by 2000 customers
          </FooterCard>
        </ModalFooter>
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
  width: 380px;
  /* height: 428px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 24px 0px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 4px 4px 0px #000000;
`;
const ModalHeader = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #545454;
  margin-bottom: 12px;
`;

const WalletCard = styled.div`
  width: 100%;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.04em;
  color: #26292e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const WalletIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 8px;
  }
`;
const Subtitle = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #8d9099;
  margin: 12px 0;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(84, 84, 84, 1);
  margin: 20px 0;
`;
const ModalFooter = styled.div`
  padding: 12px 0;
`;
const FooterCard = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 158.52%;
  color: #545454;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const IconContainer = styled.div`
  min-width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default SelectWalletModal;
