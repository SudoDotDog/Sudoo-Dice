# Sudoo-Dice

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Dice/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Dice/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Dice/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Dice)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fdice.svg)](https://www.npmjs.com/package/@sudoo/dice)
[![downloads](https://img.shields.io/npm/dm/@sudoo/dice.svg)](https://www.npmjs.com/package/@sudoo/dice)

Dice for JS

## Install

```sh
yarn add @sudoo/dice
# Or
npm install @sudoo/dice --save
```

## Usage

Single dice

```ts
import { Dice } from "@sudoo/dice";

const cubeDice = Dice.cube();
cubeDice.roll(); // 1-6
```

Multiple Dices

```ts
import { Dice, DiceCup } from "@sudoo/dice";

const dices = DiceCup.create(
    Dice.cube(),
    Dice.cube(),
);
dices.rollAll().currentSum(); // 2-12
```
