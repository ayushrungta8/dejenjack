import { ethers } from "ethers";
import contractABI from "../abi/Hilow.json";
import nftContractABI from "../abi/HilowNFT.json";
import { HILOW_NFT_ADDRESS } from "../constants";
import { HILOW_ADDRESS } from "../constants";

export const contract = () => {
  const { ethereum } = window;

  if (!ethereum) {
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  if (ethereum) {
    const signer = provider.getSigner();
    console.log("signer", signer);
    const contractReader = new ethers.Contract(
      HILOW_ADDRESS,
      contractABI.abi,
      signer
    );
    return contractReader;
  }
};

export const nftContract = () => {
  const { ethereum } = window;

  if (!ethereum) {
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  if (ethereum) {
    const signer = provider.getSigner();
    console.log("signer", signer);
    const contractReader = new ethers.Contract(
      HILOW_NFT_ADDRESS,
      nftContractABI.abi,
      signer
    );
    return contractReader;
  }
};
