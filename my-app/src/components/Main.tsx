import {MainBody} from "../components/MainBody"
import { GetC} from '../components/GetC';
import {NotificationsPannel} from "../components/NotificationsPannel"
import {SigninAndConnect} from '../components/SigninAndConnect'
import { makeStyles } from "@material-ui/core";
import app_logo from "../assets/app_logo.jpg"
import { useEthers } from "@usedapp/core";
import { useEffect } from "react";
import MetaMaskLogo from "../assets/MetaMask-Logo.png";
const QuoteStyle = makeStyles({
    imgi: {
      position: "fixed", 
      animation: "color-change 1s infinite", 
      width: "60px", 
      margin: "20px"
    },
    connect: {
        fontSize: "110%", 
        marginTop: "30%", 
        marginLeft: "45%", 
        border: "none", 
        borderRadius: "100px", 
        height: "50px", 
        width: "160px", 
        backgroundColor: "tomato", 
        color: "white", 
        transition: "200ms",
        "&:hover": {
          backgroundColor: "rgb(0, 0, 0)", 
          color: "white"
        },
    },
    metaMaskLogo:{
        position: "absolute",
        marginLeft: "20%",
        marginTop: "12%"
        
    }
})
export const Main = () => {
    const QuoteStyles = QuoteStyle()
    const {account, deactivate, activateBrowserWallet} = useEthers()
    const isConnected = account !== undefined

    useEffect(()=>{
        if (isConnected === true){
            var mainBody = document.getElementById('mainBody')
            var allComponents = document.getElementById('allComponents')
            if (mainBody !== undefined && allComponents !== undefined){
                (mainBody as HTMLElement).innerHTML = "";
                (allComponents as HTMLElement).style.display = 'block'
            }
        }
    }, [isConnected])

    return (
        <div>
        <div id="mainBody">
            <img src={MetaMaskLogo} alt="" className={QuoteStyles.metaMaskLogo}/>
        {isConnected ? (
                <button className={QuoteStyles.connect}
                onClick={deactivate}>
                    Disconnect
                </button>
            ) : (
                <button className={QuoteStyles.connect} onClick={() => activateBrowserWallet()}>
                    Connect
                </button>
            )
        }
        </div>
        <div id='allComponents' style={{display:'none'}}>
        <img src={app_logo} className={QuoteStyles.imgi} alt="" />
        <NotificationsPannel/>
        <SigninAndConnect/>
        <MainBody/>
        <GetC/>
        </div>
        </div>

    )
}

