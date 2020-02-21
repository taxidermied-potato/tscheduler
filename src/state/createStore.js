import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `ADD_COURSE`) {
    return {
      ...state,
      courses: [...state.courses, action.item]
    }
  }
  return state
}

const initialState = { courses: [] }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore