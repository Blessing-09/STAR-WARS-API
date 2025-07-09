import React from "react";
import './MainCard.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import useGlobalReducer from '../hooks/useGlobalReducer';


// import "../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

export const MainCard = ({ person, vehicle, planet, film }) => {
  const {dispatch, store} = useGlobalReducer()
  const subjects =
  person?.name ||
  vehicle?.name ||
  planet?.name ||
  film?.properties?.title;

  const isFavorite = store.favorites.includes(subjects)
  
    return (
        <div className="col-md-4 col-lg-3">
            {person && (
                <div className="card">
                    <img
                        src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${person.uid}.jpg?raw=true`}
                        alt=""
                    />
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">
                            <span className="d-block">Gender:</span>
                            <span className="d-block">Hair Color:</span>
                            <span className="d-block">Eye_Color:</span>
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to = {`/person/${person.uid}`}>
                                <button className="btn text-primary border-primary">
                                    Learn more!
                                </button>
                            </Link>
                            <i className="likeBtn" onClick={() => {
                                dispatch({type: isFavorite ? 'removeFavorite' : 'addFavorite', 
                                    payload: person.name})
                            }}>
                                <FontAwesomeIcon icon={isFavorite ? faSolidHeart : faRegularHeart } /></i>
                        </div>
                    </div>
                </div>
            )}
            {vehicle && (
                <div className="card">
                    <img
                        src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/${vehicle.uid}.jpg?raw=true`}
                        alt=""
                    />
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.name}</h5>
                        <p className="card-text"></p>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to = {`/vehicle/${vehicle.uid}`}>
                                <button className="btn text-primary border-primary">
                                    Learn more!
                                </button>
                            </Link>
                            <i className="likeBtn" onClick={() => {
                                dispatch({type: isFavorite ? 'removeFavorite' : 'addFavorite', 
                                    payload: vehicle.name})
                            }}>
                                <FontAwesomeIcon icon={isFavorite ? faSolidHeart : faRegularHeart } /></i>
                        </div>
                    </div>
                </div>
            )}
            {planet && (
                <div className="card">
                    <img
                        src={
                            planet.uid == 1
                                ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                                : `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${planet.uid}.jpg?raw=true`
                        }
                        alt=""
                    />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text"></p>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to = {`/planet/${planet.uid}`}>
                                <button className="btn text-primary border-primary">
                                    Learn more!
                                </button>
                            </Link>
                            <i className="likeBtn" onClick={() => {
                                dispatch({type: isFavorite ? 'removeFavorite' : 'addFavorite', 
                                    payload: planet.name})
                            }}>
                                <FontAwesomeIcon icon={isFavorite ? faSolidHeart : faRegularHeart} /></i>
                        </div>
                    </div>
                </div>
            )}
            {film && (
                <div className="card">
                    <img
                        src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/films/${film.uid}.jpg?raw=true`}
                        alt=""
                    />
                    <div className="card-body">
                        <h5 className="card-title">{film.properties.title}</h5>
                        <p className="card-text"></p>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to = {`/film/${film.uid}`}>
                                <button className="btn text-primary border-primary">
                                    Learn more!
                                </button>
                            </Link>
                            <i className="likeBtn" onClick={() => {
                                dispatch({type: isFavorite ? 'removeFavorite' : 'addFavorite', 
                                    payload: film.properties.title})
                            }}>
                                <FontAwesomeIcon icon={isFavorite ? faSolidHeart : faRegularHeart} /></i>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
