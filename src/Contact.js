import React from "react";
import Contact from "./json/contact.json";

export const ContactItems = () =>{

    return (<div id={Contact.id}><div class="subtitle-right"><span class="subtitle-h3 subtitle-black">{Contact.name}</span><span class="subtitle-h1 subtitle-gray ">{Contact.title}</span></div><div>{Contact.discription}</div><div><img src={Contact.icon} alt={Contact.name}></img></div>
    <form>
         <input placeholder = {Contact.mail}/>
         <textarea placeholder = {Contact.form}></textarea>
         <input
           type='submit'
           value='送信'
         />
       </form>
    
    </div>);
    
    }



    