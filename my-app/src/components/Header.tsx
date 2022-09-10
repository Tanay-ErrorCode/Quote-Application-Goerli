import { useEthers } from "@usedapp/core";
import {Button, makeStyles} from "@material-ui/core"
import React, { useEffect } from 'react';
import icn from "../static/icn.jpg";

import { constants, utils, providers } from "ethers"
import TokenFarm from "../chain-info/contracts/Quote.json"
import { Contract } from "@ethersproject/contracts"
import { toast } from "react-toastify";
// import { SigninF } from "./SigninF";

const useStyles = makeStyles((theme)=>({
    container: {
        padding: theme.spacing(4),
        display: 'flex',
        justifyContent: 'flex-end',
        gap: theme.spacing(1),
        backgroundColor: '#3f4c64',
        borderRadius: 100,
    },
    butotn: {
        backgroundColor: 'lightgreen',
        borderRadius: 10,
    },
    User:{
        display:'flex',
        position: 'absolute',
        // backgroundColor:'lime',
        backgroundImage: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
        marginTop: '1%',
        left: '3%',
        width:'60px',
        height:'60px',
        borderRadius:30,
        
    },
    Identity: {
        margin: 'auto',
        width: '50%',
        padding: '15px',
        marginTop:'-5%',
        marginLeft:'5px',
        
    },
    SigninDiv :{

        display:'flex',
        position: 'absolute',
        marginTop: '1%',
        left: '3%',
        width: 'auto',
        height:'auto'
    }
}))



const newStyles = makeStyles((theme)=>({
    "inputAndSend": {
      "marginTop": "1%",
      "height": "4%",
      "marginLeft": "1%"
    },
    "inputAndSend_input": {
      "display": "inline-block",
      "height": "100%",
      "width": "90%",
      "border": "1px solid black",
      "borderRadius": "25px"
    },
    "inputAndSend_button": {
      "display": "inline-block",
      "height": "110%",
      "width": "5%"
    },
    "signinAndConnect": {
      "float": "right"
    },
    "signIn": {
      "fontSize": "110%",
      "paddingInline": "15%",
      "margin": "15%",
      "border": "none",
      "borderRadius": "100px",
      "height": "50px",
      "width": "140px",
      "backgroundColor": "tomato",
      "color": "white",
      "transition": "200ms"
    },
    "connect": {
      "fontSize": "110%",
      "paddingInline": "15%",
      "margin": "15%",
      "marginTop": "1%",
      "marginLeft": "12%",
      "border": "none",
      "borderRadius": "100px",
      "height": "50px",
      "width": "160px",
      "backgroundColor": "tomato",
      "color": "white",
      "transition": "200ms"
    },
    "connect_hover": {
      "backgroundColor": "rgb(0, 0, 0)",
      "color": "white"
    },
    "signIn_hover": {
      "backgroundColor": "rgb(0, 0, 0)",
      "color": "white"
    },
    "content": {
      "position": "absolute",
      "marginLeft": "25%",
      "backgroundColor": "rgb(221, 221, 221)",
      "height": "99%",
      "width": "50%"
    },
    "searchBox": {
      "position": "fixed",
      "width": "50%",
      "height": "5%",
      "backgroundColor": "aliceblue"
    },
    "searchBox_input": {
      "width": "80%",
      "height": "50%",
      "backgroundColor": "rgb(231, 231, 231)",
      "marginLeft": "10%",
      "marginTop": "1%",
      "borderRadius": "100px",
      "fontSize": "130%",
      "borderStyle": "none"
    },
    "search": {
      "width": "80%",
      "height": "50%",
      "backgroundColor": "inherit",
      "marginLeft": "10%",
      "marginTop": "1%"
    },
    "quote": {
      "backgroundColor": "papayawhip",
      "padding": "10px",
      "margin": "3px"
    },
    "quotes": {
      "marginTop": "5%",
      "height": "89%",
      "overflowY": "scroll"
    },
    "quoteText": {
      "marginTop": "20px"
    },
    "uname": {
      "display": "inline-block",
      "fontSize": "15px",
      "fontWeight": "bold"
    },
    "time": {
      "display": "inline-block",
      "fontSize": "12px",
      "marginLeft": "10px",
      "color": "gray"
    },
    "address": {
      "display": "inline-block",
      "fontSize": "12px",
      "marginLeft": "10px",
      "color": "gray"
    },
    

  }))

