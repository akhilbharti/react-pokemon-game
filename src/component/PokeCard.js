import React, { Component } from "react";
import "./Pokecard.css";
// const pokeApi =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const pokeApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

//to add 00 before the id for url
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class PokeCard extends Component {
  render() {
    let imgsrc = `${pokeApi}${padToThree(this.props.id)}.png`;
    return (
      <div className="PokeCard">
        <h1 className="PokeCard-title">{this.props.name}</h1>
        <div className="PokeCard-image">
          <img src={imgsrc} alt={this.props.name} />
        </div>

        <div lassName="PokeCard-data">Type: {this.props.type}</div>
        <div lassName="PokeCard-data">Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default PokeCard;
