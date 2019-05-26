import React, { Component } from "react";
import PokeCard from "./PokeCard";
import "./PokeDex.css";

class PokeDex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning hand!</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing hand!</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-card">
          {this.props.pokemon.map(p => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PokeDex;
