/**
 * * Usage: AnimateProgressBar(elems, barClass)
 * elems  - elements, wich hovered user, should contains progress-bar on children on 2 levels.
 * barClass - progress-bar element, should conains number and fill elements.
*/

export default function AnimateProgressBar(elems, barClass) {
    elems.forEach(e => e.addEventListener('mouseenter', animation));

    function animation(e) {
        e = e || window.event;
        const currentTarget = e.currentTarget;
        const barColors = ['#fecf23', '#ff0000', '#008000', '#0000ff', '#C71585', '#2F4F4F'];
        let number, fill;


        const targetChildren = [...currentTarget.children];
        targetChildren.forEach(i => {
            if(i.classList.contains(barClass)){
                number = el.children[0],
                fill = el.children[1];
            } else {
                const grandsons = [...i.children];
                grandsons.forEach(el => {
                    if(el.classList.contains(barClass)){
                        number = el.children[0],
                        fill = el.children[1];
                    }
                });
            }
        });
        let percent = number.textContent.replace(/[^\d]/g, ''),
            start = 1;
        
        number.style.visibility = 'hidden';
        fill.style.backgroundColor = barColors[getRandomInt(barColors.length -1)];
        
        let interval = setInterval(() => {
            if(start <= percent) {
                fill.style.width = (++start) + '%';
            } else {
                clearInterval(interval);
                number.style.visibility = 'visible';
            }
        }, 15);

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }

    }

}

