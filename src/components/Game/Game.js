import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ControlPanel from './ControlPanel/ControlPanel';
import Board from './Board/Board';
import styles from './styles.module.scss';

export class Game extends React.Component {
    render() {
        const { isWon } = this.props;
        return (
            <div className={classNames(styles.game, { [styles.winGame]: isWon })}>
                <Board />
                <ControlPanel />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isWon: state.data.get('isWon'),
    };
}

export default connect(
    mapStateToProps,
    {},
)(Game);
