/**
 * @author WMXPY
 * @namespace Dice
 * @description Cup
 */

import { IDice } from "./declare";

export class DiceCup {

    public static create(dices: IDice[], initialRoll: boolean = true): DiceCup {

        return new DiceCup([...dices], initialRoll);
    }

    private readonly _dices: IDice[];

    private constructor(dices: IDice[], initialRoll: boolean) {

        this._dices = dices;

        if (initialRoll) {
            this.rollAll();
        }
    }

    public get length(): number {
        return this._dices.length;
    }

    public get dices(): IDice[] {
        return this._dices;
    }

    public currentSum(): number {

        return this._dices.reduce((previous: number, dice: IDice) => {
            return previous + dice.current;
        }, 0);
    }

    public rollAll(): this {

        this._dices.forEach((dice: IDice) => {
            dice.roll();
        });

        return this;
    }

    public clone(initialRoll: boolean = false): DiceCup {

        const newDices: IDice[] = this._dices.map((dice: IDice) => {
            return dice.clone();
        });

        const newCup: DiceCup = new DiceCup(newDices, initialRoll);
        return newCup;
    }
}
