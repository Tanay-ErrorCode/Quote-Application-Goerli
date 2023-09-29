import {MainBody} from "../components/MainBody"
import { GetQuotes} from './GetQuotes';
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
        position: "absolute",
        left: "50%",
        top:"70%",
        transform: "translate(-50%, -50%)",
        fontSize: "110%", 
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
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "100%",
        minWidth: "290px",
                
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
        <GetQuotes/>
        </div>
        </div>

    )
}

