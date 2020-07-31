import React, { Component } from 'react';
import axios from 'axios';
const BASE_URL = "https://anime-chan.herokuapp.com/api/quotes/random";
import '../Components/home.css'
class home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }
}
    componentDidMount(); {
            axios.get(`${BASE_URL}`)
            .then()


}

const Home = () => {
    return(
        <div>
    <img src ={require("../photos/background.jpg")} alt = " " />  
            <div class="container">
             
            

            <div class="bottom-left">

                Anime quotes will go here within the API
                
            </div>
                
            

</div>



        </div>


    
    );
};

export default Home;
