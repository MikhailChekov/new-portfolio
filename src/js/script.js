import AnimateOnScroll from './ActiveToScroll';
import Ibg from './Ibg';
import ToggleReadMore from './ToggleReadMore';

(function () {
    document.addEventListener("DOMContentLoaded", ready);

    function ready() {
        //acting script from the files
        Ibg();

        let readMoreELems = document.querySelectorAll('.item__descr');
        ToggleReadMore(readMoreELems,'item__link_more', 'item__cut');

        const elemsScrollAnimate = document.querySelectorAll('.works__column, .section-title');
        AnimateOnScroll(elemsScrollAnimate, false, true);

    }
}());