import {Observer} from "../pattern/observer.js";

export class View extends Observer{
    #controller;
    constructor(controller) {
        super();
        this.#controller = controller;
        this.#controller.addObserver(this);
        const incrementButton = document.querySelector("#btn-increment");
        incrementButton.addEventListener("click",() => this.#controller.incrementCounter());
        const decrementButton = document.querySelector("#btn-decrement");
        decrementButton.addEventListener("click",() => this.#controller.decrementCounter());
    }
    notify() {
        const txt = document.querySelector("#txt-counter");
        txt.innerHTML = this.#controller.getCounterValue();
    }
}