/**
 * @author WMXPY
 * @namespace Dice
 * @description Cup
 */

import { IDice } from "./declare";

export class DiceCup {

    public static create(dices: IDice[]): DiceCup {

        return new DiceCup([...dices]);
    }

    private readonly _dices: IDice[];

    private constructor(dices: IDice[]) {

        this._dices = dices;
    }
}
