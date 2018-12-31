import * as Immutable from 'immutable';

export function generateWinChips() {
    let chips = Immutable.Map({});
    for (let i = 0; i < 16; i += 1) {
        chips = chips.set(i, new Immutable.Map({ x: i % 4, y: Math.floor(i / 4) }));
    }
    return chips;
}
