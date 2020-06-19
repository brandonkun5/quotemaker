var pic = document.getElementById('inpFile');
var canvas = document.getElementById('canvasOne');
var ctx = canvas.getContext('2d');
var canvasTwo = document.getElementById('canvasTwo');
var ctxTwo = canvasTwo.getContext('2d');
var canvasThree = document.getElementById('canvasThree');
var ctxThree = canvasThree.getContext('2d');
var canvasFour = document.getElementById('canvasFour');
var ctxFour = canvasFour.getContext('2d');
var canvasFive = document.getElementById('canvasFive');
var ctxFive = canvasFive.getContext('2d');
var canvasSix = document.getElementById('canvasSix');
var ctxSix = canvasSix.getContext('2d');
var canvasSeven = document.getElementById('canvasSeven');
var ctxSeven = canvasSeven.getContext('2d');
var canvasEight = document.getElementById('canvasEight');
var ctxEight = canvasEight.getContext('2d');
var canvasNine = document.getElementById('canvasNine');
var ctxNine = canvasNine.getContext('2d');
var canvasTen = document.getElementById('canvasTen');
var ctxTen = canvasTen.getContext('2d');
var quote = document.getElementById('uploadButton');
var quoteTwo = document.getElementById('uploadQuoteTwo');
var quoteThree = document.getElementById('uploadQuoteThree');
var quoteFour = document.getElementById('uploadQuoteFour');
var quoteFive = document.getElementById('uploadQuoteFive');
var quoteSix = document.getElementById('uploadQuoteSix');
var quoteSeven = document.getElementById('uploadQuoteSeven');
var quoteEight = document.getElementById('uploadQuoteEight');
var quoteNine = document.getElementById('uploadQuoteNine');
var quoteTen = document.getElementById('uploadQuoteTen');
var masterButton = document.getElementById('setAll');

function setAll() {
    var font = document.getElementById('font-family').value;
    $("#font-familyTwo").val(font);
    $("#font-familyThree").val(font);
    $("#font-familyFour").val(font);
    $("#font-familyFive").val(font);
    $("#font-familySix").val(font);
    $("#font-familySeven").val(font);
    $("#font-familyEight").val(font);
    $("#font-familyNine").val(font);
    $("#font-familyTen").val(font);
    var color = document.getElementById('colorOne').value;
    $("#colorTwo").val(color);
    $("#colorThree").val(color);
    $("#colorFour").val(color);
    $("#colorFive").val(color);
    $("#colorSix").val(color);
    $("#colorSeven").val(color);
    $("#colorEight").val(color);
    $("#colorNine").val(color);
    $("#colorTen").val(color);
    var size = document.getElementById('font-size').value;
    $("#font-sizeTwo").val(size);
    $("#font-sizeThree").val(size);
    $("#font-sizeFour").val(size);
    $("#font-sizeFive").val(size);
    $("#font-sizeSix").val(size);
    $("#font-sizeSeven").val(size);
    $("#font-sizeEight").val(size);
    $("#font-sizeNine").val(size);
    $("#font-sizeTen").val(size);
    var location = document.getElementById('location').value;
    $("#locationTwo").val(location);
    $("#locationThree").val(location);
    $("#locationFour").val(location);
    $("#locationFive").val(location);
    $("#locationSix").val(location);
    $("#locationSeven").val(location);
    $("#locationEight").val(location);
    $("#locationNine").val(location);
    $("#locationTen").val(location);
}

masterButton.addEventListener('click', setAll, false);


function draw() {
    var x = document.getElementById("quote").value;
    var y =  "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + document.getElementById('author').value;
    var colorInput = document.getElementById('colorOne');
    var color = colorInput.value;
    var out = document.getElementById('quoteOutput');
    var font = document.getElementById('font-family').value;
    var size = document.getElementById('font-size').value;
    var location = document.getElementById('location').value;
    var quoteOutput = document.getElementById('quoteOutput');
    quoteOutput.style.removeProperty('top');
    quoteOutput.style.removeProperty('bottom');
    quoteOutput.style.removeProperty('left');
    quoteOutput.style.removeProperty('right');
    $('h2#quoted').text(x);
    $('h2#authored').text(y);
    if (location === "TopL") {
        $('h2#quoted').css({
            'color': color,
            'font-family': font,
            'font-size': size + "px",
            'width': 400,
        })
        $('h2#authored').css({
            'color': color,
            'font-family': font,
            'font-size': size + "px",
            'width': 400,
        })
        $('div#quoteOutput').css({
            'position': 'absolute',
            'top': "20px",
            'left': "20px",
        })
    } else if (location === "TopR") {
        $('h2#quoted').css({
            'color': color,
            'font-family': font,
            'font-size': size + "px",
            'width': 400,
        })
        $('h2#authored').css({
            'color': color,
            'font-family': font,
            'font-size': size + "px",
            'width': 400,
        })
        $('div#quoteOutput').css({
            'position': 'absolute',
            'top': "20px",
            'right': "20px",
            'width': 400,
        })
    } else if (location === "BottomL") {
        $('h2#quoted').css({
            'color': color,
            'font-family': font,
            'font-size': size + "px",
            'width': 400,
        })
        $('h2#authored').css({
            'color': color,
            'font-family': font,
            'font-size': size + "px",
            'width': 400,
        })
        $('div#quoteOutput').css({
            'position': 'absolute',
            'bottom': "20px",
            'left': "20px",
            'width': 400,
        })
    } else {
        $('h2#quoted').css({
            'color': color,
            'font-family': font,
            'font-size': size + "px",
            'width': 400,
        })
        $('h2#authored').css({
            'color': color,
            'font-family': font,
            'font-size': size + "px",
            'width': 400,
        })
        $('div#quoteOutput').css({
            'position': 'absolute',
            'bottom': "20px",
            'right': "20px",
            'width': 400,
        })
    }
}

