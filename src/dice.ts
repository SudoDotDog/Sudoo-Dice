/**
 * @author WMXPY
 * @namespace Dice
 * @description Dice
 */

import { IDice } from "./declare";

export class Dice implements IDice {

    public static faces(faces: number): Dice {

        return new Dice(1, faces);
    }

    public static minmax(min: number, max: number): Dice {

        return new Dice(min, max);
    }

    public static cube(): Dice {

        return Dice.faces(6);
    }

    private readonly _min: number;
    private readonly _max: number;

    private _current: number;

    private constructor(min: number, max: number) {

        this._min = Math.floor(min);
        this._max = Math.floor(max);
    }

    public get current(): number {
        return this._current;
    }

    public roll(): number {

        const randomNumber: number = Math.random();
        const range: number = this._max - this._min;

        const extendValue: number = Math.floor(randomNumber * range);
        const result: number = extendValue + this._min;

        this._setCurrent(result);
        return result;
    }

    public clone(): Dice {

        return new Dice(this._min, this._max);
    }

    protected _setCurrent(current: number): this {

        this._current = current;
        return this;
    }
}
