import { useContractFunction } from "@usedapp/core"
import { utils } from "ethers"
import QuoteAbi from "../chain-info/contracts/Quote.json"
import { Contract } from "@ethersproject/contracts"

export const UsequoteApplication = () => { 


    const { abi } = QuoteAbi
    const quoteAddress = "0xf985B005B82e642300Ebe808476F8282d438f823"
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
