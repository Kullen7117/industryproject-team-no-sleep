 /* ----------------------------------------------------------------
 *  OPT Industry Project - Team No Sleep
 *  Purpose - This program will calculate the price of printing a 3d object.
 *  objectives Create a web application. 
 *             Allow the user to upload and view a 3D model (.stl-file).
 *             Calculate key values of the model (volume, material cost etc.).
 *             Provide a PDF export option with a comprehensive report of cost calculation.
 *  
 *  author - Madelyn
 *  author - Keefe
 *  author - Kullen - https://github.com/Kullen7117
 *  author - Daniel Guerrero - gitHub - https://github.com/itsdanielguerrero
 * 
 *  -----------------------------------------------------------------*/

function calculatePrintingPrice(volume, printTime, resinType ){
    //not implemented yet
    let inLiters = volume * 0.0000010 //convert to Liters

    let totalPrice = inLiters * resinPrice

    //switch statment

    return totalPrice
}

var vol = 16273
var time = 0
var resinPrice = 59.9

var printPrice = calculatePrintingPrice(vol, time, resinPrice)

console.log('the price is ' + printPrice + 'boom baby!')