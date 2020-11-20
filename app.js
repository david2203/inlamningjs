var money = []


var calculateValue = function () {

    
    var number = Number(document.querySelector("#input").value);

    var description = document.querySelector("#description").value;
    var selectedMathematicalSymbol = document.querySelector("#selection").value;
    var curency = document.querySelector("#selection2").value;
    
    if (selectedMathematicalSymbol === "+") {

        var lincome = document.querySelector("#lincome")
        lincome.innerText = description + ": " + number + curency 

        var addToIncome = document.createElement("p")
        addToIncome.innerHTML = description + ": " + number + curency 
        document.querySelector("#incomelist").appendChild(addToIncome)
        
        if (curency == "$" ) {
            var convert = number * 8.62;
        }
         
        else if (curency == "€") {
            var convert = number * 10.22;
        }
        else {
            var convert = number;
        }
    
        
        money.push(Number(  Math.trunc(convert)   )    )
        console.log(money)
    }
    
    else  {

        var lexpense = document.querySelector("#lexpense")
        lexpense.innerText = description + ": " + (-number) + curency

        
        var addToExpenses = document.createElement("p" )
        addToExpenses.innerHTML = description + ": " + (-number) + curency 
        document.querySelector("#expenseslist").appendChild(addToExpenses)
        if (curency == "$" ) {
            var convert = number * 8.62;
        }
         
        else if (curency == "€") {
            var convert = number * 10.22;
        }
        else {
            var convert = number;
        }
    
        money.push(Number(-convert))

        
    }

    
    

    // alternative way to sum a list
    // function fnc(total, num) {
    //     return(total+num)
    // }
    
    var summa = 0;
    for (var i=0; i<money.length; i++) {
        summa += money[i];
        
    }
    
     document.querySelector("#moneyleft").innerHTML = Math.trunc(summa) + "kr"//money.reduce(fnc)
     if (summa >= 0) {
        document.querySelector("#moneyleftordebt").innerText = "Money left:"
     }

     else {
         document.querySelector("#moneyleftordebt").innerText = "Debt left:"
     }

}

var checkInputValueNumber = function () {
 
    
    var number = Number(document.querySelector("#input").value);
   

    if (number > 0 ) {
        checkInputValueDescription();
    }
    else {
        alert("Please add an amount above 0")
    }
}

var checkInputValueDescription = function () {
    
    var description = document.querySelector("#description").value;

    if (description === "") {
        alert("Please add a description to your moneyflow")
    }
    else {
        calculateValue();
        
    }
}


var clear = function () {
    location.reload();
}

var btn = document.querySelector("#add")
btn.addEventListener("click", checkInputValueNumber)


var btn2 = document.querySelector("#clear")
btn2.addEventListener("click", clear)