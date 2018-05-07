import { GET_QUESTIONS } from '../actions/index';
// import _ from 'lodash';

export default function questionsReducer(state = {}, action){
    if (action.type === GET_QUESTIONS) {
      console.log('REDUCER Action.payload.data received:', action.payload.data.questions);
    }

    switch (action.type){  
        case GET_QUESTIONS:
          // The data from action is received here, and returned as new state
          // but the component stackquestions is not re rendering, maybe subscription problem
          return Object.assign(state, { questions: action.payload.data.questions} )
        default:
          return state;
        }
}