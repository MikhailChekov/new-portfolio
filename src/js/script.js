(function () {
    // move src from child img to parrent with class 'ibg', hide img (css)
    const ibg = () => {
        let ibgs = document.getElementsByClassName('ibg');
        if (ibgs.length) {
            for (let item of ibgs) {
                let imgSrc = item.children[0].attributes[0].value;
                item.style = `background-image: url("${imgSrc}");`;
            }
        } else{
            console.log('No elements with class "ibg"!');
        }
    }
    ibg();
    // show/hide cut text from 'works' section on click.
    const readMore = () => {
        let containers = document.querySelectorAll('.item__descr');
        containers.forEach(e => e.addEventListener('click', readMoreHandler, false));

        function readMoreHandler(e) {
            if(e.target.classList[1] !== 'item__link_more') return;

            
            let children = [...e.currentTarget.children];
            let btn = e.target;
            children.forEach(el => {
                if(el.classList.value === 'item__cut'){
                    if(el.style.display === 'block'){
                        el.style.display = 'none';
                        btn.innerHTML = 'Читать далее';
                    }else{
                        el.style.display = 'block';
                        btn.innerHTML = 'Скрыть';
                    }
                }
            });
        }
    }
    readMore();


    
    //toggle class 'active' to burger menu with class 'icon-menu'
    const iconMenu = () => {
        let iconMenu = document.querySelector('.icon-menu');
        let body = document.querySelector('body');
        let menuBody = document.querySelector('.menu__body');
        iconMenu.addEventListener('click', e => {
            iconMenu.classList.toggle(active);
            body.classList.toggle('lock');
            menuBody.classList.toggle('active');
        });
    }
    // iconMenu();

}());