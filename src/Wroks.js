import React, { useState } from "react";
import Works from "./json/works.json";

export const WorkItems = () =>{

  const [valueStatus,setValue] = useState("");
  const [modalStatus,setModal] = useState(false);

  const closeModal = () => setModal(false);

  const openModal = () => setModal(true);

    const workItems =  Works.items.map(item => <span className="works-block" key={item.id}><figure ><img id = {item.id} src={item.thumbnail_image}  alt={item.name} onClick={(e) => {setValue(e.target.id); openModal();}}/></figure>
    <ModalItems closeModal={closeModal} status={modalStatus} valueStatus={valueStatus}/>
    </span>
    );

return (<div id={Works.id}>
            <div className="subtitle-left">
                <span className="subtitle-h1 subtitle-gray ">{Works.title}</span>
                <span className="subtitle-h3 subtitle-black">{Works.name}</span>
                </div><div >{workItems}</div>
                </div>);

}

const ModalItems = (props) => {

  return ( props.status ? (
          <div className="overlay">
    <div className="content">      
    <img src={Works.items[props.valueStatus].discription_image}  alt={Works.items[props.valueStatus].title}/>
    <table className="modal_table">
      <tbody className="modal_tbody">
      <tr className="modal_tr">
        {/* <td  className="modal_td  modal_left2"> */}
        <td  className="modal_td modal_left2">
          <tr className="modal_tr">
            <td  className="modal_td modal_left">
            <h2 className ="modal_subtitle-h2  modal_left">{Works.items[props.valueStatus].title}</h2>
              <h3><span className="modal_subtitle-h3">{Works.items[props.valueStatus].overview_title}</span><span className="modal_subtitle-small modal_subtitle-gray">{Works.items[props.valueStatus].overview_title_eng}</span></h3>
              <div  className="modal_discription">{Works.items[props.valueStatus].overview_value}</div>
              </td>
              <td>
                <tr><td className="modal_td modal_left modal_subtitle"><h3><span className="modal_subtitle-h3">{Works.items[props.valueStatus].uselanguage_title}</span><span className="modal_subtitle-small modal_subtitle-gray">{Works.items[props.valueStatus].uselanguage_title_eng}</span></h3></td></tr>
                <tr><td className="modal_td modal_right modal_value"><span className="modal_discription" >{Works.items[props.valueStatus].uselanguage_value}</span></td></tr>
                <tr><td className="modal_td modal_left modal_subtitle"><h3><span className="modal_subtitle-h3">{Works.items[props.valueStatus].workperiod_title}</span><span className="modal_subtitle-small modal_subtitle-gray">{Works.items[props.valueStatus].workperiod_title_eng}</span></h3></td></tr>
                <tr><td className="modal_td modal_right modal_value"><span className="modal_discription">{Works.items[props.valueStatus].workperiod_value}</span></td></tr>
                <tr><td className="modal_td modal_left modal_subtitle"><h3><span className="modal_subtitle-h3">{Works.items[props.valueStatus].link_title}</span><span className="modal_subtitle-small modal_subtitle-gray">{Works.items[props.valueStatus].link_title_eng}</span></h3></td></tr>
                <tr><td className="modal_td modal_right modal_value"><a className="modal_discription" href={Works.items[props.valueStatus].link_value} target={Works.items[props.valueStatus].link_target}>Web Site</a>
                <br /><a href={Works.items[props.valueStatus].git_value} target={Works.items[props.valueStatus].git_target}>Github</a></td></tr>
                </td>
                </tr>
                </td>
                </tr>
                </tbody>
                </table>
        <div className="close" onClick={props.closeModal}>閉じる</div>
    </div>
    
  </div>):(<></>)
  )
}

