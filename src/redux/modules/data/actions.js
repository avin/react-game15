import range from 'lodash/range';
import shuffle from 'lodash/shuffle';
import * as Immutable from 'immutable';
import { SET_CHIPS, SET_IS_WON } from './actionTypes';
import { generateWinChips } from '../../../utils/data';

/**
 * Выставить положения фишек
 * @param chips
 */
export function setChips(chips) {
    return {
        type: SET_CHIPS,
        chips,
    };
}

/**
 * Проверить не победа ли?
 * @param chips
 */
export function checkIsWon(chips) {
    let won = true;

    chips.forEach((position, value) => {
        if (won) {
            if (value !== 0) {
                const chipOnWinPlace = value === position.get('y') * 4 + position.get('x');
                won = won && chipOnWinPlace;
            }
        }
    });

    return won;
}

/**
 * Перемешать фишки
 */
export function shuffleChips() {
    return (dispatch, getState) => {
        const shuffleTask = () => {
            let chips = new Immutable.Map();

            let numbers = range(0, 16);
            numbers = shuffle(numbers);

            for (let y = 0; y < 4; y += 1) {
                for (let x = 0; x < 4; x += 1) {
                    const number = numbers.pop();
                    chips = chips.set(number, new Immutable.Map({ x, y }));
                }
            }

            return chips;
        };

        let chips;
        do {
            chips = shuffleTask();
        } while (checkIsWon(chips));

        dispatch(setChips(chips));
        dispatch(setIsWon(false));
    };
}

/**
 * Передвинуть фишку с номиналом
 * @param chipValue
 */
export function moveChip(chipValue) {
    return (dispatch, getState) => {
        let chips = getState().data.get('chips');

        const chipPosition = chips.get(chipValue);
        const nullPosition = chips.get(0);

        // Определяем соседствует ли фишка к пустой ячейкой
        if (
            (Math.abs(nullPosition.get('x') - chipPosition.get('x')) === 1 &&
                nullPosition.get('y') === chipPosition.get('y')) ||
            (Math.abs(nullPosition.get('y') - chipPosition.get('y')) === 1 &&
                nullPosition.get('x') === chipPosition.get('x'))
        ) {
            // Если это так - меняем положение фишки и пустой клетки
            chips = chips.set(0, chipPosition).set(chipValue, nullPosition);
            dispatch(setChips(chips));
        }

        // Определяем не завершилась ли игра победой?
        if (checkIsWon(chips)) {
            dispatch(setIsWon(true));
        }
    };
}

/**
 * Выставить флаг победы
 * @param value
 */
export function setIsWon(value) {
    return {
        type: SET_IS_WON,
        value,
    };
}

/**
 * Читерская функция генерирующая подебу
 * @returns {Function}
 */
export function makeWin() {
    return (dispatch, getState) => {
        const chips = generateWinChips();
        dispatch(setChips(chips));
        dispatch(setIsWon(true));
    };
}
