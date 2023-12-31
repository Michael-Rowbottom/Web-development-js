/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
var modelName = 'XYZ'; // You can initialize it with the default model name
var modelDuration =0 ; // You can initialize it with the default duration

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/


function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    var totalCost;
    
    if (modelName == 'XYZ') {
        totalCost =  modelDuration * 100; 
        
    }       
    else if (modelName == 'CPRG') {
        totalCost =  modelDuration * 213;
        
    }
    costLabel.innerHTML = totalCost.toFixed(2)
}
    

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */


var switchModelButton = document.getElementById("model-button");


function changeModel() {
    let modelText = document.getElementById("model-text");
    if (modelName == "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } 
    
    
    else if (modelName == 'CPRG') {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }
    
    recalculate();
}

switchModelButton.addEventListener("click", changeModel);



/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost.
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

var changeDurationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    var duration = prompt("Enter new duration:");
    modelDuration = duration;
    durationText.innerHTML = duration;
    recalculate();
}

changeDurationButton.addEventListener("click", changeDuration);
changeDurationButton.addEventListener("click", changeDuration);
