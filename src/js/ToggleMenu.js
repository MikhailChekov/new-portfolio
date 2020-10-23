/**
 * * Usage: ToggleMenu(item, toggleClass);
 *  item -  menu element.
 *  toggleClass - classname, which we should toggle.
*/

export default function ToggleMenu (item, toggleClass) {

    let style = document.createElement('style'),
        body = document.getElementsByTagName('body')[0];

    style.innerHTML = '.lock-body { overflow: hidden;}';
    document.getElementsByTagName('head')[0].append(style);
    
    item.addEventListener('click', handleClick);
    function handleClick () {
        item.classList.toggle(toggleClass);
        body.classList.toggle('lock-body');
    }
}