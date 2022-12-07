import React from "react";
import axios from "axios";

const ListPokemon = (props) => {
  const [pokemonDetail, setpokemonDetail] = React.useState([]);
  const [pokemonImg, setpokemonImg] = React.useState();
  console.log(pokemonDetail);

  React.useEffect(() => {
    getPokemonDetail();
  }, []);

  const getPokemonDetail = async () => {
    var config = {
      method: "get",
      url: props.pokemon.url,
      headers: {},
    };

    await axios(config)
      .then(function (response) {
        setpokemonDetail(response.data);
        setpokemonImg(response.data.sprites.other.dream_world.front_default);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="content-pokemon d-flex" data-aos="fade-up" data-aos-offset="100" key={pokemonDetail.id}>
      <div className="card d-flex">
        <div className="card-content row m-auto justify-content-center">
          <div className="col-sm-7 col-7 d-flex">
            <div className="text-pokemon my-auto">
              <h5 className="fw-bold text-start mt-3">{pokemonDetail.name}</h5>
              <p className="m-0">Weight: {pokemonDetail.weight}</p>
              <p className="m-0">height: {pokemonDetail.height}</p>
            </div>
          </div>
          <div className="col-sm-5 col-5 d-flex">
            <div className="for-image m-auto">
              <img src={pokemonImg} alt="" />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPokemon;
