import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderRing className="lds-ring">
      <div className="child-1"></div>
      <div className="child-2"></div>
      <div className="child-3"></div>
      <div className="child-4"></div>
    </LoaderRing>
  );
};
const LoaderRing = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 24px 0;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    margin: 4px;
    border: 5px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: rgba(178, 71, 229, 1) transparent transparent transparent;
  }
  .child-1 {
    animation-delay: -0.45s;
  }
  .child-2 {
    animation-delay: -0.3s;
  }
  .child-3 {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Loader;
