var carousel = document.querySelector('.carousel'); //pobieram całą karuzele
var slide = document.querySelectorAll('.single-slide'); //pobieram pojedynczy item
var slideWidth = slide[0].clientWidth; //deklaracja szerokości clientWidth
var currentIndex = 0; // określenie pierwszego slajdu
var slidesNumber = slide.length; // cofnięcie z ostatniego do pierwszego slajdu

function goToSlide(index){ //funkcja powodujaca ruch naszej karuzeli
	if(index<0){
		index = slideNumer; // jeśli mniejszy od 0 zmieniamy go na slideNumer
	}else if(index >= slide.length){
		index=0; // jeśli jest większy od 0 to cofamygo do 0
	}
	carousel.style.left = index * (-slideWidth);
	currentIndex = index;
}

function slideToNext(){
	goToSlide(currentIndex + 1); // definicja przyciskuu next
}

function slideToPrev(){
	goToSlide(currentIndex - 1);// definicja przyciskuu prev
}



function bindEvents() {
	prev.addEventListener('click',slideToPrev); //event powodujący co ma się dziać po kliknięciu na prev
	next.addEventListener('click',slideToNext); //event powodujący co ma się dziać po kliknięciu na prev
}

let prev = document.querySelector('.carousel-prev'); // pobranie prev
let next = document.querySelector('.carousel-next'); // pobranie next 

bindEvents();

function autorotate() {
	setInterval(slideToNext,4000); // opóżnienie o 4 s przesunięcia
}

autorotate();