import {makeStyles} from "@material-ui/core"
import React, {useEffect} from 'react';
import { toast } from "react-toastify";
import { UsequoteApplication } from "../hooks/usequoteApplication";



const newStyles = makeStyles({
    inputAndSend: {
        marginTop: '1%',
        height: '4%',
        marginLeft: '1%'
      },
      inputAndSend_input: {
        display: 'inline-block',
        height: '100%',
        width: '90%',
        border: '1px solid black',
        borderRadius: '25px'
      },
      inputAndSend_button: {
        display: 'inline-block',
        color: "white", 
        backgroundColor: "tomato", 
        border: "none", 
        borderRadius: "10px", 
        height: '110%',
        width: '5%',
        transition: "200ms",
        "&:hover": {
          color: "white", 
          backgroundColor: "black", 
        }
      },
    
})


var quote = ""

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    quote = event.target.value
}

export const InputBox = () => {

    const {setQuoteByUser:newQuote, send_quote_state:state} = UsequoteApplication()

    const afterSend = (quote:string) => {

        const now = new Date()
        
        return newQuote(now.toString(), quote)
    }
    
    const generate = () => {
        afterSend(quote);
    }

    useEffect(() => {
        if (state.status === "Exception"  && state.errorMessage==="The execution failed due to an exception.") {
            toast.error('You need to SignIn !')
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