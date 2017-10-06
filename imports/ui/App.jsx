import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Login from './Login.jsx'
import Game from './Game.jsx'
import { Ships } from '../api/ships.js';
import { Games } from '../api/games.js';

class App extends Component {

  render() {
   
    return (
      <div>
           {this.props.currentUser ? <Game
                ships={this.props.ships}
              /> : <Login />}
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