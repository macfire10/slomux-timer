import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from './slomux'
import Timer from './Timer';
import { store } from './Timer/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Timer />
    </Provider>,
    document.getElementById('root')
)
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
