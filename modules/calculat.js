export function calculateFallDistance(){
    const time = prompt("Введите время падения в секундах");
    const distance = (1/2)*9.8*time^2;
alert("Расстояние которое пролетел объект=" + distance);
}