quote.addEventListener('click', draw, false);


function drawTwo() {
    var xTwo = document.getElementById("quoteTwo").value;
    var yTwo =  "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + document.getElementById('authorTwo').value;
    var colorInputTwo = document.getElementById('colorTwo');
    var colorTwo = document.getElementById('colorTwo').value;
    var outTwo = document.getElementById('quoteOutputTwo');
    var fontTwo = document.getElementById('font-familyTwo').value;
    var sizeTwo = document.getElementById('font-sizeTwo').value;
    var locationTwo = document.getElementById('locationTwo').value;
    var quoteOutputTwo = document.getElementById('quoteOutputTwo');
    quoteOutputTwo.style.removeProperty('top');
    quoteOutputTwo.style.removeProperty('bottom');
    quoteOutputTwo.style.removeProperty('left');
    quoteOutputTwo.style.removeProperty('right');
    $('h2#quotedTwo').text(xTwo);
    $('h2#authoredTwo').text(yTwo);
    if (locationTwo === "TopL") {
        $('h2#quotedTwo').css({
            'color': colorTwo,
            'font-family': fontTwo,
            'font-size': sizeTwo + "px",
            'width': 400,
        })
        $('h2#authoredTwo').css({
            'color': colorTwo,
            'font-family': fontTwo,
            'font-size': sizeTwo + "px",
            'width': 400,
        })
        $('div#quoteOutputTwo').css({
            'position': 'absolute',
            'top': "20px",
            'left': "20px",
        })
    } else if (locationTwo === "TopR") {
        $('h2#quotedTwo').css({
            'color': colorTwo,
            'font-family': fontTwo,
            'font-size': sizeTwo + "px",
            'width': 400,
        })
        $('h2#authoredTwo').css({
            'color': colorTwo,
            'font-family': fontTwo,
            'font-size': sizeTwo + "px",
            'width': 400,
        })
        $('div#quoteOutputTwo').css({
            'position': 'absolute',
            'top': "20px",
            'right': "20px",
            'width': 400,
        })
    } else if (locationTwo === "BottomL") {
        $('h2#quotedTwo').css({
            'color': colorTwo,
            'font-family': fontTwo,
            'font-size': sizeTwo + "px",
            'width': 400,
        })
        $('h2#authoredTwo').css({
            'color': colorTwo,
            'font-family': fontTwo,
            'font-size': sizeTwo + "px",
            'width': 400,
        })
        $('div#quoteOutputTwo').css({
            'position': 'absolute',
            'bottom': "20px",
            'left': "20px",
            'width': 400,
        })
    } else {
        $('h2#quotedTwo').css({
            'color': colorTwo,
            'font-family': fontTwo,
            'font-size': sizeTwo + "px",
            'width': 400,
        })
        $('h2#authoredTwo').css({
            'color': colorTwo,
            'font-family': fontTwo,
            'font-size': sizeTwo + "px",
            'width': 400,
        })
        $('div#quoteOutputTwo').css({
            'position': 'absolute',
            'bottom': "20px",
            'right': "20px",
            'width': 400,
        })
    }
}

quote.addEventListener('click', drawTwo, false);


