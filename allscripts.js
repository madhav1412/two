// Author: Sundara Madhav Nemani
// Description: This page contains all the javascript helper functions for the survey page

// Helper function to validate Raffle Numbers
function verifyNumbers() {
    var data = document.getElementById("raffle").value;
    var numbers = data.split(",");
    if (numbers.length < 10) {
        alert("Error: Please enter at least 10 comma separated numbers.");
        return;
    }

    // Check if all numbers are between 1 and 100.
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 1 || numbers[i] > 100) {
            alert("Error: Please enter only numbers between 1 and 100.");
            return;
        }
    }
}

