// import Game from "./pages/Game";
import Landing from "./pages/Landing";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import Game from "./pages/Game";
import { useState } from "react";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Routes, Route, HashRouter } from "react-router-dom";
import NFT from "./pages/NFT";
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
      <HashRouter>
        {/* <BrowserRouter> */}

        <Routes>
          <Route
            path="/"
            element={
              <div className="App" style={{ minHeight: "100vh" }}>
                {gameStarted ? (
                  <Game setGameStarted={setGameStarted} />
                ) : (
                  <Landing setGameStarted={setGameStarted} />
                )}
              </div>
            }
          />
          <Route path="/nft" element={<NFT />} />
        </Routes>
        {/* </BrowserRouter> */}
      </HashRouter>
    </WagmiConfig>
  );
}

export default App;
