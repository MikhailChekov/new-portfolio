//async - await fix for babel;
import regeneratorRuntime from "regenerator-runtime";

import AnimateOnScroll from './AnimateOnScroll';
import Ibg from './Ibg';
import ToggleReadMore from './ToggleReadMore';
import TypingText from './TypingText';
import SmoothScroll from './SmoothScroll';
import FilterItems from './FilterItems';
import AnimateProgressBar from './AnimateProgressBar';
import ScrollTopBtn from './ScrollTopBtn';


(function () {
    document.addEventListener("DOMContentLoaded", ready);

    function ready() {
        //Copy 'src' from img tag to background of a parent elem.
        Ibg();
        
        let typeTextElem = document.querySelector('.main-block__title');
        TypingText(typeTextElem ,['Привет, я Чех', 'ков Михаил'], [0, 1]);

        let readMoreELems = document.querySelectorAll('.item__descr');
        ToggleReadMore(readMoreELems,'item__link_more', 'item__cut');

        //Apply to effect to 'works' section.
        const elemsScrollAnimate = document.querySelectorAll('.works__column, .section-title');
        AnimateOnScroll(elemsScrollAnimate, false, true);

        //Apply effect to menu and button 'down'.
        const elemsForSmoothScroll = document.querySelectorAll('*[href*="#"]');
        SmoothScroll(elemsForSmoothScroll);

        //Apply effect to 'skills' section.
        const filterButtons = document.querySelectorAll('.filter__item'),
            filterItems = document.querySelectorAll('.skills__item');
        FilterItems(filterButtons,filterItems);
        //Apply effect to 'skills' section on back part of cards.
        const progressElems = document.querySelectorAll('.skills__item');
        AnimateProgressBar(progressElems, 'progress-bar');

        const btnUp = document.querySelector('.btn__round_arrow-up');
        ScrollTopBtn(btnUp);
        
    }
}());