(function() {
/**
 * * Usage: AddActiveOnScroll(elems[,btnParetn, mode])
 *  elems - container with elements, which get class active when get visible to 1/4 their heigth
 *  classToElem  string   - class added when elements showing user, default name -  '_active'
 *  repeatAnim  boolean  - if false, animation show 1 time.
 *  BEMmode   booleand - if true, copy elem class and concatinate with classToElem, looks like - container__item + _active =>  container__item_active
*/
const elems = document.querySelectorAll('');

function AddActiveOnScroll(elems, classToElem = '_active', repeatAnim = true, BEMmode = false) {
    if (elems.length) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let i = 0; i < elems.length; i++) {
                const item = elems[i],
                    itemLastClass  = item.classList[item.classList.length -1],
                    itemHeight = item.offsetHeight,
                    itemOffset = offset(item).top,
                    animStart = 4;
                    classToElem = BEMmode ? itemLastClass + classToElem : classToElem;

                    console.log(itemLastClass)

                let itemPoint = window.innerHeight - itemHeight / animStart;
                if (itemHeight > window.innerHeight) {
                    itemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if ((pageYOffset > itemOffset - itemPoint) && pageYOffset < (itemOffset + itemHeight)) {
                    item.classList.add(classToElem);
                } else {
                    if (repeatAnim) {
                        item.classList.remove(classToElem);
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
        console.error('No scroll elems on container!');
    }
}

}());