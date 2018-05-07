import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
import QuestionsReducer from './reducers/reducer_questions';

const state = {
    loading: false,
    questions: []
};

const store = applyMiddleware(ReduxPromise)(createStore);

export default store(QuestionsReducer, state);