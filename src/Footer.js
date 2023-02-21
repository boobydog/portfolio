import React from 'react';
import Footer from "./json/footer.json";
import Header from "./json/header.json";

export const FooterItems = () =>{

const menuItems = Footer.menu.map((item) =><li key={item.id}><a className="menu-text gray bold" href={item.link}  >{item.name}</a></li>);

return (<footer  className="footer"><br/>
    <FooterSideMenu />
    <ul className="footer-menu">{menuItems}</ul>
    <div className="footer-copy">Copyright © HIKO. All rights Reserved.</div>
    </footer>);

}

const FooterSideMenu = () =>{

    const menuItems = Header.sidemenu.map((item) => <a className="menu-text black" href={item.link} target="_blank"  key={item.id}><img src={item.icon} alt={item.name} /></a> );
    
    return <div className="footer-side-menu">{menuItems}</div>;
    
    }