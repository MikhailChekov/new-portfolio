/**
 * Copy src path from img to parrent tag with class 'ibg'.
 */
export default function ibg() {
    let ibgs = document.getElementsByClassName('ibg');
    if (ibgs.length) {
        for (let item of ibgs) {
            let imgSrc = item.children[0].attributes[0].value;
            item.style = `background-image: url("${imgSrc}");`;
        }
    } else{
        console.log('No elements with class "ibg"!');
    }
};