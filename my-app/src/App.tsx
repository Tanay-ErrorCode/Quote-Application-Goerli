import {DAppProvider, Goerli} from "@usedapp/core"
import { Main } from "./components/Main";


function App() {
  return (
    <DAppProvider config={{
      readOnlyChainId: Goerli.chainId,
      readOnlyUrls: {
        [Goerli.chainId]: 'wss://goerli.infura.io/ws/v3/6e70cf0251aa43b5958ff45eb0568fc6',
      },
    }}>
      <Main/>
    </DAppProvider>
  );
}

export default App;
