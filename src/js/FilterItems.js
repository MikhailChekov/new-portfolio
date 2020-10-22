/**
 * * Usage: FilterGallery(buttons, items)
 * buttons - container with buttons, which should contains attr - data-filter="youParam" own for each secton.
 * items - container with items for filter, should contains attr - data-filter="youParam" own for each secton.
*/

export default function FilterItems(buttons, items) {
    buttons.forEach(e => e.addEventListener('click', filter));

    function filter(e) {
        e = e || window.event;
        e.preventDefault();

        const currentTarget = e.currentTarget;
        if(!currentTarget.hasAttribute('data-filter')) return;

        /*   -------  toggle active  -------   */
        
        if(!currentTarget.classList.contains('active')) {
            buttons.forEach(e => e.classList.remove('active'));
            currentTarget.classList.add('active');
        } else {
            return;
        }

        /*   -------  filtering  ---------   */
        let filter = e.currentTarget.dataset['filter'];

        items.forEach(i => {
            if(i.dataset['filter'] !== filter && filter !== 'all') {
                i.classList.add('hide');
                i.classList.remove('show');
            } else{
                i.classList.add('show');
                i.classList.remove('hide');
            }
        });
    }
}