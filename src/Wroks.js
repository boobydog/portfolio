import React, { useState } from "react";
// import React from 'react';
import Works from "./json/works.json";



export const WorkItems = () =>{

  const [valueStatus,setValue] = useState("");
  const [modalStatus,setModal] = useState(false);

  const closeModal = () => setModal(false);

  const openModal = () => setModal(true);

    const workItems =  Works.items.map(item => <span key={item.id}><figure ><img id = {item.id} src={item.thumbnail_image}  alt={item.name} onClick={(e) => {setValue(e.target.id); openModal();}}/></figure>
    <ModalItems closeModal={closeModal} status={modalStatus} valueStatus={valueStatus}/>
    </span>
    );


   
return (<div id={Works.id}>
            <div class="subtitle-left">
                <span class="subtitle-h1 subtitle-gray ">{Works.title}</span>
                <span class="subtitle-h3 subtitle-black">{Works.name}</span>
                </div><div>{workItems}</div>
                </div>);

}

const ModalItems = (props) => {
const  modal = (
    <div className="modal">
      <div className="modal-content">
        <h2>{Works.items[props.valueStatus].name}</h2>
        <p>{Works.items[props.valueStatus].discription}</p>
        <div className="close" onClick={props.closeModal}>閉じる</div>
      </div>
    </div>
  );
  return ( props.status ? (
          <div className="overlay">
    <div className="content">
      <h2>{Works.items[props.valueStatus].name}</h2>
      <img src={Works.items[props.valueStatus].discrintion_image}  alt={Works.items[props.valueStatus].name}/>
   
    {modal}
    </div>
  </div>):(<></>)
  )
}

