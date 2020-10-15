/**
 * * Usage: TypingText(container, textArr [, delArr]);
 * container - Container for text Typing.
 * textArr -  array with text lines. 
 * delArr - array   -  [line, count] line - line where you need erase letters, count - how many.
*/

export default function TypingText(container, textArr, delArr) {
    let [delLine, delCount] = delArr;
    let elemText = '';
    
    // pause before letters typing
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function handleLine(array) {
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            await handleLetter(item);
            // check for erase letters in our line
            if(delArr.length) {
                if(i === delLine){
                    await eraseLetters();
                }
            }
        }
    }

    async function eraseLetters() {
        for(let i = 0; i < delCount; i++){
            elemText = elemText.slice(0,-1);
            await delay(600);
            container.innerHTML = elemText;
        }
    }

    async function handleLetter(str) {
        for(const letter of str){
            elemText += letter;
            await delay(100);
            container.innerHTML = elemText;
        }
        
    }

    handleLine(textArr);
}