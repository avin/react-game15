import React from 'react';
import { Provider } from 'react-redux';
import Game from '../Game/Game';
import WinBar from '../WinBar/WinBar';
import GitHubLink from '../GitHubLink/GitHubLink';

export default class Root extends React.Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <div className="filler" />
                <WinBar />
                <Game />
                <div className="filler-2" />
                <GitHubLink />
            </Provider>
        );
    }
}
