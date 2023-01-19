import {
  GET_CARD_LIST_REQUEST,
  GET_CARD_LIST_SUCCESS,
  GET_CARD_LIST_FAILURE,
} from "./index";
import axios from "axios";

export const fetchCardListRequest = (data) => {
  return {
    type: GET_CARD_LIST_REQUEST,
    payload: data,
  };
};

export const fetchCardListSuccess = (card) => {
  return {
    type: GET_CARD_LIST_SUCCESS,
    payload: card,
  };
};

export const fetchCardListFailure = (error) => {
  return {
    type: GET_CARD_LIST_FAILURE,
    payload: error,
  };
};

export const fetchCard = () => {
  return function (dispatch) {
    //when request happen
    dispatch(fetchCardListRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        const cardData = response.data;
        //when  request is successfull
        dispatch(fetchCardListSuccess(cardData));
      })
      .catch((error) => {
        //when request failed
        const errors = error.message;
        dispatch(fetchCardListFailure(errors));
      });
  };
};
