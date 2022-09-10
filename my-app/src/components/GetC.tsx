// import { useEffect, useState } from "react"
import { utils, providers } from "ethers"
import TokenFarm from "../chain-info/contracts/Quote.json"
// import ERC20 from "../chain-info/contracts/MockERC20.json"
import { Contract } from "@ethersproject/contracts"
import React from "react";
import {toast} from 'react-toastify';
export const GetC = () => {
    // address
    // abi
    // chainId

    
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
    
    const { abi } = TokenFarm
    // const tokenFarmAddress = chainId ? networkMapping[String(chainId)]["QuoteV2"][0] : constants.AddressZero
    // 0xb82841b5DFB1cA1D537bf3e2554c9B3b9D3Fe0Fb
    const provider = new providers.WebSocketProvider('wss://kovan.infura.io/ws/v3/f7e09e630a3a4fe7a88729d0a7cbc3e8');
    const tokenFarmAddress = "0x03750C482CDFc3FD26E4864D3C9BC73066767625"
    const tokenFarmInterface = new utils.Interface(abi)
    const tokenFarmContract = new Contract(tokenFarmAddress, tokenFarmInterface, provider) // add signer

    // tokenFarmContract.on('quoteUploaded', (latest, event) => {
    //   console.log('Second parameter :', latest);
    //   console.log('Event : ', event);  //Event object
    //   generate(latest)
    // });
    tokenFarmContract.on('quoteUploadedByUser', (_time, _quote, _user, _address, event) => {
      // const now = Date()
      console.log('Time :', _time);
      console.log('quote :', _quote);
      console.log('User :', _user);
      console.log('Address :', _address);
      console.log('Event : ', event);  //Event object
      generate(_time, _quote, _user, _address)
      toast('New Quote by ' + _user)
    });
    return (
        <div>
        </div>
    )

// let event = contractInstance.event()
// event.watch(callback)
}