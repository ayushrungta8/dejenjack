// import Game from "./pages/Game";
import Landing from "./pages/Landing";
import { alchemyProvider } from "wagmi/providers/alchemy";
import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
  chain,
} from "wagmi";
import Game from "./pages/Game";

function App() {
  const alchemyId = process.env.REACT_APP_ALCHEMY_ID;
  const { chains, provider, webSocketProvider } = configureChains(
    [chain.polygonMumbai],
    [alchemyProvider({ alchemyId })]
  );

  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  });
  return (
    <WagmiConfig client={client}>
      <div className="App">
        {/* <Landing /> */}
        <Game />
      </div>
    </WagmiConfig>
  );
}

export default App;
