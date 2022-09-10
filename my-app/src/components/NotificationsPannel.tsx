import { useEthers } from "@usedapp/core";
import helperConfig from "../helper-config.json"
import networkMapping from '../chain-info/deployments/map.json'
import { constants } from "ethers";
import { toast, ToastContainer } from "react-toastify";
import { makeStyles } from "@material-ui/core/";
import 'react-toastify/dist/ReactToastify.min.css';

import React, { useEffect } from 'react';


export const NotificationsPannel = () => {

    const {chainId} = useEthers()
    const networkName = chainId ? helperConfig[chainId] : "dev"

    const quoteContractAddress = chainId? networkMapping[String(chainId)]['Quote'][0] : constants.AddressZero

    // console.log(quoteContractAddress)
    return (
        <div>
            <ToastContainer
              position="top-center"/>
        </div>
        

    )
}