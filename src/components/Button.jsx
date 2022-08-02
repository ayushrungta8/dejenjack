import React from "react";
import styled from "styled-components";

const Button = ({ children, variant, style, onClick }) => {
  return (
    <ButtonContainer style={style} variant={variant} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};
const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
  border: none;
  /* border: 2px solid #EBEBEB; */

  background-color: ${(props) =>
    props.variant === "disabled" ? "#fff" : "rgba(182, 247, 43, 1)"};
  border: ${(props) =>
    props.variant !== "disabled" ? " 2px solid #000000" : "2px solid #EBEBEB"};
  box-shadow: ${(props) =>
    props.variant === "primary" ? "4px 4px 0px #000000" : "none"};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0f0f0f;
  cursor: pointer;
`;
export default Button;
