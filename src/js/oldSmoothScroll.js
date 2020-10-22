/**
 * * Usage: SmoothScroll(elems);
 *  elems - container with elements, which should have elem href view '#elem', to section with id="elem";
*/
// export default function SmoothScroll (elems) {

    for (const elem of elems) {
        const section = document.querySelector(elem.getAttribute('href')),
            scrollDistance = section.getBoundingClientRect().top;

        elem.addEventListener('click', startLoop , false);
        // add my param to elem
        elem.scrollDistance = scrollDistance;
    }

    function startLoop(e){
        e = e || window.event;
        e.preventDefault();
        //check for more than 1 elem, maybe should use currentTarget
        let scrollDistance = e.target.scrollDistance,
            scrollStep = 10,
            scrollPath = 0,
            timer;

        scrollLoop();

        function scrollLoop() {
            if(scrollDistance > 0){
                scrollDistance -= scrollStep;
                scrollPath += scrollStep;
                window.scroll(0, scrollPath);
                timer = setTimeout(scrollLoop, 10);
            }
            else {
                clearTimeout(timer);
            }
        }
    }
    
}
