import { nftContract } from "../pages/contracts";

const useApnaNftContract = () => {
  //   const { chain } = useNetwork();

  const relayedContract = (args) => {
    return nftContract;
  };

  return relayedContract;
};

export default useApnaNftContract;
