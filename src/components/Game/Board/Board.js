import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import Chip from './Chip/Chip';

export class Board extends React.Component {
    renderChips() {
        const { chips } = this.props;

        const results = [];

        chips.forEach((position, value) => {
            if (value !== 0) {
                results.push(<Chip key={value} value={value} x={position.get('x')} y={position.get('y')} />);
            }
        });

        return results;
    }

    render() {
        return <div className={styles.board}>{this.renderChips()}</div>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        chips: state.data.get('chips'),
    };
}

export default connect(mapStateToProps, {})(Board);
