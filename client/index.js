import './scss/style.scss';
import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';

const app = () => {
    render(
        <AppContainer>
            <BrowserRouter>
                <Route component={App}/>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('app')
    );
};
app();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', app);
}