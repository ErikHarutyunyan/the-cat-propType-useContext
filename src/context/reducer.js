import {
  SET_CATEGORY,
  TAKE_ID,
  PAGE_CHANGE,
  DATA_CHANGE,
  DATA_RESET,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categoryData: [...state.categoryData, ...action.payload],
      };
    case TAKE_ID: {
      if (action.payload === state.catsId) {
        return { ...state };
      }
      return {
        ...state,
        catsId: action.payload,
        cats: [],
      };
    }
    case PAGE_CHANGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case DATA_CHANGE:
      return {
        ...state,
        cats: [...state.cats, ...action.payload],
      };
    case DATA_RESET:
      return {
        ...state,
        catsId: null,
        limit: 10,
        page: 1,
        cats: [],
      };
    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};
export default reducer;
