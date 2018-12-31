import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { moveChip } from '../../../../redux/modules/data/actions';

export class Chip extends React.Component {
    static propTypes = {
        value: PropTypes.number,
        x: PropTypes.number,
        y: PropTypes.number,
    };

    handleMoveChip = () => {
        const { moveChip, value } = this.props;
        moveChip(value);
    };

    render() {
        const { value, x, y } = this.props;
        return (
            <div className={styles.chip} style={{ left: 5 + x * 55, top: 5 + y * 55 }} onClick={this.handleMoveChip}>
                {value}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

export default connect(mapStateToProps, {
    moveChip,
})(Chip);
