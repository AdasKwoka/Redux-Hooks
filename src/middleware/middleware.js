import { ADD_RATE, EDIT_RATE } from "../actions/rateActions";

export const validationForm = store => next => action => {
  if(action.type === ADD_RATE) {
    if(!action.payload.author.length) {
      const auth = document.querySelector(".errA")
      auth.textContent = "Enter author name";
      setTimeout(() => auth.textContent = "", 3000);
      return;
    };
    if(!action.payload.comment.length) {
      const comm = document.querySelector(".errCF");
      comm.textContent = "Enter comment";
      setTimeout(() => comm.textContent = "", 3000);
      return;
    };
  } else if(action.type === EDIT_RATE) {
    if(!action.payload.comment.length) {
      return;
    };
  }
  next(action)
}