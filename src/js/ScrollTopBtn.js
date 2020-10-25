/**
 * * Usage: ScrollTopBtn(elem)
 * elem - button, which should srcroll to top of the page.
*/

export default function ScrollTopBtn (elem) {
    elem.addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', butonHide);

    function butonHide () {
        if(window.pageYOffset > 300) {
            elem.style.display = 'block';
        } else {
            elem.style.display = 'none';
        }
    }
}