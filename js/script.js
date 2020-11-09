// $(document).ready(function () {
// 	$('.header__boorger').click(function (event) {
// 		$('.header__boorger,.header__menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });
'use strict';
const headerBoorger = document.querySelector('.header__boorger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
headerBoorger.addEventListener('click', () => {
	headerBoorger.classList.toggle("active");
	headerMenu.classList.toggle("active");
	body.classList.toggle("lock");
	// console.log(123);
});
