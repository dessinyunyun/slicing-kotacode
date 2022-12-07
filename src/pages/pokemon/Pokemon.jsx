import React from "react";
import axios from "axios";
import "./pokemon.css";
import ListPokemon from "./ListPokemon";
import "aos/dist/aos.css";
import Aos from "aos";
const Pokemon = () => {
  const [pokemon, setpokemon] = React.useState([]);

  React.useEffect(() => {
    getPokemon();
    Aos.init({ duration: 1000 });
  }, []);

  const getPokemon = async () => {
    var config = {
      method: "get",
      url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15",
      headers: {},
    };

    await axios(config)
      .then(function (response) {
        setpokemon(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="pokemon-contain">
        <div className="jumbotron-pokemon d-flex">
          <div className="jumbo-card m-auto position-relative">
            <img src="jumbotron-pokemon.png" alt="" />
            <div className="pikachu position-absolute">
              <img src="Pikachu.png" alt="" width="250px" data-aos="fade-up-left" />
            </div>
          </div>
        </div>

        <div className="pokemon-content-contain">
          <h1 className="text-center title-list mt-5" data-aos="fade-up" data-aos-offset="200">
            Chose Your Pokemon!
          </h1>
          <div className="pokemon d-flex gap-3 my-5">
            {pokemon.map((pm) => {
              Aos.init();
              return <ListPokemon pokemon={pm} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
