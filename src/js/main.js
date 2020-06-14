import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import showMoreFiles from './modules/showMoreFiles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictures from './modules/pictures';
import accordion from './modules/accordion';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let state = {};

    modals();
    // sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    // sliders('.main-slider-item', 'vertical');
    showMoreFiles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', state);
    forms(state);
    filter();
    pictures('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
});