// import Game from "./pages/Game";
import Landing from "./pages/Landing";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import Game from "./pages/Game";
import { useState } from "react";
import { InjectedConnector } from "wagmi/connectors/injected";

function App() {
  const { chains, provider, webSocketProvider } = configureChains(
    [chain.polygonMumbai],
    [alchemyProvider({ alchemyId: process.env.REACT_APP_ALCHEMY_ID })]
  );
  const [gameStarted, setGameStarted] = useState(false);
  const client = createClient({
    autoConnect: true,
    connectors: [
      new InjectedConnector({
        chains,
        options: {
          name: "Injected",
          shimDisconnect: true,
        },
      }),
    ],
    provider,
    webSocketProvider,
  });
  return (
    <WagmiConfig client={client}>
      <div className="App">
        {gameStarted ? (
          <Game setGameStarted={setGameStarted} />
        ) : (
          <Landing setGameStarted={setGameStarted} />
        )}
      </div>
    </WagmiConfig>
  );
}

export default App;
