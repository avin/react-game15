import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';

export class WinBar extends React.Component {
    render() {
        const { isWon } = this.props;

        return <div className={styles.bar}>{isWon ? <span>YOU WON!!!</span> : <span>&nbsp;</span>}</div>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isWon: state.data.get('isWon'),
    };
}

export default connect(mapStateToProps, {})(WinBar);
