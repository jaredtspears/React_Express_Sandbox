import React, { Component} from 'react';
import './gamers.css'

class Gamers extends Component {
  constructor(){
    super();
    this.state ={
      gamers:[]
    }
  }

  // dont have to do http://localhost:5000 because proxy is made in json file
  componentDidMount() {
    fetch('/api/gamers')
    .then(res => res.json())
    .then(gamers => this.setState({ gamers }, ()=> console.log(`Gamers fetched...`, gamers)));
  }

  render(){
    return ( 
      <div>
        <h2>Gamers</h2>
          <ul>
            {this.state.gamers.map(gamers=>
              <li key={ gamers.id }>{  gamers.fName } { gamers.lName } </li>
              )}
          </ul>
      </div>
     );
  }
}
 
export default Gamers;