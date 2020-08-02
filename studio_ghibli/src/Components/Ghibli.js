import React from 'react';
import axios from 'axios';
import howls from '../photos/howls.jpg';
import '../Components/Ghibli.css';

const ghibli_URL = "https://ghibliapi.herokuapp.com/films";

class Ghibli extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            info: [],
            title: " ",
            director: " ",
            description: " ",

        }
      }

      async gettitle(){
        const summon = await axios.get (`${ghibli_URL}`);
        
        const final = summon.data[0].title
        console.log(final);

        const dir = summon.data[0].director
        console.log(dir);

        const detail = summon.data[0].description
        console.log(detail);

        this.setState({
            director: dir,

            title: final,

            description: detail
        })
        
      }




      componentDidMount(){

        this.gettitle();
        
    
      }

      render(){
          return(
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            
              <div class="carousel-item active" id="howls">
              <p>{ this.state.description } </p>
                <img src= { howls } class="d-block w-100" alt=" howl's moving castle "></img>
                <div class="carousel-caption d-none d-md-block" id="blacktext" >
                  <h3>directed by: { this.state.director }</h3>
                  
                </div>
                <div class="carousel-caption d-none d-md-block" id="whitetext" >
                  <h3>directed by: { this.state.director }</h3>
                </div>
                
              </div>
              
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./firelogo.png" class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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