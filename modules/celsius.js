export function celsiusToFahrenheit(){
    let celsius = prompt("Введите температуру по цельсию");
    celsius = Number(celsius);
    const fahrenheit = celsius * 1.8 + 32;
alert("Тумпература по фаренгейту =" + fahrenheit);
}