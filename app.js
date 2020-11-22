
// göra en lista så att man senare kan pusha in content som skapas av funktionen

var money = []

// main funktionen som ska låta användare skapa en ekonomisk överblick

var calculateValue = function () {

    // conecta olika variabler med html filer/ eller säga att dom ska skapa fil i html

    var number = Number(document.querySelector("#input").value);
    var description = document.querySelector("#description").value;
    var selectedMathematicalSymbol = document.querySelector("#selection").value;
    var curency = document.querySelector("#selection2").value;
    

    // vilkor sats som bestämmer vart element ska skapas/lagras beroende på vilken selector en användare väljer
    if (selectedMathematicalSymbol === "+") {

        var lincome = document.querySelector("#lincome")
        lincome.innerText = description + ": " + number + curency 

        var addToIncome = document.createElement("p")
        addToIncome.innerHTML = description + ": " + number + curency 
        document.querySelector("#incomelist").appendChild(addToIncome)
      
        // vilkor sats som converterar valuta beroende på vad användaren har valt till kronor
        if (curency == "$" ) {
            var convert = number * 8.62;
        }
         
        else if (curency == "€") {
            var convert = number * 10.22;
        }
        else {
            var convert = number;
        }
    
        // pusha info till skapade listan och ignorera alla tal efter komma
        money.push(Number(  Math.trunc(convert)   )    )
        
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
    

    // en loop som loopar igenom den skapade listan och visar hur mycket pengar man har kvar att spendera eller man måste återbetala

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
// en försäkring att användaren måste skriva in ett värde som ska inbetalas //notis om vad som måste göras
var checkInputValueNumber = function () {
 
    
    var number = Number(document.querySelector("#input").value);
   

    if (number > 0 ) {
        checkInputValueDescription();
    }
    else {
        alert("Please add an amount above 0")
    }
}

// en försäkring att användaren måste skriva in en beskrivning av inbetalningen //notis om vad som måste göras

var checkInputValueDescription = function () {
    
    var description = document.querySelector("#description").value;

    if (description === "") {
        alert("Please add a description to your moneyflow")
    }
    else {
        calculateValue();
        
    }
}

//en funktion som ska resetta listorna /sidan
var clear = function () {
    location.reload();
}

// 2 olika buttons som är connectade med clear och add functionerna
var btn = document.querySelector("#add")
btn.addEventListener("click", checkInputValueNumber)


var btn2 = document.querySelector("#clear")
btn2.addEventListener("click", clear)