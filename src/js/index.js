const smileWrapper = document.getElementById('header-smile');
const smile = document.getElementById('smile');
const smileSlogan = document.getElementById('smile-slogan');
const smileSlogan2 = document.getElementById('smile-slogan2');
const smileEyes = document.getElementById('smile-eyes');
const smileMouth = document.getElementById('smile-mouth');
const animateContainer = document.getElementById('animate-container');

let smileTouched = false;

smileWrapper.onmouseenter = () => {
    smileTouched = true;
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }


    let top = getRandomInt(60) + 'vh';
    let left = getRandomInt(80) + 'vw';

    // do the animate effect to smile

    smileSlogan.style.display = 'none';
    smileSlogan2.style.display = 'none';
    smile.classList.toggle('animate');
    smileEyes.classList.toggle('animate');
    smileMouth.classList.toggle('animate');


    // change position smile
    smileWrapper.style.left = left; 
    smileWrapper.style.top = top;

    
    // delete animate class after animate is complete
    setTimeout(()=> {
        smile.classList.toggle('animate');
        smileEyes.classList.toggle('animate');
        smileMouth.classList.toggle('animate');
    }, 1200);

};

animateContainer.onmouseleave = () => {
    if(smileTouched){
        smileWrapper.style.left = '60vw'; 
        smileWrapper.style.top = '20vh';
        smileWrapper.style.width = '300px';
        smileWrapper.style.height = '300px';
        setTimeout(()=> {
            smileSlogan2.style.display = 'block';
        }, 1000);
    }
}