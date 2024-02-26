import React from "react";
import logo from '../logo.svg';

export default function Header(props){
    return(<header style={{
        width: "99%",
        margin: "auto",
        padding: "10px 0",
        background: "black",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: "0px",
        zIndex: "999999999",
    }}>
        <div></div>
        {props.buttons}
        <img className="App-logo" src={logo} style={{
            width: "70px",
            display: "block",
        }}/>
    </header>);
}
