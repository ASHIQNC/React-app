import {
  GET_CARD_LIST_REQUEST,
  GET_CARD_LIST_SUCCESS,
  GET_CARD_LIST_FAILURE,
} from "../action/index";

const initialState = {
  loading: false,
  card: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD_LIST_REQUEST:
      return {
        //copy of the state
        ...state,
        loading: true,
      };
    case GET_CARD_LIST_SUCCESS:
      return {
        loading: false,
        card: action.payload,
        error: "",
      };
    case GET_CARD_LIST_FAILURE:
      return {
        loading: false,
        card: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
