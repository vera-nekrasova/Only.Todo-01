import barba from '@barba/core';
import { getComponent } from './component';
import Scrollbar from 'smooth-scrollbar';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Popup from '../../components/popup/popup';

const scrollbarOptions = {};
let scrollbar = Scrollbar.init(document.querySelector('[data-barba="container"]'), scrollbarOptions);

let header = new Header(getComponent('header'));
let main = new Main(getComponent('main'));
let popup = new Popup(getComponent('popup'));

// Init functions
barba.hooks.beforeEnter(data => {
    scrollbar = Scrollbar.init(document.querySelector('[data-barba="container"]'), scrollbarOptions);
    header = new Header(getComponent('header'));
    main = new Main(getComponent('main'));
    popup = new Popup(getComponent('popup'));
});

// Destroy functions
barba.hooks.beforeLeave(data => {
    scrollbar.destroy();
    header.destroy();
    main.destroy();
    popup.destroy();
});