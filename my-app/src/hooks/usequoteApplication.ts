import { useContractFunction } from "@usedapp/core"
import { utils } from "ethers"
import QuoteAbi from "../chain-info/contracts/Quote.json"
import { Contract } from "@ethersproject/contracts"

export const UsequoteApplication = () => { 


    const { abi } = QuoteAbi
    const quoteAddress = "0x5FAa58Bc1c6a10F88d3Cc584755E2cfE9cc1a9DB"
    const quoteInterface = new utils.Interface(abi)
    const quoteContract = new Contract(quoteAddress, quoteInterface) 

    

    const { send: send_quote, state: send_quote_state } =
    useContractFunction(quoteContract, "setQuoteLatest", {
        transactionName: "Send Quote",
    })


    const setQuoteByUser = (_time:string, _quote:string) => {
      
      return send_quote(_time, _quote)
      
  }

    return {setQuoteByUser, send_quote_state}
}
