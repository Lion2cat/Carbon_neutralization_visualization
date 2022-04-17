let items = document.getElementsByClassName('mapitem');
let mapLen = items.length;
function showmap(params) {
    let i = 0;
    let interval = setInterval(() => {
        items[i].setAttribute('style', 'display: block;');
        i++;
        if (i == mapLen) {
            clearInterval(interval);
        }
    }, 600);

}