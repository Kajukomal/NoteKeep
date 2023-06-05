import React from "react"

function Footer(){
    const dateTime=new Date().getFullYear();
    return(
        <footer>
        <p>Copyright @ {dateTime}</p>
        </footer>
    )
}

export default Footer;