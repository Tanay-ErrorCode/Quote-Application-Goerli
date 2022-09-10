import { makeStyles } from "@material-ui/core";
import { useEthers } from "@usedapp/core";
import React, { useEffect } from 'react';

import { UseUsers } from "../hooks/useUsers";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme)=>({
    SigninContainer:{
        position: 'relative',
        float: 'left',
        backgroundColor: 'inherit',
        width: '102%',
        height: 60,
        borderRadius:10,
        borderStyle:'solid',
        borderColor:'red',
        textAlign: 'center',
        marginLeft: '1%',
        marginTop: '-1%',
        color:'white',
    },
    Enter:{
        backgroundColor:'white',
        marginTop:10,
        fontSize:'100%',
        borderColor:'white',
        borderStyle:'block',
        borderRadius:100,
        width:'70%'
        
    },
    proceed:{
        marginTop:10,
        fontSize:'150%',
        borderStyle:'none',
        borderRadius:10,
        backgroundColor:'cyan',
        color:'red'
        // backgroundColor:'red'
    }
}))



export const SigninAndConnect = () => {
    // 0x03750C482CDFc3FD26E4864D3C9BC73066767625

    const {account, deactivate, activateBrowserWallet} = useEthers()
    const isConnected = account !== undefined

    var uname = ""

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // const classes = useStyles()
        uname = event.target.value
    }

    const {approveAndStake, approveAndStakeErc20State:state} = UseUsers()


    const SignIn = () => {
        if (uname !== ""){
            if (account !== undefined){

                return approveAndStake(account, uname)

            }
        }
    }
    const Show = () => {
    // DivSignIn
    const Shown = document.getElementById("DivSignIn")
    Shown!.style.visibility = "visible"
    Shown!.style.opacity = "1"

    }
    const UnShow = () => {
        // DivSignIn
        const Shown = document.getElementById("DivSignIn")
        Shown!.style.visibility = "invisible"
        Shown!.style.opacity = "0"
    
        }
    useEffect(() => {
        
        if (state.status === "Success") {
            toast.success('SignIn Success !')
            UnShow()
        }
    }, [state])

    
    return (
        <div className='signinAndConnect'>
            {isConnected ? (
                    <button className='connect'
                    onClick={deactivate}>
                        Disconnect
                    </button>
                ) : (
                    <button className='connect' onClick={() => activateBrowserWallet()}>
                        Connect
                    </button>
                )
            }
            {/* This is Signin F script! */}
            {/* Signin <br></br> */}
            <button className='signIn' onClick={() => Show()}>SignIn</button>

            <div className="signInDiv" id="DivSignIn">
                <input type="text" onChange={handleInputChange}/><br />
                <button onClick={() => SignIn()}>Proceed</button>
            </div>

            {/* <input type="text"  className="Sinput"/> */}
            {/* <button className='connect' onClick={() => activateBrowserWallet()}>Connect</button> */}
            
        </div>
    )
}
