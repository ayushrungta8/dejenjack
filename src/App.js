// import Game from "./pages/Game";
import Landing from "./pages/Landing";
import { publicProvider } from "wagmi/providers/public";
import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
  chain,
} from "wagmi";
import Game from "./pages/Game";

function App() {
  const { chains, provider, webSocketProvider } = configureChains(
    [chain.polygon],
    [publicProvider()]
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
