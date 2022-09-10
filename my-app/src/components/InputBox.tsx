import {makeStyles} from "@material-ui/core"
import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom'
// import send from '../static/send.svg'
// import { MainBody } from "./MainBody";
import { UsequoteApplication } from "../hooks/usequoteApplication";
// import { useStakeTokens } from "../hooks/useStakeTokens";

const useStyles = makeStyles((theme)=>({
    box:{
        backgroundColor: 'inherit',
        // border:1,
        margin:10,
        color:'black',
        textAlign: 'center',
    },
    inputS:{
        width:'90%',
        alignSelf: 'stretch',
        float:'left',
        height:50,
        borderRadius:100,
        borderWidth: 2,
        borderColor: 'rgb(0, 195, 255)',
        borderStyle: 'solid',
        fontSize: 40,
        
        
        
    },
    buttonSend:{
        width:50,
        height:50,
        borderRadius:100,
        border:0,
        
    },

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
    
}))


var quote = ""

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    quote = event.target.value
}

export const InputBox = () => {

    const {setQuoteByUser:newQuote, approveAndStakeErc20State2:state} = UsequoteApplication()
    const [currentstate, setState] = useState(state)

    const afterSend = (quote:string) => {

        const now = new Date()
        
        setState(state)
        return newQuote(now.toString(), quote)
    }
    
    const generate = () => {
        console.log(quote)

        afterSend(quote);
        // console.log(currentstate)
        
    }

    useEffect(() => {
        
        if (state.status === "Exception") {
            // setState(stakeState)
            // toast.error('You need to SignIn first !')
            console.log('You need to signin')
        }
    }, [state])

    const classes = newStyles()
    return (
        <div className={classes.inputAndSend}>
            <input type="text" className={classes.inputAndSend_input} onChange={handleInputChange}/>
            <button className={classes.inputAndSend_button} onClick={ () => generate()}>
                Send
            </button>
            
        </div>
        
    )
}