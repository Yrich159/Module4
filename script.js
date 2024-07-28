let myName
myName = "Иван Норкин";
alert(myName);

import {greet} from "./modules/greet.js";
import {celsiusToFahrenheit} from "./modules/celsius.js";
import {calculateFallDistance} from "./modules/calculat.js";
import {calculateAverage} from "./modules/average.js";
import {concatStrings} from "./modules/concat.js";

greet();
celsiusToFahrenheit();
calculateFallDistance();
calculateAverage();
const year = concatStrings(prompt("Введите слово"),prompt("Введите слово"));
alert("Первое слово-" + year[0]);
alert("Второе слово-" + year[1]); 