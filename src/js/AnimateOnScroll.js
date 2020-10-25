/**
 * * Usage: AnimateOnScroll(elems[repeatAnim, BEMmode, classToElem])
 *  elems - container with elements, which get class active when get visible to 1/4 their heigth
 * 
 *  repeatAnim  boolean  - if false, animation show 1 time.
 * 
 *  BEMmode   booleand - if true, copy elem last class and concatinate with classToElem,
 *  looks like - elemLastClass + _active =>  elemLastClass_active
 * 
 *  classToElem  string   - class concatinate with element last class,
 * when elements showing user, default name -  '_active'
*/

function AnimateOnScroll(elems, repeatAnim = true, BEMmode = false, classToElem = '_active') {
    if (elems.length) {

        // 1 time exec for elems on 1st screen, which not get event scroll.
        animOnScroll();

        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {

            for (let i = 0; i < elems.length; i++) {
                let item = elems[i],
                    itemHeight = item.offsetHeight,
                    itemOffset = offset(item).top,
                    animStart = 2,
                    itemNewClass = '',
                    itemLastClass  = item.classList[item.classList.length -1];

                    if(itemLastClass.includes(classToElem)) continue;
                    itemNewClass = BEMmode ? itemLastClass + classToElem : classToElem;

                let itemPoint = window.innerHeight - itemHeight / animStart;
                if (itemHeight > window.innerHeight) {
                    itemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if ((pageYOffset > itemOffset - itemPoint) && pageYOffset < (itemOffset + itemHeight)) {
                    if(!item.classList.contains(itemNewClass)){
                        item.classList.add(itemNewClass);
                    }
                } else {
                    if (repeatAnim) {
                        item.classList.remove(itemNewClass);
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
    } else {
        console.error('No elements in container AnimateOnScroll');
    }
}

export default AnimateOnScroll;