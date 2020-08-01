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

  async getCharacter(){
      
    const firstRes = await axios.get(`${BASE_URL}`);
    const animeC = firstRes.data[0].character
    console.log(animeC);
    this.setState({

        character: animeC

    })

}

  componentDidMount(){

    this.getinfo();
    this.getCharacter();

  }






render() {
    return(
        <div>
        <div class = "fixNav">

            <img src ={require("../photos/background.jpg")} alt = " "/> 
            </div> 


            <div class="container">
             
            

                <div class="bottom-left">

                    <h5>{ this.state.finalQuote } ~ {this.state.character}</h5>
                          
                </div>
                
            

            </div>

        </div>    

        
    
    );
};
}

export default Home;