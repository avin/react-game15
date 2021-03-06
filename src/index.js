import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/store';
import Root from './components/Root/Root';
import './styles/index.scss';
import { shuffleChips } from './redux/modules/data/actions';
import * as serviceWorker from './serviceWorker';

// Инициализирует redux-store
const store = configureStore();

// Сразу гененрируем координаты фишек
store.dispatch(shuffleChips());

// Монтируем React контейнер на страницу
const target = document.querySelector('#root');
ReactDOM.render(<Root store={store} />, target);

if (module.hot) {
    module.hot.accept('./components/Root/Root', () => {
        ReactDOM.render(<Root store={store} />, target);
    });
}

serviceWorker.unregister();
