import { useEthers } from "@usedapp/core";
import {makeStyles} from "@material-ui/core"
import React, { useEffect } from 'react';

import { utils, providers } from "ethers"
import QuoteAbi from "../chain-info/contracts/Quote.json"
import { Contract } from "@ethersproject/contracts"
import { toast } from "react-toastify";



const newStyles = makeStyles((theme)=>({
    searchBox: {
      position: "fixed",
      width: "50%",
      height: "5%",
      backgroundColor: "aliceblue"
    },
    searchBox_input: {
      width: "75%",
      height: "50%",
      backgroundColor: "rgb(231, 231, 231)",
      marginLeft: "10%",
      marginTop: "1%",
      borderRadius: "100px",
      borderStyle: "none",
      paddingLeft:"1%"
    },
    searchButton: {
      color: "white", 
      backgroundColor: "tomato", 
      border: "none", 
      borderRadius: "10px", 
      height: "30px", 
      transition: "200ms",
      "&:hover": {
        color: "white", 
        backgroundColor: "black", 
        border: "none", 
        borderRadius: "10px", 
        height: "30px"
      }
    },
  }))

  

export const Header = () => {
    const QuoteStyles = newStyles()

    const {account} = useEthers()

    const { abi } = QuoteAbi
    const provider = new providers.WebSocketProvider('wss://goerli.infura.io/ws/v3/6e70cf0251aa43b5958ff45eb0568fc6');
    const quoteAddress = "0xf985B005B82e642300Ebe808476F8282d438f823"
    const quoteInterface = new utils.Interface(abi)
    const quoteContract = new Contract(quoteAddress, quoteInterface, provider) 
    
    


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
          
      
      const searchBar = (inp:string) => {

      	if (inp !== ""){
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
      }

        
      const SignIn = () => {
    
    
          if (account !== undefined){
              quoteContract.getQuoteByUser().then((value:any) => {
                toast.success('You are ready to go!' )
                  for (var i = 0; i < value.length; i++) {
                      generate(value[i][0], value[i][1], value[i][2], value[i][3])
                  }
              })
          }
      }
      var searchInp = ""

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchInp = event.target.value
      }
      
    
      const fetchFunction = () => {
        if (account !== undefined){
            toast.info('Fetching content...' )
            SignIn()
        }
      }
      useEffect(() => {
        fetchFunction()
      }, [account])
        
    
    return (


        <div>

            <div className={QuoteStyles.searchBox}><input className={QuoteStyles.searchBox_input} type="text" onChange={handleInputChange} placeholder="Search something..."/> <button className={QuoteStyles.searchButton} onClick={()=>searchBar(searchInp)}>Search</button></div>

        </div>
    )
}

