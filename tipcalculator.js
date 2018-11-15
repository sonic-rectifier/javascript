  // hide the tip amount on startup
  document.getElementById("totalTip").style.display = "none";
  // build the calculate tip on click event
  document.getElementById("calculate").onclick = function() { calculateTip(); };

  function calculateTip(){
    let billAmount = document.getElementById("billamt").value;
    let tipAmount = document.getElementById("serviceQual").value;
    let numPeople = document.getElementById("peopleamt").value;
    let tipDisplay = document.getElementById("tip");

    // check for 0 or null values
    if ( numPeople <= 0 || isNaN(numPeople) || isNaN(billAmount) || billAmount == "" || numPeople == "" || tipAmount == 0 ){
      confirm ("You entered invalid data!");
    }else{
      // calcualte the tip amount per person
      let tipPerPerson = ( billAmount * tipAmount ) / numPeople;

      tipDisplay.innerHTML = tipPerPerson.toFixed(2);

      document.getElementById("totalTip").style.display = "block";
    }
  }
