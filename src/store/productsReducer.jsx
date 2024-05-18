

// action - state management
import {DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT} from './actions';

export const initialState = []

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const productsReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case ADD_PRODUCT:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        opened: action.opened
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        fontFamily: action.fontFamily
      };

    default:
      return state;
  }
};

export default customizationReducer;
