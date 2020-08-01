import React from 'react';
import axios from 'axios';
import '../Components/home.css';

const BASE_URL = "https://anime-chan.herokuapp.com/api/quotes/random";

class Home extends React.Component{
constructor() {
    super();
    this.state = {
      info: [],
      finalQuote: " ",
      character: " ",
    }
  }

  async getinfo(){
      
          const firstRes = await axios.get(`${BASE_URL}`);
          const randomQuote = firstRes.data[0].quote
          console.log(randomQuote);
          this.setState({

            finalQuote:randomQuote

          })
      
  }

 

export default Home;