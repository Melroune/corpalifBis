import { SUBCATEGORY_DISPATCH } from "../actions/category";

const initialState = {
  subCategory: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBCATEGORY_DISPATCH:
      return {
        ...state,
        subCategory: action.payload
      };

    default:
      return state;
  }
};
