import axios from 'axios';

// export const GetToken = ()=> {
//   const tokenUrl = process.env.REACT_APP_TOKEN_API_URL;
//   axios.get(tokenUrl)
//   .then((res) => {  PostMessage(res.data);  })
//   .catch((e) =>  {  return e});
// }

 export const SendContact = (e,setIsSuccess,setIsError,closeModal,setIsLoad,setForms) =>{
   const url = process.env.REACT_APP_CONTACT_API_URL;
   var params = new URLSearchParams();
   params.append('name', e.name);
   params.append('mailAddress',e.mailAddress);
   params.append('body', e.body);

    axios.post(url, params)
    .then((res) => {
      //ロード状態の解除
      setIsLoad(false);
      //form内容のリセット
      setForms({name: "",mailAddress: "",body:""});
      //成功のモーダル表示+問い合わせモーダル非表示
      setIsSuccess(true);closeModal();
      //一定時間待機後、モーダルを非表示
      setTimeout(() => setIsSuccess(false), 4000);})
    .catch((err) =>  {
       //ロード状態の解除
      setIsLoad(false);
      //form内容のリセット
      setForms({name: "",mailAddress: "",body:""});
       //エラーのモーダル表示+問い合わせモーダル非表示
      setIsError(true);
      closeModal();
      //一定時間待機後、モーダルを非表示
      setTimeout(() => setIsError(false), 4000);});

}