function drawThree() {
    var xThree = document.getElementById("quoteThree").value;
    var yThree =  "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + document.getElementById('authorThree').value;
    var colorInputThree = document.getElementById('colorThree');
    var colorThree = colorInputThree.value;
    var outThree = document.getElementById('quoteOutputThree');
    var fontThree = document.getElementById('font-familyThree').value;
    var sizeThree = document.getElementById('font-sizeThree').value;
    var locationThree = document.getElementById('locationThree').value;
    var quoteOutputThree = document.getElementById('quoteOutputThree');
    quoteOutputThree.style.removeProperty('top');
    quoteOutputThree.style.removeProperty('bottom');
    quoteOutputThree.style.removeProperty('left');
    quoteOutputThree.style.removeProperty('right');
    $('h2#quotedThree').text(xThree);
    $('h2#authoredThree').text(yThree);
    if (locationThree === "TopL") {
        $('h2#quotedThree').css({
            'color': colorThree,
            'font-family': fontThree,
            'font-size': sizeThree + "px",
            'width': 400,
        })
        $('h2#authoredThree').css({
            'color': colorThree,
            'font-family': fontThree,
            'font-size': sizeThree + "px",
            'width': 400,
        })
        $('div#quoteOutputThree').css({
            'position': 'absolute',
            'top': "20px",
            'left': "20px",
        })
    } else if (locationThree === "TopR") {
        $('h2#quotedThree').css({
            'color': colorThree,
            'font-family': fontThree,
            'font-size': sizeThree + "px",
            'width': 400,
        })
        $('h2#authoredThree').css({
            'color': colorThree,
            'font-family': fontThree,
            'font-size': sizeThree + "px",
            'width': 400,
        })
        $('div#quoteOutputThree').css({
            'position': 'absolute',
            'top': "20px",
            'right': "20px",
            'width': 400,
        })
    } else if (locationThree === "BottomL") {
        $('h2#quotedThree').css({
            'color': colorThree,
            'font-family': fontThree,
            'font-size': sizeThree + "px",
            'width': 400,
        })
        $('h2#authoredThree').css({
            'color': colorThree,
            'font-family': fontThree,
            'font-size': sizeThree + "px",
            'width': 400,
        })
        $('div#quoteOutputThree').css({
            'position': 'absolute',
            'bottom': "20px",
            'left': "20px",
            'width': 400,
        })
    } else {
        $('h2#quotedThree').css({
            'color': colorThree,
            'font-family': fontThree,
            'font-size': sizeThree + "px",
            'width': 400,
        })
        $('h2#authoredThree').css({
            'color': colorThree,
            'font-family': fontThree,
            'font-size': sizeThree + "px",
            'width': 400,
        })
        $('div#quoteOutputThree').css({
            'position': 'absolute',
            'bottom': "20px",
            'right': "20px",
            'width': 400,
        })
    }
}

quote.addEventListener('click', drawThree, false);


function drawFour() {
    var xFour = document.getElementById("quoteFour").value;
    var yFour =  "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + document.getElementById('authorFour').value;
    var colorInputFour = document.getElementById('colorFour');
    var colorFour = colorInputFour.value;
    var outFour = document.getElementById('quoteOutputFour');
    var fontFour = document.getElementById('font-familyFour').value;
    var sizeFour = document.getElementById('font-sizeFour').value;
    var locationFour = document.getElementById('locationFour').value;
    var quoteOutputFour = document.getElementById('quoteOutputFour');
    quoteOutputFour.style.removeProperty('top');
    quoteOutputFour.style.removeProperty('bottom');
    quoteOutputFour.style.removeProperty('left');
    quoteOutputFour.style.removeProperty('right');
    $('h2#quotedFour').text(xFour);
    $('h2#authoredFour').text(yFour);
    if (locationFour === "TopL") {
        $('h2#quotedFour').css({
            'color': colorFour,
            'font-family': fontFour,
            'font-size': sizeFour + "px",
            'width': 400,
        })
        $('h2#authoredFour').css({
            'color': colorFour,
            'font-family': fontFour,
            'font-size': sizeFour + "px",
            'width': 400,
        })
        $('div#quoteOutputFour').css({
            'position': 'absolute',
            'top': "20px",
            'left': "20px",
        })
    } else if (locationFour === "TopR") {
        $('h2#quotedFour').css({
            'color': colorFour,
            'font-family': fontFour,
            'font-size': sizeFour + "px",
            'width': 400,
        })
        $('h2#authoredFour').css({
            'color': colorFour,
            'font-family': fontFour,
            'font-size': sizeFour + "px",
            'width': 400,
        })
        $('div#quoteOutputFour').css({
            'position': 'absolute',
            'top': "20px",
            'right': "20px",
            'width': 400,
        })
    } else if (locationFour === "BottomL") {
        $('h2#quotedFour').css({
            'color': colorFour,
            'font-family': fontFour,
            'font-size': sizeFour + "px",
            'width': 400,
        })
        $('h2#authoredFour').css({
            'color': colorFour,
            'font-family': fontFour,
            'font-size': sizeFour + "px",
            'width': 400,
        })
        $('div#quoteOutputFour').css({
            'position': 'absolute',
            'bottom': "20px",
            'left': "20px",
            'width': 400,
        })
    } else {
        $('h2#quotedFour').css({
            'color': colorFour,
            'font-family': fontFour,
            'font-size': sizeFour + "px",
            'width': 400,
        })
        $('h2#authoredFour').css({
            'color': colorFour,
            'font-family': fontFour,
            'font-size': sizeFour + "px",
            'width': 400,
        })
        $('div#quoteOutputFour').css({
            'position': 'absolute',
            'bottom': "20px",
            'right': "20px",
            'width': 400,
        })
    }
}

