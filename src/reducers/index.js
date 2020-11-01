import { combineReducers } from 'redux';
import { selectedReducer } from './selectedReducer';
import { countReducer } from './countReducer';

export const rootReducer = combineReducers({
    selectedReducer,
    countReducer
})