// const buttonStyle = makeStyles((theme)=>({
//     buttonStyle: {        
//         backgroundColor: 'pink',
//     }
// }))

export const Header = () => {
    const classes = useStyles()
    const classes1 = newStyles()

    const {account, deactivate, activateBrowserWallet} = useEthers()

    const isConnected = account !== undefined

    const { abi } = TokenFarm
    const provider = new providers.WebSocketProvider('wss://kovan.infura.io/ws/v3/f7e09e630a3a4fe7a88729d0a7cbc3e8');
    // new address :: 0x03750C482CDFc3FD26E4864D3C9BC73066767625
    const tokenFarmAddress = "0x03750C482CDFc3FD26E4864D3C9BC73066767625"
    const tokenFarmInterface = new utils.Interface(abi)
    const tokenFarmContract = new Contract(tokenFarmAddress, tokenFarmInterface, provider) // add signer
    
    


    const generate = (time:string, quote:string, user:string, address:string) => {
        var _body = document.createElement("div")
        

        _body.className='quote'
        
        const c2 = document.getElementById("container2")
        c2?.appendChild(_body)
        c2?.scrollTo({
            behavior: "smooth",
            top: c2?.scrollHeight
            
          })
      
        var _uname = document.createElement("div")
        _uname.innerHTML=user
        _uname.className='uname'
      
        _body.appendChild(_uname)

        var _address = document.createElement("div")
        _address.className = "address"
        _address.innerHTML = '@' + address
      
        _body.appendChild(_address)
      
        var _time = document.createElement("div")
        _time.className='time'
        _time.innerHTML = '&middot;&nbsp' + time
        _body.appendChild(_time)

        var _quote = document.createElement("div")
        _quote.className='quoteText'
        _quote.innerHTML = quote
        _body.appendChild(_quote)

        
        }
      
      
      
      const searchBar = (inp:string) => {

      	var x = document.querySelectorAll('.quoteText, .uname, .time, .address')  
        
      	for (var i = 0; i < x.length; i++) {
      		if (!x[i].innerHTML.toLowerCase().includes(inp.toLowerCase())) {
      			(x[i]as HTMLElement).style.backgroundColor="white";

      		}
      		else {
      			(x[i]as HTMLElement).style.backgroundColor="rgb(255, 213, 213)";
      		}
      	}
      }

        
      const SignIn = () => {
    
    
          if (account != undefined){
              tokenFarmContract.getQuoteByUser().then((value:any) => {
                toast.success('You are ready to go!' )
                  // console.log(value)
                  for (var i = 0; i < value.length; i++) {
                      generate(value[i][0], value[i][1], value[i][2], value[i][3])
                  }
              })
          }
      }
      var quote = ""

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        quote = event.target.value
      }
      
    
      const i = () => {
        if (account != undefined){
            toast.info('Fetching content...' )
            SignIn()
        }
      }
      useEffect(() => {
        i()
      }, [account]) // add [] to only call this once
        
    
    return (


        <div>
        {/* <img className={classes1.icon} src={icn} alt="token image"/> */}
            {/* <div className='User'>
                <button className='identity2' id='Login' onClick={() => loginOrSignin()}>+</button>

                </div> */}
            {/* <div className="loginSignin">
                <button>Login</button>/<button>Signin</button>
            </div> */}

            {/* <div className={classes.SigninDiv}><SigninF/></div>

            <div className={classes.container}>
                
                {isConnected ? (
                    <Button className={classes.butotn}
                    onClick={deactivate} variant='contained'>
                        Disconnect
                    </Button>
                ) : (
                    <Button className={classes.butotn} onClick={() => activateBrowserWallet()} variant='contained'>
                        Connect
                    </Button>
                )
            }
            </div> */}


            <div className={classes1.searchBox}><input className={classes1.searchBox_input} type="text" onChange={handleInputChange} placeholder="Search something..."/> <button className="searchButton" onClick={()=>searchBar(quote)}>Search</button></div>
            

        </div>
    )
}

