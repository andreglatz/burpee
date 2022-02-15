import { config } from "../config";

enum Status {
  RUNNING,
  RESTING,
}

class Clock {
  private status: Status;
  private _time: number;

  constructor() {
    this.status = Status.RUNNING;
    this._time = config().RUNNING_TIME;
  }

  tick(): number {
    this._time--;

    if (this._time <= 0) {
      this.toggle();
    }

    return this._time;
  }

  private toggle() {
    if (this.isRunning) this.rest();
    else this.run();
  }

  private rest() {
    this.status = Status.RESTING;
    this._time = config().REST_TIME;
  }

  private run() {
    this.status = Status.RUNNING;
    this._time = config().RUNNING_TIME;
  }

  get isRunning(): boolean {
    return this.status == Status.RUNNING;
  }
}

const clock = new Clock();

export default clock;
