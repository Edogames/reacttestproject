import React, { useState } from "react";

export default function Card(props){
    const number = props.number;
    const [text, setText] = useState("Click me");

    const handleClick = () => {
        setText(number);
        props.clickAction();
        console.table(props.selectedCards);
    };

    return (
        <div className="card" id={props.definedId} onClick={handleClick}>
            <h1>{text}</h1>
        </div>
    );
}
