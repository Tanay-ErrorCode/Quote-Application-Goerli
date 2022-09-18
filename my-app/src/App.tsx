import {DAppProvider, Kovan} from "@usedapp/core"
import { Main } from "./components/Main";


function App() {
  return (
    <DAppProvider config={{
      readOnlyChainId: Kovan.chainId,
      readOnlyUrls: {
        [Kovan.chainId]: 'https://kovan.infura.io/v3/6e70cf0251aa43b5958ff45eb0568fc6',
      },
    }}>
      <Main/>
    </DAppProvider>
  );
}

export default App;
