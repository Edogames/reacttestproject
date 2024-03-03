import React, { useState } from "react";
import Card from "../Widgets/Card";

let cards = [];

function shuffleArray(array) {
    var arr=array;
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export default function Games(){
    let selectedCards = {};

    function CardClick(id, num){
        if(!selectedCards[id]){
            selectedCards[id] = num;
        }else{
            delete selectedCards[id];
        }
        console.table(selectedCards);
        return;
    }

    if (cards.length == 0) {
        let nums = [];
        for (let index = 0; index < 3; index++) {
            var num = Math.floor(Math.random() * 10);
            if(nums.length > 0){
                for (let j = 0; j < nums.length; j++) {
                    while(num == nums[j] && num == 0){
                        num = Math.floor(Math.random() * 10);
                    }
                    nums.push(num);
                    break;
                }
                cards.push(<Card number={num} definedId={`id-${num}`} clickAction={()=>CardClick(`id-${num}`, num)}/>);
                cards.push(<Card number={num} definedId={`id-${num}(1)`} selectedCards={selectedCards} clickAction={()=>CardClick(`id-${num}1`, num)}/>);
            }else{
                cards.push(<Card number={num} definedId={`id-${num}`} clickAction={()=>CardClick(`id-${num}`, num)}/>);
                cards.push(<Card number={num} definedId={`id-${num}(1)`} selectedCards={selectedCards} clickAction={()=>CardClick(`id-${num}1`, num)}/>);
            }
            console.log(`Pushed: ${num}`);
        }
        console.log(`nums: ${nums}`);
        cards = shuffleArray(cards);
    }
    return(<>
        <h1>~Игры (В разработке)~</h1>
        <br />
        <div className="card-grid">
            {cards}
        </div>
    </>);
}
