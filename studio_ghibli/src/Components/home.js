import React from 'react';
import axios from 'axios';
const BASE_URL = "https://anime-chan.herokuapp.com/api/quotes/random";
import '../Components/home.css'

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
