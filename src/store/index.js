import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
import QuestionsReducer from './reducers/reducer_questions';

const state = {
    parameters: {
        tag: 'javascript',
        sort: 'activity',
        score: 100,
        limit: 100,
        questions: []
    }
};

const store = applyMiddleware(ReduxPromise)(createStore);

export default store(QuestionsReducer, state);