/**
 * @author WMXPY
 * @namespace Dice
 * @description Dice
 */

export class Dice {

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

        this.setCurrent(result);
        return result;
    }

    protected setCurrent(current: number): this {

        this._current = current;
        return this;
    }
}
