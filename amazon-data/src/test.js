import axios from 'axios';

import React from 'react'

const  test = async() => {
    const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/search',
        params: {
          query: 'Phone',
          page: '1',
          country: 'US',
          category_id: 'aps'
        },
        headers: {
          'X-RapidAPI-Key': '39ebe1b179msh665a09683d81b1fp1b2df1jsn6c0e48ccbdb2',
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
  return (
    <div> </div>
  )
}

export default  test

