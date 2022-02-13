import React from 'react';
import Header from "./json/header.json";

export const Menu = () =>{

const menuItems = Header.menu.map((item) =><a className="menu-text gray bold" href={item.link}  key={item.id}>{item.name}</a>);

return (<div  className="menu"><a className="menu-text black bold" href={Header.link}>{Header.title}</a>{menuItems}</div>);

}

export const SideMenu = () =>{

    const menuItems = Header.sidemenu.map((item) => <a className="menu-text black" href={item.link} target="_blank"  key={item.id}><img src={item.icon} alt={item.name} />{item.name}</a> );
    
    return <div className="side-menu">{menuItems}</div>;
    
    }

export const TitleImage = () => {

    return <div id={Header.id}><img className="title-image" src = {Header.title_image} alt={Header.name}></img></div>;
}

export const HumburgereMenu = () =>{

    const menuItems = Header.menu.map((item) =><li class="nav_item"><a className="menu-text gray" href={item.link}  key={item.id}>{item.name}</a></li>);

    return (<div class="humbmenu">
    <div class="nav">
      <input id="drawer_input" class="drawer_hidden" type="checkbox" />
      <label for="drawer_input" class="drawer_open"><span></span></label>
      <nav class="nav_content">
          <ul class="nav_list">
          <a className="menu-text black bold" href={Header.link}>{Header.title}</a>
          {menuItems}
          </ul>
        </nav>
      </div></div>);
    
    }
