export function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return parseFloat(celsius.toFixed(2));
}
