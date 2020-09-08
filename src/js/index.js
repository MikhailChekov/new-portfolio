//get elements for smile animation controls
const smileWrapper = document.getElementById('header-smile'),
    smile = document.getElementById('smile'),
    smileSlogan = document.getElementById('smile-slogan'),
    smileSlogan2 = document.getElementById('smile-slogan2'),
    smileEyes = document.getElementById('smile-eyes'),
    smileMouth = document.getElementById('smile-mouth'),
    animateContainer = document.getElementById('animate-container'),
    socialLinks = document.getElementById('socials');

let isSmileTouched = false;

//back on start smile after animate function
const smileBack = () => {
    if(isSmileTouched){
        smileWrapper.style.left = '60vw'; 
        smileWrapper.style.top = '20vh';
        smileWrapper.style.width = '300px';
        smileWrapper.style.height = '300px';
        setTimeout(()=> {
            smileSlogan2.style.display = 'block';
        }, 1000);
    }
}
// when smile was touched 
smileWrapper.onmouseenter = () => {
    isSmileTouched = true;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let top = getRandomInt(50) + 'vh';
    let left = getRandomInt(80) + 'vw';

    // do the animate Rotate effect to smile
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

// back smile to start
socialLinks.onmouseenter = smileBack;
animateContainer.onmouseleave = smileBack;