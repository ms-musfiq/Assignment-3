
// https://github.com/ms-musfiq/Assignment-3


// Calculator Unit conversion : for kilometerToMeter

function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return "Please enter a positive input";
    }
    else {
        var meter = kilo * 1000;
        return meter;
    }
}



// budget Calculator : for counting budget

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Enter a valid input";
    }
    else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalAmount = watchPrice + phonePrice + laptopPrice;
        return totalAmount;
    }
}



// calculator : for cost counting

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 10) {
        totalCost = day * 100;
    }
    if (day < 1) {
        return "Enter a valid input which is not 0 or nagative";
    }
    else if (day <= 20) {
        var first10Day = 10 * 100;
        var remaining = day - 10;
        var second10Day = remaining * 80;
        totalCost = first10Day + second10Day;
    }
    else {
        var first10Day = 10 * 100;
        var second10Day = 10 * 80;
        var remaining = day - 20;
        var After20Day = remaining * 50;
        totalCost = first10Day + second10Day + After20Day;
    }
    return totalCost;
}



// Select largest friend name from a array

function megaFriend(name) {
    var nameLength = 0;
    var largeName;
    if (name.length == 0) {
        return "Enter any word inside array";
    }

    for (var i = 0; i < name.length; i++) {
        if (name[i].length > nameLength) {
            var nameLength = name[i].length;
            largeName = name[i];
        }
    }
    return largeName;
}