quote.addEventListener('click', drawFour, false);

function drawFive() {
    var xFive = document.getElementById("quoteFive").value;
    var yFive =  "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + document.getElementById('authorFive').value;
    var colorInputFive = document.getElementById('colorFive');
    var colorFive = colorInputFive.value;
    var outFive = document.getElementById('quoteOutputFive');
    var fontFive = document.getElementById('font-familyFive').value;
    var sizeFive = document.getElementById('font-sizeFive').value;
    var locationFive = document.getElementById('locationFive').value;
    var quoteOutputFive = document.getElementById('quoteOutputFive');
    quoteOutputFive.style.removeProperty('top');
    quoteOutputFive.style.removeProperty('bottom');
    quoteOutputFive.style.removeProperty('left');
    quoteOutputFive.style.removeProperty('right');
    $('h2#quotedFive').text(xFive);
    $('h2#authoredFive').text(yFive);
    if (locationFive === "TopL") {
        $('h2#quotedFive').css({
            'color': colorFive,
            'font-family': fontFive,
            'font-size': sizeFive + "px",
            'width': 400,
        })
        $('h2#authoredFive').css({
            'color': colorFive,
            'font-family': fontFive,
            'font-size': sizeFive + "px",
            'width': 400,
        })
        $('div#quoteOutputFive').css({
            'position': 'absolute',
            'top': "20px",
            'left': "20px",
        })
    } else if (locationFive === "TopR") {
        $('h2#quotedFive').css({
            'color': colorFive,
            'font-family': fontFive,
            'font-size': sizeFive + "px",
            'width': 400,
        })
        $('h2#authoredFive').css({
            'color': colorFive,
            'font-family': fontFive,
            'font-size': sizeFive + "px",
            'width': 400,
        })
        $('div#quoteOutputFive').css({
            'position': 'absolute',
            'top': "20px",
            'right': "20px",
            'width': 400,
        })
    } else if (locationFive === "BottomL") {
        $('h2#quotedFive').css({
            'color': colorFive,
            'font-family': fontFive,
            'font-size': sizeFive + "px",
            'width': 400,
        })
        $('h2#authoredFive').css({
            'color': colorFive,
            'font-family': fontFive,
            'font-size': sizeFive + "px",
            'width': 400,
        })
        $('div#quoteOutputFive').css({
            'position': 'absolute',
            'bottom': "20px",
            'left': "20px",
            'width': 400,
        })
    } else {
        $('h2#quotedFive').css({
            'color': colorFive,
            'font-family': fontFive,
            'font-size': sizeFive + "px",
            'width': 400,
        })
        $('h2#authoredFive').css({
            'color': colorFive,
            'font-family': fontFive,
            'font-size': sizeFive + "px",
            'width': 400,
        })
        $('div#quoteOutputFive').css({
            'position': 'absolute',
            'bottom': "20px",
            'right': "20px",
            'width': 400,
        })
    }
}

quote.addEventListener('click', drawFive, false);


