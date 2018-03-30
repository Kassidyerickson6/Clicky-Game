import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CharacterCard from "./components/CharacterCard";
import character from "./character.json";
import './App.css';

// sets the state to an empty array and a score of 0
class App extends Component {
  state = {
    character,
    clickedCharacter: [],
    score: 0
  };

    clickImage = event => {
      const currentCharacter = event.target.alt;
      const CharacterAlreadyClicked =
        this.state.clickedCharacter.indexOf(currentCharacter) > -1;

    if (CharacterAlreadyClicked) {
      this.setState({
        character: this.state.character.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacter: [],
        score: 0
      });
        alert("Sorry, play again!");

    } else {
      this.setState(
        {
          character: this.state.character.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacter: this.state.clickedCharacter.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },
//if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Congratulations, you won!");
            this.setState({
              character: this.state.character.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacter: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.character.map(character => (
            <CharacterCard
              clickImage={this.clickImage}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

