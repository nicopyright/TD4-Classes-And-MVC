import {Counter} from "../models/counter.js";
import {Notifier} from "../pattern/notifier.js";

export class Controller extends Notifier
{

    #counter;

    constructor()
    {
        super();
        this.#counter = new Counter();
    }
    getCounterValue()
    {
        return this.#counter.number;
    }
    incrementCounter()
    {
        this.#counter.incrementValue();
        this.notify();
    }
    decrementCounter()
    {
        this.#counter.decrementValue();
        this.notify();
    }
}
