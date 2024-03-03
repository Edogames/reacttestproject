import React from "react";
import logo from '../logo.svg';

export default function Header(props){
    return(<header>
        <div style={{
            width: "98%",
            margin: "auto",
            padding: "10px 0",
            display: "flex",
            justifyContent: "space-between",
        }}>
            <img className="App-logo" src={logo} style={{
                width: "70px",
                display: "block",
            }}/>
            <div style={{display: "flex"}}>
                {props.buttons}
            </div>
        </div>
    </header>);
}
