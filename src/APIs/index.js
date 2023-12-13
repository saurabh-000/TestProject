import { APPURL } from "./AppUrl";

export const POST=(url)=>{
    let requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
    return  fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}