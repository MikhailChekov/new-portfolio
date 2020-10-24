/**
 * * Usage: ToggleMenu(toggler, menu, toggleActiveClass, menuActiveClass[,navLinks, bodyActive, outerToggleElem , outerToggleClass]);
 *  toggler - toggler element or button, like a burger menu.
 *  menu -  menu element.
 *  toggleActiveClass - classname, which should be on toggler element, when it were ??? clicked.
 *  menuActiveClass - classname, which should be on menu element, when toggler was clicked.
 *  navLinks - elem, with links for Custom scroll properties.
 *  bodyActive - if we're should add class to body for translate it somewhere.
 *  outerHideClass - if we're should hide some element (toggle display node for some class).
 *  outerToggleElem - outer elem or elements for active. 
 *  outerToggleClass - className or array with classNames for outer elems.
*/

export default function ToggleMenu (toggler, menu, toggleActiveClass, menuActiveClass, navLinks, bodyActive, outerToggleElem , outerToggleClass) {


    // Lock body for stop user scroll, when the menu open.
    let style = document.createElement('style'),
        body = document.body;
    style.innerHTML = '.body-lock { overflow: hidden;} .none { display: none; }';
    document.head.append(style);
    
    toggler.addEventListener('click', menuHandler);
    menu.addEventListener('click', menuHandler);

    if(navLinks) {
        navLinks.forEach(e => e.addEventListener('click', linksHandler));
    }

    function linksHandler(e) {
        e.preventDefault();
        const elem = e.target.getAttribute('href');
        const section = document.querySelector(elem);
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }

    function menuHandler () {
        toggler.classList.toggle(toggleActiveClass);
        menu.classList.toggle(menuActiveClass);
        body.classList.toggle('body-lock');

        if(bodyActive) {
            body.classList.toggle(bodyActive);
        }
        if(outerToggleElem) {
            if(outerToggleElem.length) {
                let arr = [...outerToggleElem];
                
                arr.forEach((e, i) => {
                    console.log(e);
                    e.classList.toggle(outerToggleClass[i]);
                });
            } else {
                outerToggleElem.classList.toggle(outerToggleClass);
            }
            
        }
    }
}