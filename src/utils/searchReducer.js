import { actions } from "./actions";

const searchReducer = (state = '', action) => {

  switch (action.type) {
    case actions.setSearch:
      return action.payload
  
    default:
      return state
  }

}

export default searchReducer