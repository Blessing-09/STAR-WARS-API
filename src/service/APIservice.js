
export const fetchPeople = async (dispatch) => { 
    const response = await fetch('https://www.swapi.tech/api/people',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok) {
            throw new Error('Failed to fetch characters data');
        }
    
        
    const PeopleData = await response.json();
        dispatch ({type: 'getPeople', payload: PeopleData.results}); 
}

export const fetchVehicles = async (dispatch) => { 
    const response = await fetch('https://www.swapi.tech/api/vehicles',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok) {
            throw new Error('Failed to fetch vehicles data');
        }
    
        
    const VehiclesData = await response.json();
        dispatch ({type: 'getVehicles', payload: VehiclesData.results}); 
}

export const fetchPlanets = async (dispatch) => { 
    const response = await fetch('https://www.swapi.tech/api/planets',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok) {
            throw new Error('Failed to fetch planets data');
        }  
    const PlanetsData = await response.json();
    console.log(PlanetsData)
        dispatch ({type: 'getPlanets', payload: PlanetsData.results}); 
}

export const fetchFilms = async (dispatch) => { 
    const response = await fetch('https://www.swapi.tech/api/films',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        if(!response.ok) {
            throw new Error('Failed to fetch films data');
        }
        
    const FilmsData = await response.json();
    console.log(FilmsData)
        dispatch ({type: 'getFilms', payload: FilmsData.result}); 
}