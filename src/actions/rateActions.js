export const ADD_RATE = "ADD";
export const REMOVE_RATE = "REMOVE";
export const EDIT_RATE = "EDIT";
export const SELECT = "SELECT";

export const addRate = ({author, comment, rate, type}) => ({
  type: ADD_RATE,
  payload: {
    author,
    comment,
    id: Math.floor(Math.random() * 98765),
    rate,
    type
  }
})

export const removeRate = ({id}) => ({
  type: REMOVE_RATE,
  payload: {
    id,
  }
})

export const editRate = ({author, comment, id, rate, type}) => ({
  type: EDIT_RATE,
  payload: {
    author,   
    comment,
    id,
    rate,
    type,
  }
})

export const select = ({type}) => {
  return ({
  type: SELECT,
  payload: {
    type,
  }
})
}