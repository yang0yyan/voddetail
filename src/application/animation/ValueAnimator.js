import { LinearInterpolator } from "@/application/view/animation/LinearInterpolator";
import { IntEvaluator } from "./IntEvaluator";
import { PropertyValuesHolder } from "./PropertyValuesHolder";

export class ValueAnimator {
  mDuration = 0;
  timestamp = 0;
  mUpdateListeners = null;
  mInterpolator = new LinearInterpolator();
  mEvaluator = new IntEvaluator();

  mValues = []; // PropertyValuesHolder[] ---> IntPropertyValuesHolder
  mValuesMap; // HashMap<String, PropertyValuesHolder>

  framesDelay = Math.round(1000 / 60);

  constructor() {}

  static ofInt(values) {
    let anim = new ValueAnimator();
    anim.setIntValues(values);
    return anim;
  }

  setIntValues(values) {
    if (!values || !(values instanceof Array) || values.length == 0) return;
    // this.mValues = values;
    if (this.mValues == null || this.mValues.length == 0) {
      this.setValues(PropertyValuesHolder.ofInt("", values)); // IntPropertyValuesHolder
    } else {
      let valuesHolder = this.mValues[0]; // PropertyValuesHolder
      valuesHolder.setIntValues(values);
    }
  }
  /**
   * @param {PropertyValuesHolder...} values
   */
  setValues(values) {
    let numValues = values.length;
    this.mValues = values;
    this.mValuesMap = {}; // String, PropertyValuesHolder
    for (let i = 0; i < numValues; ++i) {
      let valuesHolder = values[i]; // PropertyValuesHolder
      this.mValuesMap.put(valuesHolder.getPropertyName(), valuesHolder);
    }
    // New property/values/target should cause re-initialization prior to starting
    // mInitialized = false;
  }

  setDuration(duration) {
    if (duration < 0) {
      return null;
    }
    this.mDuration = duration;
    return this;
  }

  setEvaluator(value) {
    // if (value) {
    //   this.mEvaluator = value;
    // }

    if (value != null && this.mValues != null && this.mValues.length > 0) {
      this.mValues[0].setEvaluator(value);
    }
  }

  setInterpolator(value) {
    if (value !== null) {
      this.mInterpolator = value;
    } else {
      this.mInterpolator = new LinearInterpolator();
    }
  }

  start() {
    this.timestamp = new Date().getTime();
    // this.timeFunc();
  }

  timeFunc() {
    let timeDelay = 33;

    let currentTimeMillis1 = new Date().getTime();
    // console.log(currentTimeMillis1);
    let delay = currentTimeMillis1 - this.timestamp;
    this.animateBasedOnPlayTime(delay);
    let currentTimeMillis2 = new Date().getTime();
    timeDelay =
      this.framesDelay - (currentTimeMillis2 - currentTimeMillis1) - 9;
    if (timeDelay < 0) timeDelay = 0;
    // console.log(timeDelay);
    if (delay < this.mDuration)
      setTimeout(() => {
        this.timeFunc();
      }, timeDelay);
  }

  animateBasedOnPlayTime(currentPlayTime) {
    let fraction = currentPlayTime / this.mDuration;
    // fraction = getCurrentIterationFraction(fraction, inReverse);
    this.animateValue(fraction);
  }

  animateValue(fraction) {
    fraction = this.mInterpolator.getInterpolation(fraction);
    let value = this.mEvaluator.evaluate(
      fraction,
      this.mValues[0],
      this.mValues[1]
    );
    if (this.mUpdateListeners !== null) this.mUpdateListeners(value);
  }

  addUpdateListener(listener) {
    this.mUpdateListeners = listener;
  }
}
