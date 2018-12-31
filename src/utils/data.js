import * as Immutable from 'immutable';

/**
 * Сгенерировать набор фишек выйгрышной комбинации
 * @param isEmptyLast - пустая клетка последняя
 */
export function generateWinChips(isEmptyLast) {
    let chips = Immutable.Map({});
    if (isEmptyLast) {
        for (let i = 0; i < 15; i += 1) {
            chips = chips.set(i + 1, new Immutable.Map({ x: i % 4, y: Math.floor(i / 4) }));
        }
        chips = chips.set(0, new Immutable.Map({ x: 3, y: 3 }));
    } else {
        for (let i = 0; i < 16; i += 1) {
            chips = chips.set(i, new Immutable.Map({ x: i % 4, y: Math.floor(i / 4) }));
        }
    }

    return chips;
}