function drawSix() {
    var xSix = document.getElementById("quoteSix").value;
    var ySix =  "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + document.getElementById('authorSix').value;
    var colorInputSix = document.getElementById('colorSix');
    var colorSix = colorInputSix.value;
    var outSix = document.getElementById('quoteOutputSix');
    var fontSix = document.getElementById('font-familySix').value;
    var sizeSix = document.getElementById('font-sizeSix').value;
    var locationSix = document.getElementById('locationSix').value;
    var quoteOutputSix = document.getElementById('quoteOutputSix');
    quoteOutputSix.style.removeProperty('top');
    quoteOutputSix.style.removeProperty('bottom');
    quoteOutputSix.style.removeProperty('left');
    quoteOutputSix.style.removeProperty('right');
    $('h2#quotedSix').text(xSix);
    $('h2#authoredSix').text(ySix);
    if (locationSix === "TopL") {
        $('h2#quotedSix').css({
            'color': colorSix,
            'font-family': fontSix,
            'font-size': sizeSix + "px",
            'width': 400,
        })
        $('h2#authoredSix').css({
            'color': colorSix,
            'font-family': fontSix,
            'font-size': sizeSix + "px",
            'width': 400,
        })
        $('div#quoteOutputSix').css({
            'position': 'absolute',
            'top': "20px",
            'left': "20px",
        })
    } else if (locationSix === "TopR") {
        $('h2#quotedSix').css({
            'color': colorSix,
            'font-family': fontSix,
            'font-size': sizeSix + "px",
            'width': 400,
        })
        $('h2#authoredSix').css({
            'color': colorSix,
            'font-family': fontSix,
            'font-size': sizeSix + "px",
            'width': 400,
        })
        $('div#quoteOutputSix').css({
            'position': 'absolute',
            'top': "20px",
            'right': "20px",
            'width': 400,
        })
    } else if (locationSix === "BottomL") {
        $('h2#quotedSix').css({
            'color': colorSix,
            'font-family': fontSix,
            'font-size': sizeSix + "px",
            'width': 400,
        })
        $('h2#authoredSix').css({
            'color': colorSix,
            'font-family': fontSix,
            'font-size': sizeSix + "px",
            'width': 400,
        })
        $('div#quoteOutputSix').css({
            'position': 'absolute',
            'bottom': "20px",
            'left': "20px",
            'width': 400,
        })
    } else {
        $('h2#quotedSix').css({
            'color': colorSix,
            'font-family': fontSix,
            'font-size': sizeSix + "px",
            'width': 400,
        })
        $('h2#authoredSix').css({
            'color': colorSix,
            'font-family': fontSix,
            'font-size': sizeSix + "px",
            'width': 400,
        })
        $('div#quoteOutputSix').css({
            'position': 'absolute',
            'bottom': "20px",
            'right': "20px",
            'width': 400,
        })
    }
}

quote.addEventListener('click', drawSix, false);


function drawSeven() {
    var xSeven = document.getElementById("quoteSeven").value;
    var ySeven =  "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + document.getElementById('authorSeven').value;
    var colorInputSeven = document.getElementById('colorSeven');
    var colorSeven = colorInputSeven.value;
    var outSeven = document.getElementById('quoteOutputSeven');
    var fontSeven = document.getElementById('font-familySeven').value;
    var sizeSeven = document.getElementById('font-sizeSeven').value;
    var locationSeven = document.getElementById('locationSeven').value;
    var quoteOutputSeven = document.getElementById('quoteOutputSeven');
    quoteOutputSeven.style.removeProperty('top');
    quoteOutputSeven.style.removeProperty('bottom');
    quoteOutputSeven.style.removeProperty('left');
    quoteOutputSeven.style.removeProperty('right');
    $('h2#quotedSeven').text(xSeven);
    $('h2#authoredSeven').text(ySeven);
    if (locationSeven === "TopL") {
        $('h2#quotedSeven').css({
            'color': colorSeven,
            'font-family': fontSeven,
            'font-size': sizeSeven + "px",
            'width': 400,
        })
        $('h2#authoredSeven').css({
            'color': colorSeven,
            'font-family': fontSeven,
            'font-size': sizeSeven + "px",
            'width': 400,
        })
        $('div#quoteOutputSeven').css({
            'position': 'absolute',
            'top': "20px",
            'left': "20px",
        })
    } else if (locationSeven === "TopR") {
        $('h2#quotedSeven').css({
            'color': colorSeven,
            'font-family': fontSeven,
            'font-size': sizeSeven + "px",
            'width': 400,
        })
        $('h2#authoredSeven').css({
            'color': colorSeven,
            'font-family': fontSeven,
            'font-size': sizeSeven + "px",
            'width': 400,
        })
        $('div#quoteOutputSeven').css({
            'position': 'absolute',
            'top': "20px",
            'right': "20px",
            'width': 400,
        })
    } else if (locationSeven === "BottomL") {
        $('h2#quotedSeven').css({
            'color': colorSeven,
            'font-family': fontSeven,
            'font-size': sizeSeven + "px",
            'width': 400,
        })
        $('h2#authoredSeven').css({
            'color': colorSeven,
            'font-family': fontSeven,
            'font-size': sizeSeven + "px",
            'width': 400,
        })
        $('div#quoteOutputSeven').css({
            'position': 'absolute',
            'bottom': "20px",
            'left': "20px",
            'width': 400,
        })
    } else {
        $('h2#quotedSeven').css({
            'color': colorSeven,
            'font-family': fontSeven,
            'font-size': sizeSeven + "px",
            'width': 400,
        })
        $('h2#authoredSeven').css({
            'color': colorSeven,
            'font-family': fontSeven,
            'font-size': sizeSeven + "px",
            'width': 400,
        })
        $('div#quoteOutputSeven').css({
            'position': 'absolute',
            'bottom': "20px",
            'right': "20px",
            'width': 400,
        })
    }
}

quote.addEventListener('click', drawSeven, false);


