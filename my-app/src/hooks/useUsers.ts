// import { useEffect, useState } from "react"
import { useEthers, useContractFunction, useCall } from "@usedapp/core"
import { constants, utils } from "ethers"
import TokenFarm from "../chain-info/contracts/Quote.json"
// import ERC20 from "../chain-info/contracts/MockERC20.json"
import { Contract } from "@ethersproject/contracts"
import {Signer} from "@ethersproject/abstract-signer";
import networkMapping from "../chain-info/deployments/map.json"
import { toast } from "react-toastify";
import { useState } from "react";

export const UseUsers = () => {
    // address
    // abi
    // chainId

    // const { chainId } = useEthers() //  why error generates here?????

    const { abi } = TokenFarm
    const tokenFarmAddress = "0x03750C482CDFc3FD26E4864D3C9BC73066767625"
    const tokenFarmInterface = new utils.Interface(abi)
    const tokenFarmContract = new Contract(tokenFarmAddress, tokenFarmInterface) // add signer


    const { send: approveErc20Send, state: approveAndStakeErc20State } =
    useContractFunction(tokenFarmContract, "addNewUser", {
        transactionName: "SignIn for Quote",
    })

    const approveAndStake = (address: string, Uname:string) => {
        // setAmountToStake(amount)
        
        toast('Request Sent...')
        return approveErc20Send(address, Uname)
                
    }

    return { approveAndStake, approveAndStakeErc20State}
}
