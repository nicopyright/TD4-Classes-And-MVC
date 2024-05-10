import { View } from "./../views/view.js";
import { Counter } from "./../models/counter.js";
import {Controller} from "./../controllers/controller.js";
const counterInst = new Counter();
console.log(counterInst.number);

const controllerInst = new Controller();
const viewInst = new View(controllerInst);