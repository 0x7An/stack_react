import { GET_QUESTIONS } from '../actions/index';
// import _ from 'lodash';

export default function questionsReducer(state = {}, action){
    switch (action.type){  
        case GET_QUESTIONS:
          // The data from action is received here, and returned as new state
          // but the component stackquestions is not re rendering, maybe subscription problem
          return { ...state, questions: action.payload.data.questions }
        default:
          return state;
        }
}