function drawEight() {
    var xEight = document.getElementById("quoteEight").value;
    var yEight =  "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + document.getElementById('authorEight').value;
    var colorInputEight = document.getElementById('colorEight');
    var colorEight = colorInputEight.value;
    var outEight = document.getElementById('quoteOutputEight');
    var fontEight = document.getElementById('font-familyEight').value;
    var sizeEight = document.getElementById('font-sizeEight').value;
    var locationEight = document.getElementById('locationEight').value;
    var quoteOutputEight = document.getElementById('quoteOutputEight');
    quoteOutputEight.style.removeProperty('top');
    quoteOutputEight.style.removeProperty('bottom');
    quoteOutputEight.style.removeProperty('left');
    quoteOutputEight.style.removeProperty('right');
    $('h2#quotedEight').text(xEight);
    $('h2#authoredEight').text(yEight);
    if (locationEight === "TopL") {
        $('h2#quotedEight').css({
            'color': colorEight,
            'font-family': fontEight,
            'font-size': sizeEight + "px",
            'width': 400,
        })
        $('h2#authoredEight').css({
            'color': colorEight,
            'font-family': fontEight,
            'font-size': sizeEight + "px",
            'width': 400,
        })
        $('div#quoteOutputEight').css({
            'position': 'absolute',
            'top': "20px",
            'left': "20px",
        })
    } else if (locationEight === "TopR") {
        $('h2#quotedEight').css({
            'color': colorEight,
            'font-family': fontEight,
            'font-size': sizeEight + "px",
            'width': 400,
        })
        $('h2#authoredEight').css({
            'color': colorEight,
            'font-family': fontEight,
            'font-size': sizeEight + "px",
            'width': 400,
        })
        $('div#quoteOutputEight').css({
            'position': 'absolute',
            'top': "20px",
            'right': "20px",
            'width': 400,
        })
    } else if (locationEight === "BottomL") {
        $('h2#quotedEight').css({
            'color': colorEight,
            'font-family': fontEight,
            'font-size': sizeEight + "px",
            'width': 400,
        })
        $('h2#authoredEight').css({
            'color': colorEight,
            'font-family': fontEight,
            'font-size': sizeEight + "px",
            'width': 400,
        })
        $('div#quoteOutputEight').css({
            'position': 'absolute',
            'bottom': "20px",
            'left': "20px",
            'width': 400,
        })
    } else {
        $('h2#quotedEight').css({
            'color': colorEight,
            'font-family': fontEight,
            'font-size': sizeEight + "px",
            'width': 400,
        })
        $('h2#authoredEight').css({
            'color': colorEight,
            'font-family': fontEight,
            'font-size': sizeEight + "px",
            'width': 400,
        })
        $('div#quoteOutputEight').css({
            'position': 'absolute',
            'bottom': "20px",
            'right': "20px",
            'width': 400,
        })
    }
}

quote.addEventListener('click', drawEight, false);


function drawNine() {
    var xNine = document.getElementById("quoteNine").value;
    var yNine =  "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + document.getElementById('authorNine').value;
    var colorInputNine = document.getElementById('colorNine');
    var colorNine = colorInputNine.value;
    var outNine = document.getElementById('quoteOutputNine');
    var fontNine = document.getElementById('font-familyNine').value;
    var sizeNine = document.getElementById('font-sizeNine').value;
    var locationNine = document.getElementById('locationNine').value;
    var quoteOutputNine = document.getElementById('quoteOutputNine');
    quoteOutputNine.style.removeProperty('top');
    quoteOutputNine.style.removeProperty('bottom');
    quoteOutputNine.style.removeProperty('left');
    quoteOutputNine.style.removeProperty('right');
    $('h2#quotedNine').text(xNine);
    $('h2#authoredNine').text(yNine);
    if (locationNine === "TopL") {
        $('h2#quotedNine').css({
            'color': colorNine,
            'font-family': fontNine,
            'font-size': sizeNine + "px",
            'width': 400,
        })
        $('h2#authoredNine').css({
            'color': colorNine,
            'font-family': fontNine,
            'font-size': sizeNine + "px",
            'width': 400,
        })
        $('div#quoteOutputNine').css({
            'position': 'absolute',
            'top': "20px",
            'left': "20px",
        })
    } else if (locationNine === "TopR") {
        $('h2#quotedNine').css({
            'color': colorNine,
            'font-family': fontNine,
            'font-size': sizeNine + "px",
            'width': 400,
        })
        $('h2#authoredNine').css({
            'color': colorNine,
            'font-family': fontNine,
            'font-size': sizeNine + "px",
            'width': 400,
        })
        $('div#quoteOutputNine').css({
            'position': 'absolute',
            'top': "20px",
            'right': "20px",
            'width': 400,
        })
    } else if (locationNine === "BottomL") {
        $('h2#quotedNine').css({
            'color': colorNine,
            'font-family': fontNine,
            'font-size': sizeNine + "px",
            'width': 400,
        })
        $('h2#authoredNine').css({
            'color': colorNine,
            'font-family': fontNine,
            'font-size': sizeNine + "px",
            'width': 400,
        })
        $('div#quoteOutputNine').css({
            'position': 'absolute',
            'bottom': "20px",
            'left': "20px",
            'width': 400,
        })
    } else {
        $('h2#quotedNine').css({
            'color': colorNine,
            'font-family': fontNine,
            'font-size': sizeNine + "px",
            'width': 400,
        })
        $('h2#authoredNine').css({
            'color': colorNine,
            'font-family': fontNine,
            'font-size': sizeNine + "px",
            'width': 400,
        })
        $('div#quoteOutputNine').css({
            'position': 'absolute',
            'bottom': "20px",
            'right': "20px",
            'width': 400,
        })
    }
}

