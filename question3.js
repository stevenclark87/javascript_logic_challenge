var rgbSelected = document.getElementById("process_rgb");
var hexSelected = document.getElementById("process_hex");
var rgbSection = document.getElementById("rgb_inputs");
var hexSection = document.getElementById("hex_input");
var processSelected = null;
var formSubmit = document.getElementById("formSubmit");
var conversionForm = document.getElementById("conversionForm");


rgbSelected.addEventListener("click", function() {
    rgbSection.classList.remove("hide");
    hexSection.classList.add("hide");
    processSelected = "RGB";
});

hexSelected.addEventListener("click", function() {
    hexSection.classList.remove("hide");
    rgbSection.classList.add("hide");
    processSelected = "hex";
});

formSubmit.addEventListener("click", function() {
    var conversionResults = document.getElementById("conversionResults");
    conversionForm.classList.add("hide");
    conversionResults.classList.remove("hide");
    conversionResults.innerHTML = conversionResult;

});

var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    console.log(hex);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

var rgbToHexCombined = function () {
    var rbg1Input = document.getElementById("rgb1input").value;
    var rbg2Input = document.getElementById("rgb2input").value;
    var rbg3Input = document.getElementById("rgb3input").value;
    var converted1 = rgbToHex(rbg1Input);
    var converted2 = rgbToHex(rbg2Input);
    var converted3 = rgbToHex(rbg3Input);
    var hexArray = [converted1,converted2,converted3]
    return `#${hexArray.join()}`
}

  var hextoRGB = function (hex) {
    var splitString = hex.split("");
    var swapLetters = [];
    splitString.forEach(element => {
        switch(element) {
            case "A":
                swapLetters.push(10);
              break;
            case "B":
                swapLetters.push(11);
              break;
            case "C":
                swapLetters.push(12);
              break;
            case "D":
                swapLetters.push(13);
              break;
            case "E":
                swapLetters.push(14);
              break;
            case "F":
                swapLetters.push(15);
              break;
            case "G":
                swapLetters.push(16);
              break;
            default:
                swapLetters.push(element);
          }
    });

    var rgb1 = (Number(swapLetters[0]) * 16) + Number(swapLetters[1]);
    var rgb2 = (Number(swapLetters[2]) * 16) + Number(swapLetters[3]);
    var rgb3 = (Number(swapLetters[4]) * 16) + Number(swapLetters[5]);
    
    return `${rgb1},${rgb2},${rgb3}`
}

var conversionResult = function () {
    var hexInput = document.getElementById("hexinput").value;
    if(processSelected === "RGB") {
        return hextoRGB(hexInput);
    } else {
        return rgbToHexCombined();
    }
};



  