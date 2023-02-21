import React from "react";
import About from "./json/about.json";

export const AboutItems = () =>{

    const aboutItems = About.items.map((item,index) => 

        index % 2 !== 0 ? (<div  key={item.id}><div className="about-subtitle-left" >
        <span className="about-subtitle-small about-subtitle-vertical-left about-subtitle-gray">{item.eng}</span>
        <span className="about-subtitle-h2 about-subtitle-black">{item.name}</span></div><br />
        <div className="about-discription">{item.discription}</div><br /><br />
        </div>) :
        
        (<div  key={item.id}><div className="about-subtitle-right" >
        <span className="about-subtitle-h2 about-subtitle-black">{item.name}</span>
        <span className="about-subtitle-small about-subtitle-vertical-right about-subtitle-gray">{item.eng}</span></div><br />
        <div className="about-discription">{item.discription}</div><br /><br /></div>))
   
    return (
        <div id={About.id}>
            <div className="subtitle-left">
                <span className="subtitle-h1 subtitle-gray ">{About.title}</span>
                <span className="subtitle-h3 subtitle-black">{About.name}</span>
            </div>
            <div className="about-discription">{About.discription}</div><br />
            <table className="about-table"><tbody><tr><td>{aboutItems}</td></tr></tbody></table>
        </div>
            );
    
    }