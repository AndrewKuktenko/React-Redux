import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'
import { AppContainer } from 'react-hot-loader';

const store = configureStore()

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <div className="app">
                    <Component />
                </div>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const App = require('./containers/App').default;
        render(App)
    })
}