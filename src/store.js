export const initialStore=()=>{
  return{
    message: null,
    people: [],
    vehicles: [],
    planets: [],
    films : [],
    favorites: [],
    loading: false,
    error: null,

  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'getPeople':
      return {
        ...store,
        people: action.payload
      }
      case 'getVehicles':
        return {
          ...store,
          vehicles: action.payload
          }
      case 'getPlanets':
        return {
          ...store,
          planets: action.payload
      }
      case 'getFilms':
        return {
          ...store,
          films: action.payload
      }
      case 'addFavorite':
        if(!store.favorites.includes(action.payload)) {
          return {
            ...store,
            favorites: [...store.favorites, action.payload]
            }
        }
        return store;

      case 'removeFavorite':
        return {
          ...store,
          favorites: store.favorites.filter(item => item !== action.payload)
          }

    default:
      throw Error('Unknown action.');
  }    
}
