import { getComponent } from '../../app/js/component';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Popup from '../../components/popup/popup';

//здесь попробовала прописать js так же, как и в прошлом дз, чтобы было удобно смотреть верстку
//и заодно поизучать структуру, чтобы на следующем занятии было больше понятно, что делаем и были вопросы))

const Index = {
    namespace: 'index',
    beforeEnter() {
        //подключение компонентов
        this.header = new Header(getComponent('header'));
        this.main = new Main(getComponent('main'));
        this.popup = new Popup(getComponent('popup'));

        //получение элементов DOM
        let btnHeader = this.header.getElement('btn');
        let taskCircle = this.main.getElements('task .task__circle');
        let mainEmptyList = this.main.getElement('empty-list');
        let btnAdd = document.querySelector('.main__btn-add');
        let btnClose = document.querySelectorAll('.popup__btn-close');
        let taskText = this.main.getElements('task .task__text');
        let tasks = this.main.getElements('task');
        let popupAddTask = document.querySelector('.popup__add-task');
        let popupEditTask = document.querySelector('.popup__edit-task');
        let popup = document.querySelectorAll('.popup');

        if (tasks.length == 0) mainEmptyList.classList.remove('hide'); //появление записи в случае отсутствия заданий в списке

        //прослушка событий
        btnAdd.addEventListener('click', function () {
            popupAddTask.classList.remove('hide-popup');
        });

        for(let i=0; i<taskText.length; i++) {
            taskText[i].addEventListener('click', showPopupFix);
        }

        btnHeader.addEventListener('click', fixTasks);

        for(let i =0; i < btnClose.length; i++) {
            btnClose[i].addEventListener('click', popupAdd);
        }

        //функции
        function popupAdd () {
            for(let k = 0; k < popup.length; k++) {
                let curPopup = popup[k];
                if (!curPopup.classList.contains('hide-popup')) {
                    curPopup.classList.add('hide-popup');
                }
            }
        }

        function fixTasks() {
            if (btnHeader.innerHTML == 'Отменить') {
                btnHeader.textContent = 'Править';
                for (let i = 0; i < taskCircle.length; i++) {
                    taskCircle[i].classList.remove('task__circle_del-task');
                    taskCircle[i].classList.add('task__circle_check');
                }
                btnAdd.classList.remove('hide');
            } else {
                btnHeader.textContent = 'Отменить';
                for (let i = 0; i < taskCircle.length; i++) {
                    taskCircle[i].classList.add('task__circle_del-task');
                    taskCircle[i].classList.remove('task__circle_check');
                }
                btnAdd.classList.add('hide');
            }
        }

        function showPopupFix() {
            if (taskCircle[0].classList.contains('task__circle_del-task')) {
                popupEditTask.classList.remove('hide-popup');
            };
        }
    },
    afterEnter() {
        // afterEnter body
    },
    beforeLeave() {
        // beforeLeave body
    },
    afterLeave() {
        // afterLeave body
    }
}

export default Index