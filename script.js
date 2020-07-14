const sliders = document.querySelectorAll('.slider');
const result = document.querySelector('.rgb-result');

let redNumber = '00';
let greenNumber = '00';
let blueNumber = '00';

let redRadius = 0;
let greenRadius = 0;
let blueRadius = 0;

// conversion of a rgb value to hexadecimal
var convertRGBToHex = function (rgbNumber) {
  var hex = Number(rgbNumber).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
};

for (let slider of sliders) {
  slider.addEventListener('input', function (event) {
    if (slider.id == 'red') {
      redNumber = convertRGBToHex(slider.value);
      redRadius = parseInt(slider.value);
    } else if (slider.id == 'green') {
      greenNumber = convertRGBToHex(slider.value);
      greenRadius = parseInt(slider.value);
    } else {
      blueNumber = convertRGBToHex(slider.value);
      blueRadius = parseInt(slider.value);
    }

    let radiusRGB = (redRadius + greenRadius + blueRadius) / (2 * 7.65);
    console.log(radiusRGB);
    let rgbResult = redNumber + greenNumber + blueNumber;
    result.style.backgroundColor = '#' + rgbResult;
    document.querySelector('.rgbHex').innerHTML = '#' + rgbResult;
    result.style.borderRadius = radiusRGB + '%';
  });
}
