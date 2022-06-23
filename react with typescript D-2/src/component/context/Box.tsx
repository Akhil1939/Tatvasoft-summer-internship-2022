import { useContext } from "react"
import {ThemeContext} from './TheamContext'


export const Box=()=>{
    const theme = useContext(ThemeContext)
    return(
        <>
        <div style = {{backgroundColor: theme.primary.main, color:theme.primary.text}}>
            Theme context
        </div>
        <div style = {{backgroundColor: theme.secondary.main, color:theme.secondary.text}}>
            Theme context
        </div>
        </>
    )
}