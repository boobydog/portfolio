import React from 'react';
import Header from "./json/header.json";

export const Menu = () =>{

const menuItems = Header.menu.map((item) =><a class="menu menu-gray bold" href={item.link}>{item.name}</a>);

return (<div  class="menu-background"><a class="menu menu-black bold" href={Header.link}>{Header.title}</a>{menuItems}</div>);

}

export const SideMenu = () =>{

    const menuItems = Header.sidemenu.map((item) => <a class="menu menu-black" href={item.link} target="_blank"><img src={item.icon} alt={item.name} />{item.name}</a> );
    
    return <div class="side-menu-background">{menuItems}</div>;
    
    }

export const TitleImage = () => {

    return <div id={Header.id}><img class="title-image" src = {Header.title_image} alt={Header.name}></img></div>;
}
