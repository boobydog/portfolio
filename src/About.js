import React from "react";
import About from "./json/about.json";

export const AboutItems = () =>{

    const aboutItems = About.items.map((item) => <div><h1>{item.eng}</h1><h3>{item.name}</h3><p>{item.discription}</p></div> );
    
    return <div id={About.id}><div class="subtitle-left"><span class="subtitle-h1 subtitle-gray ">{About.title}</span><span class="subtitle-h3 subtitle-black">{About.name}</span></div><div>{About.discription}</div>{aboutItems}</div>;
    
    }