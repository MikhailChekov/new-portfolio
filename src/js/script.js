//async - await fix for babel;
import regeneratorRuntime from "regenerator-runtime";

import AnimateOnScroll from './AnimateOnScroll';
import Ibg from './Ibg';
import ToggleReadMore from './ToggleReadMore';
import TypingText from './TypingText';
import SmoothScroll from './SmoothScroll';
import FilterItems from './FilterItems';
import AnimateProgressBar from './AnimateProgressBar';


(function () {
    document.addEventListener("DOMContentLoaded", ready);

    function ready() {
        Ibg();

        let typeTextElem = document.querySelector('.main-block__title');
        TypingText(typeTextElem ,['Привет, я Чех', 'ков Михаил'], [0, 1]);

        let readMoreELems = document.querySelectorAll('.item__descr');
        ToggleReadMore(readMoreELems,'item__link_more', 'item__cut');

        const elemsScrollAnimate = document.querySelectorAll('.works__column, .section-title');
        AnimateOnScroll(elemsScrollAnimate, false, true);

        const elemsForSmoothScroll = document.querySelectorAll('*[href*="#"]');
        SmoothScroll(elemsForSmoothScroll);

        const filterButtons = document.querySelectorAll('.filter__item'),
            filterItems = document.querySelectorAll('.skills__item');
        FilterItems(filterButtons,filterItems);

        const progressElems = document.querySelectorAll('.skills__item');
        AnimateProgressBar(progressElems, 'progress-bar');
        
    }
}());