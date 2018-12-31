import React from 'react';
import { connect } from 'react-redux';
import { makeWin, shuffleChips } from '../../../redux/modules/data/actions';
import styles from './styles.module.scss';

export class ControlPanel extends React.Component {
    handleShuffle = () => {
        const { shuffleChips } = this.props;
        shuffleChips();
    };

    handleMakeWin = e => {
        e.preventDefault();
        const { makeWin } = this.props;
        makeWin();
    };

    render() {
        return (
            <div className={styles.panel}>
                <button
                    onClick={this.handleShuffle}
                    onContextMenu={this.handleMakeWin}
                    className={styles.shuffleButton}
                >
                    Shuffle
                </button>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

export default connect(mapStateToProps, {
    shuffleChips,
    makeWin,
})(ControlPanel);
