import * as ActionTypes from '../../constants/Constants';

const INITIAL_STATE = {
  isLoading: true,
  errMess: null,
  answers: []
};

// Answers reducers
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ANSWERS_ADD:
      return { ...state, isLoading: false, errMess: null, answers: action.payload };

    case ActionTypes.ANSWERS_LOADING:
      return { ...state, isLoading: true, errMess: null, answers: [] };

    case ActionTypes.ANSWERS_LOADING_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
