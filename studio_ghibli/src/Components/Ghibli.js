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

}