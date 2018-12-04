/*
 COMP 4610 91.61 GUI Programming I
 Erika Spehlmann erika_spehlmann@student.uml.edu
 Last updated: November 25, 2018
 Copyright (c) 2018 by Erika Spehlmann. All rights reserved.
This webpage dynamically creates a Multiplication Table using JavaScript and
JQuery UI and validates input. The prupose of homework 8 is the use jGuery UI
to add sliders to choose input values.
*/

// Use to validate form of sliders
$( document ).ready( function validate(){
  $("form").validate({
    rules:{
      slideText1: {
        required: true,
        min: -1000,
        max: 1000
      },
      slideText2: {
        required: true,
        checkValues: "#slideText1",
        max: 1000
      },
      slideText3: {
        required: true,
        min: -1000,
        max: 1000
      },
      slideText4: {
        required: true,
        checkValues: "#slideText3",
        max: 1000
      }
    },
    messages: {
      slideText1: {
        required: "Please enter first number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      },
      slideText2: {
        required: "Please enter second number",
        checkValues: "Must be larger than first number",
        max: "Must be smaller than 1000",
      },
      slideText3: {
        required: "Please enter third number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      },
      slideText4: {
        required: "Please enter fourth number",
        checkValues: "Must be larger than third number",
        max: "Must be smaller than 1000",
      }
    },
  });
});

//Found this function on stack overflow
//Determines if a number is larger than another
// https://stackoverflow.com/questions/29451507/how-to-use-jquery-validator-to-determine-value-of-one-field-is-greater-than-anot
$.validator.addMethod("checkValues",
function (value, element, param){
  var $otherElement = $(param);
  return parseInt(value, 10) >= parseInt($otherElement.val(), 10);
});

//Function for when submit button is pressed
function myFunction(){
  //check if there is already a table, delete it
  if (document.getElementsByTagName('TABLE').length > 0)
  {
    document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("table")[0]);
  }

//  $("#getNums").submit();
console.log("in createtable");

//get numbers from form and make sure they are valid, throw errors if not
var h1 = Number(document.forms["getNums"]["slideText1"].value);
var h2= Number(document.forms["getNums"]["slideText2"].value);
var v1 = Number(document.forms["getNums"]["slideText3"].value);
var v2= Number(document.forms["getNums"]["slideText4"].value);

  // Make a table
  var body = document.getElementsByTagName("body")[0];
  var table = document.createElement('TABLE');
  var tblbody = document.createElement('TBODY');

  // append the body to the table
  table.appendChild(tblbody);

 // choose number of cols and rows to be the difference plus two
 var cols = h2-h1 + 2;
 var rows = v2-v1 + 2;

  //use v2 and v1 for rows
  for (var i=0; i<rows; i++){
    var tr =document.createElement('TR');
    tblbody.appendChild(tr);

    //make enough columns for each row
    for (var j = 0; j < cols; j++)
    {
      var td =document.createElement('TD');
      tr.appendChild(td);
      var jOffset = j-1;
      var iOffset = i-1;
      var vert = Number(h1)+jOffset;
      var horiz = Number(v1)+iOffset;

      //these will be the first row and first column
      if (i == 0 || j == 0)
        {
          if (i == 0)
          {
            //top left corner add mult symbol
            if (j == 0)
            {
              td.innerHTML = "X";
            }
            else {
                td.innerHTML = Number(vert);
            }
          }
          if (j == 0)
          {
            if (i > 0)
            {
              td.innerHTML = Number(horiz);
            }
          }
          td.style.fontWeight = "900";
          td.style.backgroundColor = "grey";
        }
      else
      {
        //inner cells - multiply
        td.innerHTML = vert * horiz;
      }
    }
  }
  body.appendChild(table);
  return false;
}

// on click call fundtion aboce
//document.getElementById("button").onclick = myFunction;
