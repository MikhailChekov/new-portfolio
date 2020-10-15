import AnimateOnScroll from './ActiveToScroll';
import Ibg from './Ibg';
import ToggleReadMore from './ToggleReadMore';
import TypingText from './TypingText';
// for async/await err
import regeneratorRuntime from "regenerator-runtime";


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

    }
}());