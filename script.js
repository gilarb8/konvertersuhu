function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function convertTemperature() {
  var inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
  var fromUnit = document.getElementById("fromUnit").value;

  var celsius, fahrenheit, kelvin;

  if (fromUnit === "celsius") {
    celsius = inputTemperature;
    fahrenheit = celsiusToFahrenheit(celsius);
    kelvin = celsiusToKelvin(celsius);
  } else if (fromUnit === "fahrenheit") {
    fahrenheit = inputTemperature;
    celsius = fahrenheitToCelsius(fahrenheit);
    kelvin = celsiusToKelvin(celsius);
  } else if (fromUnit === "kelvin") {
    kelvin = inputTemperature;
    celsius = kelvinToCelsius(kelvin);
    fahrenheit = celsiusToFahrenheit(celsius);
  }

  document.getElementById("celsiusOutput").innerHTML = celsius.toFixed(2);
  document.getElementById("fahrenheitOutput").innerHTML = fahrenheit.toFixed(2);
  document.getElementById("kelvinOutput").innerHTML = kelvin.toFixed(2);
}