quote.addEventListener('click', drawNine, false);


function drawTen() {
    var xTen = document.getElementById("quoteTen").value;
    var yTen =  "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + document.getElementById('authorTen').value;
    var colorInputTen = document.getElementById('colorTen');
    var colorTen = colorInputTen.value;
    var outTen = document.getElementById('quoteOutputTen');
    var fontTen = document.getElementById('font-familyTen').value;
    var sizeTen = document.getElementById('font-sizeTen').value;
    var locationTen = document.getElementById('locationTen').value;
    var quoteOutputTen = document.getElementById('quoteOutputTen');
    quoteOutputTen.style.removeProperty('top');
    quoteOutputTen.style.removeProperty('bottom');
    quoteOutputTen.style.removeProperty('left');
    quoteOutputTen.style.removeProperty('right');
    $('h2#quotedTen').text(xTen);
    $('h2#authoredTen').text(yTen);
    if (locationTen === "TopL") {
        $('h2#quotedTen').css({
            'color': colorTen,
            'font-family': fontTen,
            'font-size': sizeTen + "px",
            'width': 400,
        })
        $('h2#authoredTen').css({
            'color': colorTen,
            'font-family': fontTen,
            'font-size': sizeTen + "px",
            'width': 400,
        })
        $('div#quoteOutputTen').css({
            'position': 'absolute',
            'top': "20px",
            'left': "20px",
        })
    } else if (locationTen === "TopR") {
        $('h2#quotedTen').css({
            'color': colorTen,
            'font-family': fontTen,
            'font-size': sizeTen + "px",
            'width': 400,
        })
        $('h2#authoredTen').css({
            'color': colorTen,
            'font-family': fontTen,
            'font-size': sizeTen + "px",
            'width': 400,
        })
        $('div#quoteOutputTen').css({
            'position': 'absolute',
            'top': "20px",
            'right': "20px",
            'width': 400,
        })
    } else if (locationTen === "BottomL") {
        $('h2#quotedTen').css({
            'color': colorTen,
            'font-family': fontTen,
            'font-size': sizeTen + "px",
            'width': 400,
        })
        $('h2#authoredTen').css({
            'color': colorTen,
            'font-family': fontTen,
            'font-size': sizeTen + "px",
            'width': 400,
        })
        $('div#quoteOutputTen').css({
            'position': 'absolute',
            'bottom': "20px",
            'left': "20px",
            'width': 400,
        })
    } else {
        $('h2#quotedTen').css({
            'color': colorTen,
            'font-family': fontTen,
            'font-size': sizeTen + "px",
            'width': 400,
        })
        $('h2#authoredTen').css({
            'color': colorTen,
            'font-family': fontTen,
            'font-size': sizeTen + "px",
            'width': 400,
        })
        $('div#quoteOutputTen').css({
            'position': 'absolute',
            'bottom': "20px",
            'right': "20px",
            'width': 400,
        })
    }
}

quote.addEventListener('click', drawTen, false);

