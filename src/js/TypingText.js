export default function TypingText(container, delLetCount ,textArr) {
    textArr  = textArr  || 'Нужно указать массив с текстом для TypingText';
    
    let out = '',
        letCount = 0,
        line = 0;
    
    function typeLine (){
        let timeout = setTimeout(() => {
            out += text[line][count];
            container.innerHtml = out;
        })
    }
    function eraseLine (){
        // for(let i = 0; i < delLetCount.length; i++)
        let timeout = setTimeout(() => {
            out -= text[line][count];
            container.innerHtml = out;
        }, 200);
    }
}