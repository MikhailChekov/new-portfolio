/**
 * * Usage: SmoothScroll(elems);
 *  elems - container with elements, which should have elem href view '#elem', to section with id="elem";
*/
export default function SmoothScroll (elems) {

    for (const elem of elems) {
        elem.addEventListener('click', startLoop , false);
    }

    function startLoop(e){
        e = e || window.event;
        e.preventDefault();

        const elem = e.currentTarget.getAttribute('href');
        const section = document.querySelector(elem);
        const sectionRect = section.getBoundingClientRect().top;

        let scrollDistance = sectionRect,
            scrollStep = 10,
            scrollPath = window.pageYOffset,
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
