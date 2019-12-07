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

 function calculatePrintingPrice(volume, printTime, resinType) {
     //not implemented yet
     let inLiters = volume * 0.0000010 //convert to Liters

     let totalPrice = inLiters * resinPrice

     //switch statment
     switch (resinType) {
         case 'pcLightgrey':
             return inLiters * 59.90;
             break;
         case 'pcTRed':
             return inLiters * 69.98;
             break;
         case 'pc3D':
             return inLiters * 76.90;
             break;
         case 'bcBlue':
             return inLiters * 138.69;
             break;
         case 'bcX5':
             return inLiters * 142.99;
             break;
         case 'zrsgr':
             return inLiters * 345.99;
             break;
         default:
             return 0;
             break;
     }

     return totalPrice
 }

 var vol = 16273
 var time = 0
 var resinPrice = 'zrsgr'

 var printPrice = calculatePrintingPrice(vol, time, resinPrice)

 console.log('the price is ' + printPrice + 'boom baby!')