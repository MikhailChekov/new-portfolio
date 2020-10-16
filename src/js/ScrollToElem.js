/**
 * * Usage: ScrollToElem(elems[repeatAnim, BEMmode, classToElem])
 *  elems - container with elements, which should have elem href view '#elem', to section with id="elem";
*/
export default function ScrollToElem (elems) {
    for (let elem of elems) {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            const section = elem.getAttribute('href')
            document.querySelector(section).scrollIntoView({
                behavior : 'smooth',
                block: 'start'
            });
        });
    }
}