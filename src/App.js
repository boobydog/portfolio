import React from "react";
import './App.css';
import { Menu, SideMenu,TitleImage } from './Header';
import {WorkItems} from './Wroks';
import {SkillItems} from './Skills';
import {AboutItems} from './About';
import {ContactItems} from './Contact';



function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <Menu />
      <SideMenu />
      <TitleImage />
      <WorkItems />
       <SkillItems />
       <AboutItems />
       <ContactItems />
    </div>
  );
}

export default App;
