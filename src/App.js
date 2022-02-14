import React from "react";
import './App.css';
import { Menu, SideMenu,TitleImage,HumburgereMenu } from './Header';
import {WorkItems} from './Wroks';
import {SkillItems} from './Skills';
import {AboutItems} from './About';
import {ContactItems} from './Contact';
import {FooterItems} from './Footer';

function App() {

  return (
    <div className="App">
      <Menu />
      <SideMenu />
      <HumburgereMenu />
      <TitleImage />
      <WorkItems />
       <SkillItems />
       <AboutItems />
       <ContactItems />
       <FooterItems />
    </div>
  );
}

export default App;
