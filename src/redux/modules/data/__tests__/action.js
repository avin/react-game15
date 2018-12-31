import { checkIsWon } from '../actions';
import { generateWinChips } from '../../../../utils/data';

describe('checkIsWon', () => {
    test('isOk!', () => {
        let chips = generateWinChips();
        expect(checkIsWon(chips)).toBe(true);

        chips = generateWinChips(true);
        expect(checkIsWon(chips)).toBe(true);

        // Меняем местами фишки
        const pos5 = chips.get(5);
        const pos12 = chips.get(12);
        chips = chips.set(12, pos5).set(5, pos12);

        expect(checkIsWon(chips)).toBe(false);
    });
});
