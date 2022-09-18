import { makeStyles } from "@material-ui/core";
import { useEthers } from "@usedapp/core";
import React, { useEffect } from 'react';

import { UseUsers } from "../hooks/useUsers";
import { toast } from "react-toastify";

const QuoteStyle = makeStyles({
        signinAndConnect: {
          float: "right"
        },
        signIn: {
          fontSize: "110%", 
          margin: "15%", 
          marginTop: "10%", 
          border: "none", 
          borderRadius: "100px", 
          height: "50px", 
          width: "140px", 
          backgroundColor: "tomato", 
          color: "white", 
          transition: "200ms",
          "&:hover": {
            borderRadius: "50px", 
            fontSize: "18px", 
            backgroundColor: "black"
          }
        },
        Sinput: {
          marginLeft: "20%"
        },
        signInDiv_input: {
          height: "30%", 
          border: "1px solid lightgreen", 
          borderRadius: "10px", 
          fontSize: "14px"
        },
        signInDiv_button: {
          width: "50%", 
          height: "40%", 
          border: "none", 
          borderRadius: "50px", 
          fontSize: "100%", 
          color: "#fff", 
          backgroundColor: "tomato", 
          transition: "200ms", 
          marginLeft: "25%", 
          marginTop: "10%"
        },
        signInDiv: {
          borderRadius: "10px", 
          width: "211px", 
          height: "69px", 
          border: "5px solid black", 
          padding: "20px", 
          marginTop: "-10px", 
          marginRight: "50%", 
          marginBottom: "40px", 
          visibility: "hidden", 
          opacity: "0", 
          transition: "visibility 0s, opacity 0.5s linear"
        },

})


export const SigninAndConnect = () => {
    const QuoteStyles = QuoteStyle()
    const {account} = useEthers()

    var uname = ""

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        uname = event.target.value
    }

    const {sign_in_for_quote, sign_in_state:state} = UseUsers()


    const SignIn = () => {
        if (uname !== ""){
            if (account !== undefined){

                return sign_in_for_quote(account, uname)

            }
        }
    }
    const Show = () => {
    const Shown = document.getElementById("DivSignIn")
    Shown!.style.visibility = "visible"
    Shown!.style.opacity = "1"

    }
    const UnShow = () => {
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
        <div className={QuoteStyles.signinAndConnect}>
            <button className={QuoteStyles.signIn} onClick={() => Show()}>SignIn</button>

            <div className={QuoteStyles.signInDiv} id="DivSignIn">
                <input className={QuoteStyles.signInDiv_input} type="text" onChange={handleInputChange}/><br />
                <button className={QuoteStyles.signInDiv_button} onClick={() => SignIn()}>Proceed</button>
            </div>

            
        </div>
    )
}
