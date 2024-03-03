import { useState } from 'react';
import './css/App.css';
import Header from './Widgets/Header';
import Home from './Pages/Home';
import Games from './Pages/Games';
import HeaderButtons from './Pages/HeaderButtons';
import SideBar from './Widgets/Sidebar';
import LoginScreen from './Pages/Login';

export default function App() {
  const pages = [<Home/>, <Games/>, <LoginScreen/>];
  const [CurrentPage, SetCurrentPage] = useState(0);
  const [SidebarState, SetSidebarState] = useState(0);
  
  function SetPageAndAnimate(index){
    if(index != CurrentPage){
      let container = document.getElementById("container");
      container.style.transition = "all ease-in-out 0.5s";
      container.style.left = CurrentPage > index ? "-100vh" : "100vh";
      container.style.scale = "0";
      setTimeout(() => {
        container.style.transition = "none";
        SetCurrentPage(index);
      }, 500);
      setTimeout(() => {
        container.style.transition = "all ease-in-out 0.5s";
        container.style.left = "0vh";
        container.style.scale = "1";
      }, 500);
    }
  }

  return (
    <div className="App">
      <Header buttons={[<button onClick={()=>SetSidebarState(SidebarState == 0 ? 1 : 0)}>Menu</button>]}/>
      <br />
      <SideBar width={SidebarState == 0 ? "15px" : "50%"} height={SidebarState == 0 ? "0px" : "80vh"}/>
      <HeaderButtons buttons={[
        <button onClick={()=>SetPageAndAnimate(0)}>Домашняя страница</button>,
        <button onClick={()=>SetPageAndAnimate(1)}>Игры</button>,
        <button onClick={()=>SetPageAndAnimate(2)}>Вход</button>,
      ]}/>
      <div id='container'>
        {pages[CurrentPage]}
      </div>
    </div>
  );
}
