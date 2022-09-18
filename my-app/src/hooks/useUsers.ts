import { useContractFunction } from "@usedapp/core"
import { utils } from "ethers"
import QuoteAbi from "../chain-info/contracts/Quote.json"
import { Contract } from "@ethersproject/contracts"
import { toast } from "react-toastify";

export const UseUsers = () => {

    const { abi } = QuoteAbi
    const quoteAddress = "0x5FAa58Bc1c6a10F88d3Cc584755E2cfE9cc1a9DB"
    const quoteInterface = new utils.Interface(abi)
    const quoteContract = new Contract(quoteAddress, quoteInterface)


    const { send: sign_in, state: sign_in_state } =
    useContractFunction(quoteContract, "addNewUser", {
        transactionName: "SignIn for Quote",
    })

    const sign_in_for_quote = (address: string, Uname:string) => {
        
        toast('Request Sent...')
        return sign_in(address, Uname)
                
    }

    return {sign_in_for_quote, sign_in_state}
}
