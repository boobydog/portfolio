import React, { useState } from "react";
import {SendContact} from './SendContact';
import Contact from "./json/contact.json";
import ReactLoading from 'react-loading';
// import axios from 'axios';
export const ContactItems = () =>{

  const [modalStatus,setModal] = useState(false);

  const closeModal = () => setModal(false);

  const openModal = () => setModal(true);

    return (<div id={Contact.id}>
              <div className="subtitle-right">
                <span className="subtitle-h3 subtitle-black">{Contact.name}</span>
                <span className="subtitle-h1 subtitle-gray ">{Contact.title}</span>
              </div>
              <div className="contact-discription">{Contact.discription}</div><br />
              <div><img src={Contact.icon} alt={Contact.name} onClick={() => { openModal();}}></img></div>
              <ContactModal closeModal={closeModal} status={modalStatus}/>
    
              <br /></div>);
    
    }

    
export const Contactbutton = () =>{
//モーダル表示・非表示切り替え
  const [modalStatus,setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal  = () => setModal(true);
  
  return (<><img src={Contact.icon} alt={Contact.name} onClick={() => { openModal();}}></img>
  <ContactModal closeModal={closeModal} status={modalStatus} /></>);
  }

const ContactModal = (props) =>{

 //フォーム内容の格納useState
 const [forms, setForms] = useState({
  name: "",
  mailAddress: "",
  body:""
})
//ローディング状態用useState
const [isLoad,setIsLoad] = useState(false);
//入力チェック用useState
const [isEmpty, setIsEmpty] = useState(false)
//メール入力チェック用useState
const [isRegex, setIsRegex] = useState(false)
//送信完了ステータス用useState
const [isSuccess, setIsSuccess] = useState(false)
//送信エラーステータス用useState
const [isError, setIsError] = useState(false)

//formの値の格納（onchange）
const handleChange = (e) => {
  setForms({
    ...forms,
    [e.target.name]: e.target.value.trim()
  });
}

  //メッセージ送信
  const handleSubmit = (e) => {
    setIsEmpty(false);
    setIsRegex(false);
    //SUBMITのデフォルトの遷移動作をブロック
    e.preventDefault();
    //NULLチェック
    if(!forms.name || !forms.mailAddress || !forms.body) {setIsEmpty(true); return false}
    //メール入力チェック
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(forms.mailAddress)) {setIsRegex(true);return false}
    //Load状態に
    setIsLoad(true);
    //送信処理
    SendContact (forms,setIsSuccess,setIsError,props.closeModal,setIsLoad,setForms)
  }

      return ( <>{props.status ? (
        <div className="overlay">
        <div className="content">
        <div className="form">   
        {isEmpty ?( <p className="error">未入力の項目があります</p>):(<></>)}
        {isRegex ?( <p className="error">正しい形式でメールアドレスを入力してください</p>):(<></>)}
        <form  onSubmit={handleSubmit}>
         <div className="contact-form"><div>{Contact.form1}</div><input name ={Contact.name1}  className="contact-form-text" placeholder = {Contact.placeholder1} onChange={handleChange}/></div>
         <div className="contact-form"><div>{Contact.form2}</div><input name ={Contact.name2} className="contact-form-text" placeholder = {Contact.placeholder2} onChange={handleChange}/></div>
         <div className="contact-form"><div>{Contact.form3}</div><textarea name ={Contact.name3}  className="contact-form-textarea" cols="50" rows="20" placeholder =  {Contact.placeholder3} onChange={handleChange}></textarea></div>
         <div  className="contact-form-submit"><button type="submit">送信</button></div>
       </form>
       <div className="close" onClick={() => { props.closeModal();setIsRegex(false);setIsEmpty(false);setForms({name: "",mailAddress: "",body:""});}}>閉じる</div>
        </div></div></div>):(<></>)}
        
        {isSuccess ?  (
        <div className="fade">
        <div className="overlay">
        <div className="contact-comp-modal"> 
        <div>送信完了しました。</div>
        <div className="close" onClick={() => { setIsSuccess(false);}}>閉じる</div>
        </div></div></div>):(<></>)}
        
        {isError ? (
        <div className="fade">
        <div className="overlay">
        <div className="contact-comp-modal"> 
        <div className="error">送信エラーが発生しました。<br />時間を置いて改めて送信してください。</div>
        <div className="close" onClick={() => { setIsError(false);}}>閉じる</div>
        </div></div></div>):(<></>)}

        {isLoad ? (
        <div className="overlay4">
        <ReactLoading type="spin" color="#fff" />
        </div>):(<></>)}
        </>
        );
      }