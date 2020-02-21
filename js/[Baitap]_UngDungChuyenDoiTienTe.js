function convert() {
        let inputAmount;
        let inputFromCurrency;
        let inputToCurrency;
        let amount;
        let rate1;
        let rate2;
        let idToCurrency;
        let idFromCurrency;
        let resultRate;
        const VND = 1;
        const USD = 23000;
        const EUR = 27000;
        const GBP = 32000;


        inputAmount = document.getElementById("amount").value;
        amount = parseInt(inputAmount);
        //alert("Amount: " + amount);

        inputFromCurrency = document.getElementById("slFromCurrency").value;
        idFromCurrency = parseInt(inputFromCurrency);
        //alert("ID From Select: "+ inputFromCurrency);

        inputToCurrency = document.getElementById("slToCurrency").value;
        idToCurrency  = parseInt(inputToCurrency);
        //alert("ID TO Select: "+ idToCurrency);


        switch (idFromCurrency) {
            case 1:
                rate1 =VND ;
                break;
            case 2:
                rate1 =USD;
                break;
            case 3:
                rate1 = EUR;
                break;
            case 4:
                rate1 = GBP;
            break;
        }

        switch (idToCurrency) {
            case 1:
                rate2 =1 ;
                break;
            case 2:
                rate2 =23000;
                break;
            case 3:
                rate2 = 27000;
                break;
            case 4:
                rate2 = 32000;
                break;
        }

        //alert("RateFrom: "+ rate1);
        //alert("RateTo: "+rate2);

        resultRate = amount * (rate1/rate2);
        document.getElementById("result").innerHTML = parseFloat(resultRate);
        //alert("Result:"+ resultRate);

}