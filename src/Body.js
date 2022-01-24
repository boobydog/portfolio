import React from 'react';
import Works from "./json/works.json";
import Skills from "./json/skills.json";
import About from "./json/about.json";

export const Menu = () =>{

const menuItems = Header.menu.map((item) => <a href={item.link}>{item.name}</a> );

return <p>{menuItems}</p>;

}

export const SideMenu = () =>{

    const menuItems = Header.sidemenu.map((item) => <a href={item.link} target="_blank"><img src={item.icon} alt={item.name} />{item.name}</a> );
    
    return <p>{menuItems}</p>;
    
    }
