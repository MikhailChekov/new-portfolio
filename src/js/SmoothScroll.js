/**
 * * Usage: SmoothScroll(elems);
 *  elems - container with elements, which should have elem href view '#elem', to section with id="elem";
*/
export default function SmoothScroll (elems) {

    for (const elem of elems) {
        elem.addEventListener('click', startLoop , false);
        // add my param to elem
    }

    function startLoop(e){
        e = e || window.event;
        e.preventDefault();

        //check for more than 1 elem, maybe should use currentTarget
        const elem = e.target.getAttribute('href');
        const section = document.querySelector(elem);
        const sectionRect = section.getBoundingClientRect().top;

        let scrollDistance = sectionRect,
            scrollStep = 10,
            scrollPath = window.pageYOffset,
            timer;
        console.log(sectionRect, 'sectionRect');
        console.log(scrollDistance, 'scrollDistance');
        console.log(scrollPath, 'scrollPath');
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
