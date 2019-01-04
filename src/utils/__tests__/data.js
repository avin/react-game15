import * as Immutable from 'immutable';
import { checkGameIsSolvable, generateWinChips } from '../data';

const arrToChipsMap = arr => {
    let chips = new Immutable.Map();
    arr.forEach((row, y) => {
        row.forEach((value, x) => {
            chips = chips.set(value, new Immutable.Map({ x, y }));
        });
    });
    return chips;
};

describe('checkGameIsSolvable', () => {
    test('check solvable', () => {
        // Делаем решаемое положение
        let chips = generateWinChips(true);
        const pos15 = chips.get(15);
        const pos0 = chips.get(0);
        chips = chips.set(0, pos15).set(15, pos0);

        expect(checkGameIsSolvable(chips)).toBe(true);
    });

    test('check not solvable classic', () => {
        // Делаем классическое нерешаемое положение
        const chips = arrToChipsMap([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 15, 14, 0]]);

        expect(checkGameIsSolvable(chips)).toBe(false);
    });

    test('check not solvable 1', () => {
        // Делаем нерешаемое положение (обыденный случай)

        const chips = arrToChipsMap([[3, 9, 1, 15], [14, 11, 4, 6], [13, 0, 10, 12], [2, 7, 8, 5]]);

        expect(checkGameIsSolvable(chips)).toBe(false);
    });
});
