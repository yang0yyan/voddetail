import { BaseInterpolator } from "./BaseInterpolator";

export class CycleInterpolator extends BaseInterpolator {
  constructor(cycles) {
    super();
    this.mCycles = cycles;
  }

  getInterpolation(input) {
    return Math.sin(2 * this.mCycles * Math.PI * input);
  }
}
