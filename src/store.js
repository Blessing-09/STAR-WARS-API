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
        return {
          ...store,
          favourites: [...store.favourites, action.payload]
          }
      case 'removeFavorite':
        return {
          ...store,
          favourites: store.favourites.filter(item => item.id !== action.payload.id)
          }

    default:
      throw Error('Unknown action.');
  }    
}
