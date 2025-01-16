import { SHOW_OVERLAY, HIDE_OVERLAY } from "../actionTypes";

const initialState = {
  isVisible: false,
};

const overlay = (state = initialState, actions) => {
  switch (actions.type){
    case SHOW_OVERLAY:
      return { ...state, isVisible: true }

    case HIDE_OVERLAY:
      return { ...state, isVisible: false }

    default:
      return state;
  }
}

export default overlay;