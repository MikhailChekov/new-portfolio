/**
 * * Usage: ScrollToElem(elems);
 *  elems - container with elements, which should have elem href view '#elem', to section with id="elem";
*/
export default function ScrollToElem (elems) {
    let delay = 200,
        currScroll = window.pageYOffset,
        timer;
    let btn = document.querySelector('.btn__round_arrow-up');
    btn.addEventListener('click',scrollLoop, false);
    let sec = document.querySelector('#section-works');
    let btnOffset = offset(btn).top;
    let secOffset = offset(sec).top;
    let userHeigth = document.documentElement.clientHeight;
    console.log(secOffset , btnOffset);
    let scrollDistance = secOffset - btnOffset + userHeigth;
    // if(secOffset > btnOffset) {
        
    // }
    
    
    
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    function scrollLoop(e){
        // e = e || window.event;
        e.preventDefault();
        if(scrollDistance > 0){
            window.scrollTo(0, currScroll);
            currScroll -= 50;
            scrollDistance -= 50;
            timer = setTimeout(scrollLoop, delay);
        }
        else {
            clearTimeout(timer);
            //here we can scroll to small distance 
            //     scrollIntoView({
            //         behavior : 'smooth',
            //         block: 'start'
            //     });
        }
    }
}




// function scrollToSection(e) {
    //     e.preventDefault();
    //     const section = elem.getAttribute('href')
    //     document.querySelector(section).scrollIntoView({
    //         behavior : 'smooth',
    //         block: 'start'
    //     });
    // }
