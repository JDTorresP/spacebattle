import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login.jsx'
import Game from './Game.jsx'
import { Ships } from '../api/ships.js';
import { Games } from '../api/games.js';

class App extends Component {


    saveShip(s)
    {
        Ships.insert({
      s,
      createdAt: new Date(), // current time
    });
    }
  render() {
   
    return (
      <div> <MuiThemeProvider>
           {this.props.currentUser ? <Game
                ships={this.props.ships}
                saveShip={this.saveShip.bind(this)}
              /> : <Login />}
            </MuiThemeProvider>
      </div>
    );
  }
};

export default createContainer(() => {
  return {
    ships: Ships.find({}).fetch(),
    games: Games.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),    
  };
}, App);