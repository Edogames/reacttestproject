import { useState } from 'react';
import './App.css';
import Header from './Widgets/Header';
import Home from './Pages/Home';
import Games from './Pages/Games';

export default function App() {
  const pages = [<Home/>, <Games/>];
  const [CurrentPage, SetCurrentPage] = useState(0);
  
  function SetPageAndAnimate(index){
    if(index != CurrentPage){
      let container = document.getElementById("container");
      container.style.transition = "all ease-in-out 0.5s";
      container.style.left = CurrentPage < index ? "-100vh" : "100vh";
      container.style.scale = "0";
      setTimeout(() => {
        container.style.transition = "none";
        container.style.left = "0vh";
        container.style.scale = "1";
        SetCurrentPage(index);
      }, 500);
    }
  }

  return (
    <div className="App">
      <Header buttons={
        <div>
          <button onClick={()=>SetPageAndAnimate(0)}>Home</button>
          <button onClick={()=>SetPageAndAnimate(1)}>Games</button>
        </div>
      }/>
      <div id='container'>
        {pages[CurrentPage]}
      </div>
    </div>
  );
}
