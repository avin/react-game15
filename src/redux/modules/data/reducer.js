import * as Immutable from 'immutable';
import { SET_CHIPS, SET_IS_WON } from './actionTypes';

const initialState = new Immutable.Map({
    positions: [],
    isWon: false,
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_CHIPS: {
            const { chips } = action;
            return state.set('chips', chips);
        }
        case SET_IS_WON: {
            const { value } = action;
            return state.set('isWon', value);
        }

        default:
            return state;
    }
}
