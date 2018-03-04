
/*let x=34;
let text;
if(x<100){
    text='Liczba jest mniejsza od 100';
}

if(x<10){
    text='Liczba jest mniejsza od 10';
}


const el = document.getElementById('nauka');
el.innerHTML= text;
*/

/*
for (let i=1; i<=50; i++){
    console.log("id-" + i);
}
*/


/*
let counter = 0;
while(counter<20){
    console.log('JS jest super');
    counter +=2;
}

*/

/*let friends = ["Iga", "Sławek", "Staś"];
console.log(friends[0]);
console.log(friends.length);
friends.push ("Marysia");
console.log(friends);

for (let i=0; i<friends.length; i++){
    console.log(friends[i]);
}*/

/*let work_friends = ["Michał", "Marta", "Tomek", "John", "Natalia", "Ania","Kasia"];
let party_friends = ["Asia", "Kamil", "Bartek", "Ola", "Weronika", "Czarek"];

let full_firends = work_friends.concat(party_friends);
console.log(full_firends);*/


/*let party_friends = ["Asia", "Kamil", "Bartek", "Ola", "Weronika", "Czarek"];
let party = party_friends.slice(1,3);
console.log(party);

party_friends.splice(2,2,'Zuza', "Fi", "KI");
console.log(party_friends);*/

/*let friends = ["Michał", "Marta", "Tomek", "John", "Natalia", "Ania","Kasia"];

friends.splice(0,0,'Iga');
console.log(friends);
console.log(friends.indexOf('Iga'));

for(i=1; i<friends.length ; i++){
    console.log(friends[i]);
}*/


/*let friends = ["Michał", "Marta", "Tomek", "John", "Natalia", "Ania","Kasia"];

for(i=0; i<friends.length; i++){
    console.log('czesc '+ friends[i] + '! Miło nam CIę powitać');
}*/
/*
var zdanie = 'Nad rzeczką opodal krzaczka, mieszkała kaczka-dziwaczka, lecz zamiast trzymać się rzeczki, robiła piesze wycieczki';
var licznik = 0;
for(var i=0; i<zdanie.length; i++){
    if('aeiyuo'.indexOf(zdanie.charAt(i))!==-1){
        console.log(zdanie.charAt(i));
        licznik++;
    }
}

console.log(licznik);
*/

/*function powierzchniaMalowania(jedna_sciana,druga_sciana,wysokosc){
let x = jedna_sciana;
let y = druga_sciana;
let z = wysokosc;
return;
let szerSciany = 2*x +2*y;
let powSufitu = x*y;
let pomalowania = powSufitu + szerSciany;
console.log(x);
console.log(y);
console.log(z);
console.log(szerSciany);
console.log(powSufitu);
return pomalowania;
};
powierzchniaMalowania(3,6,8);

console.log(powierzchniaMalowania(3,6,8));
*/

/*function helloGirlsJS(name){

    let dane = 'Cześć,' + name +"! Witaj na girls.js!";
    return dane; 
}
console.log(helloGirlsJS('Iga'));*/

/*var pobierz = document.querySelector('h1');
console.log(pobierz);*/


/*function getRadomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';

    for( var i=0; i<6; i++){
        var radomNumber = Math.floor(Math.random()*16);
        var randomLetter = letters[radomNumber];
       color += randomLetter;
    }
    return color;
}

console.log(getRadomColor());

let title = document.getElementById('magic');
function changeColor(text){
    text.style.color = getRadomColor();
    return title.style.color;
}

console.log(changeColor(title));
*/

/*
let metoda = { //definicja obiektu
    name: 'Iga',
    age: 26,
    hobby: ['swimming', 'books']
}

console.log(metoda.hobby); // odwołanie do klucza obiektu(nazwa_metody.klucz)
//let nazwa_metody{klucz:wartosc, .....} 

metoda.dzieci = 'Staś'; // dodanie do obiektu klucza i wartości nazwa_obiektu.klucz = wartość;
console.log(metoda);

delete metoda.dzieci; // usunięcie klucza delete nazwa_obiektu.klucz
console.log(metoda);

*/

 let person = {   
    name: 'Natalia',
    age: 27,
    hobby: ['swimming', 'cycling', 'fantasy books'],
    city: 'Poznan',
    family: {
        mom: 'Anna',
        dad: 'Paweł',
        sister: 'Karolina'
    }
}

console.log(person.family.sister); //pobranie imienia siostry