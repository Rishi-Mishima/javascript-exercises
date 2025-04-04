const convertToCelsius = function(Fahrenheit) {

  //x °C ≘ (x × ⁠9/5+ 32) °F

  //x °F ≘ (x − 32) × ⁠5/9°C

  let c = 0; 

  c= Math.round((Fahrenheit -32) *(5/9)*10)/10; 


  return c; 

};

const convertToFahrenheit = function(Celsius) {

  let f = 0; 
  f= Math.round((Celsius * 9 / 5 + 32)*10)/10; 
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
