import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {AppContainer} from 'react-hot-loader'

ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
    })
}