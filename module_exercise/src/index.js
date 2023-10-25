import {choice, remove} from './helpers.js';
import foods from "./foods.js"

let RANDOMFRUIT = choice(foods);
console.log(`I'd like ${RANDOMFRUIT} please!`)
console.log(`Here is one ${RANDOMFRUIT}`)
console.log('May I have another?')
remove(foods, RANDOMFRUIT);
console.log('sorry, all out. here is the rest of our fruit:', foods)