// import { useEffect, useState } from "react"
import { useEthers, useContractFunction, useCall } from "@usedapp/core"
import { constants, utils } from "ethers"
import TokenFarm from "../chain-info/contracts/Quote.json"
// import ERC20 from "../chain-info/contracts/MockERC20.json"
import { Contract } from "@ethersproject/contracts"
import {Signer} from "@ethersproject/abstract-signer";
import networkMapping from "../chain-info/deployments/map.json"

export const UsequoteApplication = () => {
    // address
    // abi
    // chainId


    const { abi } = TokenFarm
    const tokenFarmAddress = "0x03750C482CDFc3FD26E4864D3C9BC73066767625"
    const tokenFarmInterface = new utils.Interface(abi)
    const tokenFarmContract = new Contract(tokenFarmAddress, tokenFarmInterface) // add signer

    

    const { send: approveErc20Send2, state: approveAndStakeErc20State2 } =
    useContractFunction(tokenFarmContract, "setQuoteLatest", {
        transactionName: "Approve ERC20 transfer",
    })


    const setQuoteByUser = (_time:string, _quote:string) => {
      // setAmountToStake(amount)
      
      return approveErc20Send2(_time, _quote)
      
  }

    return {setQuoteByUser, approveAndStakeErc20State2}
}
