/**
 * @author WMXPY
 * @namespace Dice
 * @description Dice
 */

import { IDice } from "./declare";

export class Dice implements IDice {

    public static faces(faces: number, initialRoll: boolean = true): Dice {

        return new Dice(1, faces, initialRoll);
    }

    public static minmax(min: number, max: number, initialRoll: boolean = true): Dice {

        return new Dice(min, max, initialRoll);
    }

    public static cube(initialRoll: boolean = true): Dice {

        return Dice.faces(6, initialRoll);
    }

    private readonly _min: number;
    private readonly _max: number;

    private _current: number;

    private constructor(min: number, max: number, initialRoll: boolean) {

        this._min = Math.floor(min);
        this._max = Math.floor(max);

        if (initialRoll) {
            this._current = this._getRollValue();
        } else {
            this._current = this._min;
        }
    }

    public get current(): number {
        return this._current;
    }

    public roll(): number {

        const result: number = this._getRollValue();
        this._setCurrent(result);
        return result;
    }

    public clone(initialRoll: boolean = false): Dice {

        const newDice: Dice = new Dice(this._min, this._max, false);

        if (initialRoll) {
            newDice.roll();
        } else {
            newDice._setCurrent(this._current);
        }
        return newDice;
    }

    protected _setCurrent(current: number): this {

        this._current = current;
        return this;
    }

    private _getRollValue(): number {

        const randomNumber: number = Math.random();
        const range: number = this._max - this._min;

        const extendValue: number = Math.floor(randomNumber * range);
        const result: number = extendValue + this._min;

        return result;
    }
}
