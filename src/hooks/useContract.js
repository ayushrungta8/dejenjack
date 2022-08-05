import React from "react";
import { useNetwork } from "wagmi";
import { contract } from "../pages/contracts";

const useApnaContract = () => {
  //   const { chain } = useNetwork();

  const relayedContract = (args) => {
    // console.log("Checkin chain id", chain.id);
    // if (chain.id !== 80001) {
    //   console.log("Not on mainnet");
    //   throw new Error("Kya re chain dekh!");
    // }

    // console.log("Returning contract");

    return contract;
  };

  return relayedContract;
};

export default useApnaContract;
