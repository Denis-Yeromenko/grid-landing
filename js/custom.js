let modal_btn = document.querySelector('.modal_btn');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let more = document.querySelector('.more');
let back = document.querySelectorAll('.back');
let rules_first = document.querySelector('.rules_first');

modal_btn.onclick = function() {
	overlay.classList.add('visible');
	rules_first.style.marginLeft = '0px';
};

overlay.onclick = function() {
	overlay.classList.remove('visible');
};

more.onclick = function(e) {
	rules_first.style.marginLeft = '-300px';
	e.stopPropagation();
};

for (let i = 0; i < back.length; i++) {
	back[i].onclick = function(e) {
		rules_first.style.marginLeft = '0px';
		e.stopPropagation();
	};
}
