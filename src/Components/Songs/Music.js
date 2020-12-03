import React from 'react';
import axios from 'axios';


const API = {
    method: 'GET',
    url: 'https://musicapp8.p.rapidapi.com/',
    params: {q: 'test'},
    headers: {
      'x-rapidapi-key': '5e41c2dd6cmsh97a4f9e20ffa6e7p15e915jsn9a92371eeeb0',
      'x-rapidapi-host': 'musicapp8.p.rapidapi.com'
    }
  };
  
  axios.request(API).then(function (API) {
      //response are logged in the console
    console.log(API.data);
}).catch(function (error) {
    console.error('No data fetched' +error);
});
const Music = () => {
    return(
        <div>
         <h1>Response</h1>
         <div className="response__data">
         <h1>fetching data from an api using axios</h1>
         </div>
        </div>
    );
}

export default Music;