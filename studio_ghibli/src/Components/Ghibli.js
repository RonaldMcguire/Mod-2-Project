import React from 'react';
import axios from 'axios';

const ghibli_URL = "https://ghibliapi.herokuapp.com/films";

class Ghibli extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            info: [],
            title: " ",
            director: " ",

        }
      }

      async gettitle(){
        const summon = await axios.get(`${ghibli_URL}`);
        
        const final = summon.data[0].title
        console.log(final);

        const dir = summon.data[0].director
        console.log(dir)
        this.setState({
            director: dir,

            title: final
        })
        
      }




      componentDidMount(){

        this.gettitle();
        
    
      }

      render(){
          return(
              <div>
          <h5>{ this.state.title } </h5>
          <h5>directed by: { this.state.director }</h5>
              </div>
          )
      }
    


}

export default Ghibli;