import { actions } from "./actions";

const initState = {
  searchUser: '',
  idMessage: '',
  messages: [],
  user: ''
}

const searchReducer = (state = '', action) => {

  switch (action.type) {
    case actions.setSearch:
    return {
      ...state,
      searchUser: action.payload
    }

    case actions.setIdMessage:
      return {
        ...state,
        idMessage: action.payload
      }

    case actions.setIdMessage:
      return {
        ...state,
        idMessage: action.payload
      }
    
    case actions.setUser:
      return {
        ...state,
        user: `~@${action.payload}`
      }

    case actions.logout:
      return initState
  
    default:
      return state
  }

}

export default searchReducer