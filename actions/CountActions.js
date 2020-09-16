import {COUNTER_CHANGE, COUNTER_RESET, INCREMENT} from '../constants';

export const changeCount = count => {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
};

export const resetCount = () => {
  return {
    type: COUNTER_RESET,
    payload: 0,
  };
};

export const increment = count => {
  return {
    type: INCREMENT,
    payload: count,
  };
};

export const getNews = () => ({
  type: 'GET_NEWS',
});
