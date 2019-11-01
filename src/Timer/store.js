import { createStore } from './../slomux';
import reducer from './reducer';

const initialState = {
    currentInterval: 0,
}

export const store = createStore(reducer, initialState);