import { utils, providers } from "ethers"
import QuoteAbi from "../chain-info/contracts/Quote.json"
import { Contract } from "@ethersproject/contracts"
import React, { useEffect } from "react";
import {toast} from 'react-toastify';

export const GetQuotes = () => { 
    
  const generate = (time:string, quote:string, user:string, address:string) => {
    var _body = document.createElement("div")
    

    _body.className="quote"
    
    const c2 = document.getElementById("container2")
    c2?.appendChild(_body)
    c2?.scrollTo({
        behavior: "smooth",
        top: c2?.scrollHeight
        
      })
  
    var _uname = document.createElement("div")
    _uname.innerHTML=user
    _uname.className="uname"
  
    _body.appendChild(_uname)

    var _address = document.createElement("div")
    _address.className = "address"
    _address.innerHTML = '@' + address
  
    _body.appendChild(_address)
  
    var _time = document.createElement("div")
    _time.className="time"
    _time.innerHTML = '&middot;&nbsp' + time
    _body.appendChild(_time)

    var _quote = document.createElement("div")
    _quote.className="quoteText"
    _quote.innerHTML = quote
    _body.appendChild(_quote)

    
    }
    const { abi } = QuoteAbi
    const provider = new providers.WebSocketProvider('wss://kovan.infura.io/ws/v3/6e70cf0251aa43b5958ff45eb0568fc6');
    
    const quoteAddress = "0x5FAa58Bc1c6a10F88d3Cc584755E2cfE9cc1a9DB"
    const quoteInterface = new utils.Interface(abi)
    const quoteContract = new Contract(quoteAddress, quoteInterface, provider) 

    const mainFunction = () => {
      quoteContract.on('quoteUploadedByUser', (_time, _quote, _user, _address, event) => {
        console.log(event)
        toast('New Quote by ' + _user)
  
        // useEffect(()=>{
          generate(_time, _quote, _user, _address)
        // }, [])
  
      });
    }
    useEffect(()=>{mainFunction()}, [])
    return (
        <div>
        </div>
    )
}