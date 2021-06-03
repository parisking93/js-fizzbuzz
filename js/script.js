// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

    var fizz = 'Fizz';
    var buzz = 'Buzz';
    var boolean = 'Boolean';
for (i = 1; i <= 100; i++) {
    if ( i % 3 == 0 && i % 5 == 0 && i % 6 == 0) {
        document.getElementById('numeri').innerHTML += i + ' ' + fizz + buzz + boolean + '<br>';
    } else if (i % 6 == 0 && i % 3 == 0 ) {
        document.getElementById('numeri').innerHTML += i + ' ' + fizz + boolean + '<br>';
    } else if (i % 5 == 0 && i % 3 == 0 ) {
        document.getElementById('numeri').innerHTML += i + ' ' + fizz + buzz + '<br>';
    } else if (i % 5 == 0) {
        document.getElementById('numeri').innerHTML += i + ' ' + buzz + '<br>';
    } else if (i % 3 == 0 ) {
        document.getElementById('numeri').innerHTML += i + ' ' + fizz + '<br>';
    } else {
        document.getElementById('numeri').innerHTML += i + '<br>';
    }
}



