import axios from "axios";


export async function sendContactEmail(info){
   axios({
    method: 'POST',
    url: 'https://localhost:4000',
    data: info

   }).then((response) => {
    if(response.data.status === 'success') {
       
            setContactInfo()
     
    }
   })
   
}