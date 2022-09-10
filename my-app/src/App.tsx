import {DAppProvider, ChainId} from "@usedapp/core"
import {Header} from "./components/Header"
import {MainBody} from "./components/MainBody"
import {Container} from "@material-ui/core"
import {InputBox} from "./components/InputBox"
import { GetC} from './components/GetC';
// import { SigninF } from "./components/SigninF";
import {NotificationsPannel} from "./components/NotificationsPannel"
import {SigninAndConnect} from './components/SigninAndConnect'


function App() {

  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan]
    }}>
      {/* <Header/> */}
      <img src="https://play-lh.googleusercontent.com/ExQlFFVME7XRKUX8WghGYNF-zS4uJVL8HO_WIx8xsbSXEgMW08dhwDwPm_UKg3pOXVc" className="imgi" alt="" />
      <NotificationsPannel/>
      <SigninAndConnect/>

      {/* <Container maxWidth='xl'> */}
        
        <MainBody/>
        
        {/* <InputBox></InputBox> */}

        <GetC/>
        

      {/* </Container> */}

    </DAppProvider>
  );
}

export default App;
