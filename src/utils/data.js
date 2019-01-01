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

/**
 * Проверка что положение фишек позволяет пройти игру до конца
 * @param chips
 *
 * @description Алгоритм взят отсюда https://www.cs.bham.ac.uk/~mdr/teaching/modules04/java2/TilesSolvability.html
 */
// eslint-disable-next-line sonarjs/cognitive-complexity
export function checkGameIsSolvable(chips) {
    const puzzle = [];
    chips.forEach((position, value) => {
        if (!puzzle[position.get('y')]) {
            puzzle[position.get('y')] = [];
        }
        puzzle[position.get('y') * 4 + position.get('x')] = value;
    });

    let parity = 0;
    const gridWidth = Math.sqrt(puzzle.length);

    let row = 0; // the current row we are on
    let blankRow = 0; // the row with the blank tile

    for (let i = 0; i < puzzle.length; i += 1) {
        if (i % gridWidth === 0) {
            // advance to next row
            row += 1;
        }
        if (puzzle[i] === 0) {
            // the blank tile
            blankRow = row;
            // eslint-disable-next-line no-continue
            continue;
        }
        for (let j = i + 1; j < puzzle.length; j += 1) {
            if (puzzle[i] > puzzle[j] && puzzle[j] !== 0) {
                parity += 1;
            }
        }
    }

    if (gridWidth % 2 === 0) {
        if (blankRow % 2 === 0) {
            return parity % 2 === 0;
        }

        return parity % 2 !== 0;
    }

    return parity % 2 === 0;
}
