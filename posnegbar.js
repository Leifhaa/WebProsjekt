function calculateUsed() {
    var hours1 = document.getElementById("emHours1").value;
    var hours2 = document.getElementById("emHours2").value;

    var salary1 = document.getElementById("emSal1").value;
    var salary2 = document.getElementById("emSal2").value;
    
    function cost(hr, sal) {
        return hr*sal;
    }
    
    var emp1 = cost(hours1, salary1);
    var emp2 = cost(hours2, salary2);
    
    var total = emp1 + emp2;
    
    document.getElementById("userUsed").value = total
}


function calculatePerc() {
    
    // Gets the budget and the used amount from input
    var userBudget = document.getElementById("userBudget").value;
    var userUsed = document.getElementById("userUsed").value;
    
    // Finds the useds percentage of the budget
    function percentageCalc(part, tot) {
        var num = (part/tot)*100;
        var n = num.toFixed(0);
        return n;
    }
    
    var userValue = percentageCalc(userUsed, userBudget);
    
    // If the used amount is beneath the budget, it's percentage is shown on the minus-bar  
    if (userValue < 100) {
        document.getElementById("proMinus").value = userValue;
        document.getElementById("proPlus").value = 0;
        
        var userPercentage = document.getElementById("userValuePrinted");
        
        // Functions which turns e.g 98% to 2%
        function flipValue(num) {
            return -(num-100);
        }
        
        var userValueFlip = flipValue(userValue);
        userPercentage.innerHTML = userValueFlip + "% under budget";
    }
    
    // If the used amount exceeds the budget, it's percentage is shown on the plus-bar
    else if (userValue > 100) {
        // Converts the number from e.g 110% to 10%, to be used on the progressbar
        userValue = userValue - 100;
        document.getElementById("proMinus").value = 100;
        document.getElementById("proPlus").value = userValue;
        
        var userPercentage = document.getElementById("userValuePrinted");
        userPercentage.innerHTML = userValue + "% over budget";
    }
    
    // If used=budget both bars is set to zero (minus-bar inverted)
    else {
        document.getElementById("proMinus").value = 100;
        document.getElementById("proPlus").value = 0;
    }
}