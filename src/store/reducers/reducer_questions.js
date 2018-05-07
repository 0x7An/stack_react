import { GET_QUESTIONS } from '../actions/index';
// import _ from 'lodash';

export default function questionsReducer(state = {}, action){
    if (action.type === GET_QUESTIONS) {
      console.log('Action.payload.data received:', action.payload.data.questions);
    }

    switch (action.type){  
        case GET_QUESTIONS:
          return Object.assign(state, { questions: action.payload.data.questions} )
        default:
          return state;
        }
}
