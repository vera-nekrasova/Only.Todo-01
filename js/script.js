window.addEventListener('load', function () {
	let btnHeader = document.querySelector('.header__btn');
	let taskCircle = document.querySelectorAll('.task__circle');
	let popupAddTask = document.querySelector('.popup__add-task');
	let btnAdd = document.querySelector('.main__btn-add');
	let btnClose = document.querySelectorAll('.popup__btn-close');
	let taskText = document.querySelectorAll('.task__text');
	let popupEditTask = document.querySelector('.popup__edit-task');
	let popup = document.querySelectorAll('.popup');
	let tasks = document.querySelectorAll('.task');
	let mainEmptyList = document.querySelector('.main__empty-list');

	if (tasks.length == 0) mainEmptyList.classList.remove('hide');

	btnHeader.addEventListener('click', function () {
		if (btnHeader.innerHTML == 'Отменить') {
			btnHeader.textContent = 'Править';
			taskCircle.forEach(el => {
				el.classList.remove('task__circle_del-task');
				el.classList.add('task__circle_check');
			});
			btnAdd.classList.remove('hide');
		} else {
			btnHeader.textContent = 'Отменить';
			taskCircle.forEach(el => {
				el.classList.add('task__circle_del-task');
				el.classList.remove('task__circle_check');
			});
			btnAdd.classList.add('hide');
		}
	});

	btnClose.forEach(element => {
		element.addEventListener('click', function () {
			popup.forEach(el => {
				if (!el.classList.contains('hide-popup')) {
					el.classList.add('hide-popup');
					el.querySelector('.popup__inp').value = '';
				}
			});
		});
	});

	btnAdd.addEventListener('click', function () {
		popupAddTask.classList.remove('hide-popup');
	});

	taskText.forEach(el => {
		el.addEventListener('click', function () {
			if (taskCircle[0].classList.contains('task__circle_del-task')) {
				popupEditTask.classList.remove('hide-popup');
			};
		});
	});
});
