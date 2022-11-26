import { TypeEvaluator } from "./TypeEvaluator";

export class ArgbEvaluator extends TypeEvaluator {
  hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  constructor() {
    super();
  }

  hexToString(n) {
    let l = parseInt(n / 16);
    let r = n % 16;
    return this.hex[l] + this.hex[r];
  }

  evaluate(fraction, startValue, endValue) {
    let startInt = startValue;
    let startA = (startInt >> 24) & 0xff;
    let startR = (startInt >> 16) & 0xff;
    let startG = (startInt >> 8) & 0xff;
    let startB = startInt & 0xff;

    let endInt = endValue;
    let endA = (endInt >> 24) & 0xff;
    let endR = (endInt >> 16) & 0xff;
    let endG = (endInt >> 8) & 0xff;
    let endB = endInt & 0xff;
    return (
      this.hexToString(
        parseInt(startA + parseInt(fraction * (endA - startA)))
      ) +
      this.hexToString(
        parseInt(startR + parseInt(fraction * (endR - startR)))
      ) +
      this.hexToString(
        parseInt(startG + parseInt(fraction * (endG - startG)))
      ) +
      this.hexToString(parseInt(startB + parseInt(fraction * (endB - startB))))
    );
  }
}
