import React from 'react';
import axios from 'axios';
import howls from '../photos/howls.jpg';
import Totoro from '../photos/totoropic.jpg';
import '../Components/Ghibli.css';
import Kiki from '../photos/kiki.jpg';
const ghibli_URL = "https://ghibliapi.herokuapp.com/films";


class Ghibli extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            info: [],
            title: " ",
            director: " ",
            description: " ",
            Totoro: " ",
            kiki: " ",

        }
      }

      async gettitle(){
        const summon = await axios.get (`${ghibli_URL}`);
        
        const final = summon.data[0].title
        

        const dir = summon.data[0].director
        

        const detail = summon.data[0].description
        

        const neighbor = summon.data[2].description
        

        const dilivery = summon.data[3].description
        console.log(dilivery);

        this.setState({
            director: dir,

            title: final,

            description: detail,

            Totoro: neighbor,

            kiki: dilivery,
        })
        
      }




      componentDidMount(){

        this.gettitle();
        
    
      }
      
      render(){
          return(
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">


                <div class = "fixNav">
                     <img src ={require("../photos/totorobackground.jpg")} alt = " "/> 
                </div>
                
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            
              <div class="carousel-item active" id="howls">
              <p id= "whitetextdis">{ this.state.description } </p>
                <img src= { howls } class="d-block w-100" alt=" howl's moving castle "></img>
                <div class="carousel-caption d-none d-md-block" id="blacktext" >
                  <h3>directed by: { this.state.director }</h3>
                  
                </div>
                <div class="carousel-caption d-none d-md-block" id="whitetext" >
                  <h3>directed by: { this.state.director }</h3>
                </div>
                
              </div>
              
              <div class="carousel-item">
              <p id= "whitetextdis">{ this.state.Totoro } </p>
                <img src= { Totoro } class="d-block w-100" alt="Totoro"></img>
                <div class="carousel-caption d-none d-md-block" id="blacktext" >
                  <h3>directed by: { this.state.director }</h3>
                </div>
                <div class="carousel-caption d-none d-md-block" id="whitetext" >
                  <h3>directed by: { this.state.director }</h3>
                </div>
              </div>

              <div class="carousel-item">
              <p id= "whitetextdis">{ this.state.kiki } </p>
                <img src={ Kiki } class="d-block w-100" alt=" "></img>
                <div class="carousel-caption d-none d-md-block" id="blacktext" >
                  <h3>directed by: { this.state.director }</h3>
                </div>
                <div class="carousel-caption d-none d-md-block" id="whitetext" >
                  <h3>directed by: { this.state.director }</h3>
                </div>
              
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          
        //       <div>
        //   <h5>{ this.state.title } </h5>
        //   <h5>directed by: { this.state.director }</h5>
        //   <br></br>

        //   <h5>{ this.state.description }</h5>
        //       </div>
          )
      }
    


}

export default Ghibli;