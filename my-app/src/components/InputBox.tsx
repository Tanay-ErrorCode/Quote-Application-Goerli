import {makeStyles} from "@material-ui/core"
import React, {useEffect} from 'react';
import { toast } from "react-toastify";
import { UsequoteApplication } from "../hooks/usequoteApplication";



const newStyles = makeStyles({
    inputAndSend: {
        display: 'flex',
        alignItems: 'center',
        
        height: '4%',
        marginLeft: '1%',
        marginBottom: '1.5rem',
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
        backgroundColor: "tomato", 
        border: "none", 
        borderRadius: "100%", 
        aspectRatio: "1/1",
        padding:"10px",
        transition: "200ms",
        marginLeft:'5px',
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
        if (state.status === "Exception"  && state.errorMessage==="execution reverted: You need To SignIn") {
            toast.error('You need to SignIn !')
        }

    }, [state])

    const classes = newStyles()
    return (
        <div className={classes.inputAndSend}>
            <input type="text" className={classes.inputAndSend_input} onChange={handleInputChange}/>
            <button className={classes.inputAndSend_button} onClick={ () => generate()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{fill:"white"}}><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
            </button>
            
        </div>
        
    )
}