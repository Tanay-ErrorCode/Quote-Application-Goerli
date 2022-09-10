import { useEthers } from "@usedapp/core";
import {Button, makeStyles} from "@material-ui/core"
import React from 'react';
import { Header } from "./Header";
import { InputBox } from "./InputBox";

const useStyles = makeStyles((theme)=>({
    body: {    
        textAlign: 'center',
        padding: theme.spacing(4),
        gap: theme.spacing(1),
        margin: 20,
        backgroundColor: 'rgb(68, 68, 68)',
        borderRadius: 20,
        color: 'white',
        fontSize:30,
    },
    userName: {
        marginTop:20,
        float:'right',
        backgroundColor: 'rgb(168, 168, 68)',
        borderRadius: 100,
        padding: 5
    },
    time:{
        marginTop:20,
        float: 'left',
        backgroundColor: 'rgb(68, 68, 208)',
        borderRadius: 100,
        padding: 5
        
    },
    container:{
        alignItems:'center',
        // backgroundColor: 'rgb(68, 195, 255)',rgb(255, 158, 55)
        backgroundColor: 'rgb(255, 158, 55)',
        borderRadius:10,
    },
    c2:{
        height: 750,
        overflow:'hidden',
        overflowY:'scroll',
        textAlign:'center'
    },
    load:{
        
    }

}))

// const buttonStyle = makeStyles((theme)=>({
//     buttonStyle: {        
//         backgroundColor: 'pink',
//     }
// }))

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
    "signinAndConnect": {
      "float": "right"
    },
    "signIn": {
      "fontSize": "110%",
      "paddingInline": "15%",
      "margin": "15%",
      "border": "none",
      "borderRadius": "100px",
      "height": "50px",
      "width": "140px",
      "backgroundColor": "tomato",
      "color": "white",
      "transition": "200ms"
    },
    "connect": {
      "fontSize": "110%",
      "paddingInline": "15%",
      "margin": "15%",
      "marginTop": "1%",
      "marginLeft": "12%",
      "border": "none",
      "borderRadius": "100px",
      "height": "50px",
      "width": "160px",
      "backgroundColor": "tomato",
      "color": "white",
      "transition": "200ms"
    },
    "connect_hover": {
      "backgroundColor": "rgb(0, 0, 0)",
      "color": "white"
    },
    "signIn_hover": {
      "backgroundColor": "rgb(0, 0, 0)",
      "color": "white"
    },
    "content": {
      "position": "absolute",
      "marginLeft": "25%",
      "backgroundColor": "rgb(221, 221, 221)",
      "height": "99%",
      "width": "50%"
    },
    "searchBox": {
      "position": "fixed",
      "width": "50%",
      "height": "5%",
      "backgroundColor": "aliceblue"
    },
    "searchBox_input": {
      "width": "80%",
      "height": "50%",
      "backgroundColor": "rgb(231, 231, 231)",
      "marginLeft": "10%",
      "marginTop": "1%",
      "borderRadius": "100px",
      "fontSize": "130%",
      "borderStyle": "none"
    },
    "search": {
      "width": "80%",
      "height": "50%",
      "backgroundColor": "inherit",
      "marginLeft": "10%",
      "marginTop": "1%"
    },
    "quote": {
      "backgroundColor": "papayawhip",
      "padding": "10px",
      "margin": "3px"
    },
    "quotes": {
      "marginTop": "5%",
      "height": "89%",
      "overflowY": "scroll"
    },
    "quoteText": {
      "marginTop": "20px"
    },
    "uname": {
      "display": "inline-block",
      "fontSize": "15px",
      "fontWeight": "bold"
    },
    "time": {
      "display": "inline-block",
      "fontSize": "12px",
      "marginLeft": "10px",
      "color": "gray"
    },
    "address": {
      "display": "inline-block",
      "fontSize": "12px",
      "marginLeft": "10px",
      "color": "gray"
    }
  }))


export const MainBody = () => {
    const classes = newStyles()
    return (
        <div className={classes.content} id='container'>
            <Header/>
            <div className={classes.quotes} id='container2'>

            </div>
            <InputBox/>
        </div>
        
    )
}