function uploadPic(e) {
    var reader = new FileReader();
    reader.onload = function(event){
    var img = new Image();
    img.onload = function (){
        canvas.width = 1000;
        canvas.height = 500;
        ctx.drawImage(img,0,0,img.width, img.height, 0, 0, canvas.width, canvas.height);
        }
        img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }
        
pic.addEventListener('change', uploadPic, false);

function uploadPicTwo(e) {
    var readerTwo = new FileReader();
    readerTwo.onload = function(event){
    var imgTwo = new Image();
    imgTwo.onload = function (){
        canvasTwo.width = 1000;
        canvasTwo.height = 500;
        ctxTwo.drawImage(imgTwo,0,0,imgTwo.width, imgTwo.height, 0, 0, canvasTwo.width, canvasTwo.height);
        }
        imgTwo.src = event.target.result;
        }
        readerTwo.readAsDataURL(e.target.files[1]);
    }
        
pic.addEventListener('change', uploadPicTwo, false);

function uploadPicThree(e) {
    var readerThree = new FileReader();
    readerThree.onload = function(event){
    var imgThree = new Image();
    imgThree.onload = function (){
        canvasThree.width = 1000;
        canvasThree.height = 500;
        ctxThree.drawImage(imgThree,0,0,imgThree.width, imgThree.height, 0, 0, canvasThree.width, canvasThree.height);
        }
        imgThree.src = event.target.result;
        }
        readerThree.readAsDataURL(e.target.files[2]);
    }
        
pic.addEventListener('change', uploadPicThree, false);

function uploadPicFour(e) {
    var readerFour = new FileReader();
    readerFour.onload = function(event){
    var imgFour = new Image();
    imgFour.onload = function (){
        canvasFour.width = 1000;
        canvasFour.height = 500;
        ctxFour.drawImage(imgFour,0,0,imgFour.width, imgFour.height, 0, 0, canvasFour.width, canvasFour.height);
        }
        imgFour.src = event.target.result;
        }
        readerFour.readAsDataURL(e.target.files[3]);
    }
        
pic.addEventListener('change', uploadPicFour, false);

function uploadPicFive(e) {
    var readerFive = new FileReader();
    readerFive.onload = function(event){
    var imgFive = new Image();
    imgFive.onload = function (){
        canvasFive.width = 1000;
        canvasFive.height = 500;
        ctxFive.drawImage(imgFive,0,0,imgFive.width, imgFive.height, 0, 0, canvasFive.width, canvasFive.height);
        }
        imgFive.src = event.target.result;
        }
        readerFive.readAsDataURL(e.target.files[4]);
    }
        
pic.addEventListener('change', uploadPicFive, false);

function uploadPicSix(e) {
    var readerSix = new FileReader();
    readerSix.onload = function(event){
    var imgSix = new Image();
    imgSix.onload = function (){
        canvasSix.width = 1000;
        canvasSix.height = 500;
        ctxSix.drawImage(imgSix,0,0,imgSix.width, imgSix.height, 0, 0, canvasSix.width, canvasSix.height);
        }
        imgSix.src = event.target.result;
        }
        readerSix.readAsDataURL(e.target.files[5]);
    }
        
pic.addEventListener('change', uploadPicSix, false);

function uploadPicSeven(e) {
    var readerSeven = new FileReader();
    readerSeven.onload = function(event){
    var imgSeven = new Image();
    imgSeven.onload = function (){
        canvasSeven.width = 1000;
        canvasSeven.height = 500;
        ctxSeven.drawImage(imgSeven,0,0,imgSeven.width, imgSeven.height, 0, 0, canvasSeven.width, canvasSeven.height);
        }
        imgSeven.src = event.target.result;
        }
        readerSeven.readAsDataURL(e.target.files[6]);
    }
        
pic.addEventListener('change', uploadPicSeven, false);

function uploadPicEight(e) {
    var readerEight = new FileReader();
    readerEight.onload = function(event){
    var imgEight = new Image();
    imgEight.onload = function (){
        canvasEight.width = 1000;
        canvasEight.height = 500;
        ctxEight.drawImage(imgEight,0,0,imgEight.width, imgEight.height, 0, 0, canvasEight.width, canvasEight.height);
        }
        imgEight.src = event.target.result;
        }
        readerEight.readAsDataURL(e.target.files[7]);
    }
        
pic.addEventListener('change', uploadPicEight, false);

function uploadPicNine(e) {
    var readerNine = new FileReader();
    readerNine.onload = function(event){
    var imgNine = new Image();
    imgNine.onload = function (){
        canvasNine.width = 1000;
        canvasNine.height = 500;
        ctxNine.drawImage(imgNine,0,0,imgNine.width, imgNine.height, 0, 0, canvasNine.width, canvasNine.height);
        }
        imgNine.src = event.target.result;
        }
        readerNine.readAsDataURL(e.target.files[8]);
    }
        
pic.addEventListener('change', uploadPicNine, false);

function uploadPicTen(e) {
    var readerTen = new FileReader();
    readerTen.onload = function(event){
    var imgTen = new Image();
    imgTen.onload = function (){
        canvasTen.width = 1000;
        canvasTen.height = 500;
        ctxTen.drawImage(imgTen,0,0,imgTen.width, imgTen.height, 0, 0, canvasTen.width, canvasTen.height);
        }
        imgTen.src = event.target.result;
        }
        readerTen.readAsDataURL(e.target.files[9]);
    }
        
pic.addEventListener('change', uploadPicTen, false);



