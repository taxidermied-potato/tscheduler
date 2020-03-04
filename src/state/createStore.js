import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `ADD_COURSE`) {
    if (!state.courses.includes(action.item)) {
      return {
        ...state,
        courses: [...state.courses, action.item]
      }
    }
  }
  if (action.type === `REMOVE_COURSE`) {
    return {
      ...state,
      courses: state.courses.filter((course) => course.section_id !== action.item)
    }
  }
  return state
}

const initialState = {
  courses: []
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore