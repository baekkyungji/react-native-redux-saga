import {COUNTER_CHANGE, COUNTER_RESET, DECREMENT, INCREMENT} from '../constants';

const INITIAL_STATE = {
  count: 0,
};

const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
    case COUNTER_RESET:
      return {
        ...state,
        count: action.payload,
      };
    case INCREMENT:
      return {
        ...state,
        count: action.payload + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload - 1,
      };
    case 'GET_NEWS':
      return {
        ...state,
        loading: true
      };
    case 'NEWS_RECEIVED':
      return {
        ...state,
        news: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default countReducer;
