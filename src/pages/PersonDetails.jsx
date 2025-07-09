import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PersonDetails = () => {
    const params = useParams();
    const [personDetails, setPersonDetails] = useState({});
    const getPerson = async () => {
        const response = await fetch(
            `https://www.swapi.tech/api/people/${params.uid}`
        );
        const data = await response.json();
        console.log(data);
        setPersonDetails(data.result.properties);
    };
    useEffect(() => {
        getPerson();
    }, [params.uid]);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img
                        src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${params.uid}.jpg?raw=true`}
                        alt=""
                    />
                </div>
                <div className="col">
                    <h1>{personDetails.name}</h1>
                    <p>
                        Luke Skywalker was a Tatooine farmboy who rose from
                        humble beginnings to become one of the greatest Jedi the
                        galaxy has ever known. Along with his friends Princess
                        Leia and Han Solo, Luke battled the evil Empire,
                        discovered the truth of his parentage, and ended the
                        tyranny of the Sith. A generation later, the location of
                        the famed Jedi master was one of the galaxy’s greatest
                        mysteries. Haunted by Ben Solo’s fall to evil and
                        convinced the Jedi had to end, Luke sought exile on a
                        distant world, ignoring the galaxy’s pleas for help. But
                        his solitude would be interrupted – and Luke Skywalker
                        had one final, momentous role to play in the struggle
                        between good and evil.
                    </p>
                </div>
            </div>

            <div className="col-md-12 col-lg-12">
                <p>
                    <span className="d-block">
                        Gender: {personDetails.gender}
                    </span>
                    <span className="d-block">
                        Hair Color: {personDetails.hair_color}
                    </span>
                    <span className="d-block">
                        Eye_Color: {personDetails.eye_color}
                    </span>
                </p>
            </div>
        </div>
    );
};
