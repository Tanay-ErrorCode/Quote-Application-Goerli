import {makeStyles} from "@material-ui/core"
import { Header } from "./Header";
import { InputBox } from "./InputBox";

const newStyles = makeStyles((theme)=>({
    content: {
      position: "absolute",
      marginLeft: "25%",
      backgroundColor: "rgb(221, 221, 221)",
      height: "99%",
      width: "50%"
    },
    quotes: {
      marginTop: "5%",
      height: "89%",
      overflowY: "scroll"
    },
}))


export const MainBody = () => {
    const styleClass = newStyles()
    return (
        <div className={styleClass.content} id='container'>
            <Header/>
            <div className={styleClass.quotes} id='container2'>

            </div>
            <InputBox/>
        </div>
        
    )
}

