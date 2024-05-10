
export class Counter
{

    #number;

    constructor()
    {
        this.#number = 0;
    }
    get number()
    {
        return this.#number;
    }
    incrementValue()
    {
        this.#number++;
    }
    decrementValue()
    {
        this.#number--;
    }
}
export const counterInst = new Counter();