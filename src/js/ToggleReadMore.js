/**
 * * Usage: ToggleReadMore(elems, btnClass, hideElemClass[,BtnHideText, BtnOpenText])
 * elems - Container with elements.
 * btnClass - Button class name, which toggle the Read more container.
 * hideElemClass - element, which will be hidden.
 * BtnHideText - Button textNode, when container hide.
 * BtnOpenText - Button textNode, when container open.
*/

function ToggleReadMore(elems, btnClass, hideElemClass, BtnHideText = 'Читать далее', BtnOpenText = 'Скрыть') {
  if(!elems){
    console.error('No elements in ToggleReadMore() container');
    return;
  }

  elems.forEach((e) => e.addEventListener('click', readMoreHandler, false));

  function readMoreHandler(e) {
    if (![...e.target.classList].includes(btnClass)) return;

    let children = [...e.currentTarget.children];
    let btn = e.target;
    children.forEach((el) => {
      if (el.classList.value === hideElemClass) {
        if (el.style.display === 'block') {
          el.style.display = 'none';
          btn.innerHTML = BtnHideText;
        } else {
          el.style.display = 'block';
          btn.innerHTML = BtnOpenText;
        }
      }
    });
  }
}

export default ToggleReadMore;
