class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    toFahrenheit() {
        return 9/5 * this.celsius + 32;
    }
    toKelvin() {
        return this.celsius + 273.15;
    }
}
let temperature = new Temperature(25);
let myFahrenheit = temperature.toFahrenheit();
let myKelvin = temperature.toKelvin();

document.write("Nhiệt độ K: " + myKelvin + "<br>"
    + "Nhiệt độ F: " + myFahrenheit);