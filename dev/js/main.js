/*import libs*/
//= libs/libs.js


//Yandex Map
function contactsMap(){
	ymaps.ready(function () {
		var myMap = new ymaps.Map('contacts-map', {
			center: [55.664538, 37.473483],
			zoom: 15
		}, {
				searchControlProvider: 'yandex#search'
			}),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Собственный значок метки',
				balloonContent: 'Это красивая метка'
			}, {
					iconImageSize: [30, 42],
					iconImageOffset: [-5, -38]
				});


		myMap.geoObjects
			.add(myPlacemark);
		myMap.controls.remove('trafficControl').remove
			('searchControl').remove('typeSelector').remove
			('geolocationControl').remove('fullscreenControl').remove('rulerControl');
	});
};
contactsMap();


//Smooth scroll
function smoothScroll(){
	let linkHook = document.querySelectorAll('a[href*="#"]');

	for (let anchor of linkHook) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const blockID = anchor.getAttribute('href')

			document.querySelector('' + blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}
};
smoothScroll();


//Popup consultation
function popupConsultation(){
	let modal = document.querySelector(".popup-consultation");
	let trigger = document.querySelector(".header-btn");
	let closeButton = document.querySelector(".popup-consultation__close");

	function toggleModal() {
		modal.classList.toggle("show-modal");
	}

	function windowOnClick(event) {
		if (event.target === modal) {
			toggleModal();
		}
	}

	trigger.addEventListener("click", toggleModal);
	closeButton.addEventListener("click", toggleModal);
	window.addEventListener("click", windowOnClick);
};
popupConsultation();


function showHeaderMenu(){
	let burger = document.querySelector('.header-burger');
	let headerMenu = document.querySelector('.header-menu');

	burger.addEventListener('click', () =>{
		burger.classList.toggle('header-burger--active');
		headerMenu.classList.toggle('header-menu--show');
	});
};
showHeaderMenu();