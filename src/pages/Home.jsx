
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useEffect} from "react";
import {fetchFilms, fetchPeople, fetchPlanets, fetchVehicles} from "../service/APIservice.js"
import { MainCard } from "../components/MainCard.jsx";

export const Home = () => {

	const {store, dispatch} =useGlobalReducer()

	useEffect (() => {
		fetchPeople (dispatch)
		fetchVehicles (dispatch)
		fetchPlanets (dispatch)
		fetchFilms (dispatch)
	}, []);

	return (
		<div>
			<h2>CHARACTERS</h2>
			<div className="peopleContainer d-flex overflow-scroll">
				{store.people.map((person) => (
					<MainCard key={person.uid} person={person} />
				))}
			</div>

			<h2>VEHICLES</h2>
			<div className="vehicleContainer d-flex overflow-scroll">
				{store.vehicles.map((vehicle) => (
					<MainCard key={vehicle.uid} vehicle={vehicle} />
				))}
			</div>

			<h2>PLANETS</h2>
			<div className="planetContainer d-flex overflow-scroll">
				{store.planets.map((planet) => (
					<MainCard key={planet.uid} planet={planet} />
				))}
			</div>

			<h2>FILMS</h2>
			<div className="filmContainer d-flex overflow-scroll">
				{store.films.map((film) => (
					<MainCard key={film.uid} film={film} />
				))}
			</div>
		</div>
	);
}; 

