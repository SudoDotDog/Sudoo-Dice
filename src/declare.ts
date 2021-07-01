/**
 * @author WMXPY
 * @namespace Dice
 * @description Declare
 */

export interface IDice {

    readonly current: number;
    roll(): number;
    clone(): IDice;
}
