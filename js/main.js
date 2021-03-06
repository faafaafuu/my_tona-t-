

const nodes = document.querySelectorAll('.item');
let items = Array.prototype.slice.call(nodes); // преобразует NodeList из айтимов в Array
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul')

items.forEach((e) => {
        
    e.addEventListener('click', (e) => { 
        const item = e.target
        removeItem(item)
    })
})

// Удаляет предмет
function removeItem(it) {
    if(it.classList.contains('item')) {
        it.classList.add('found')
        it.style.opacity = '0';
        setTimeout(() => {return it.parentNode.removeChild(it)}, 700)
        getMatch(it)
        tooltip();
        items.shift()
    }
    console.log(items.length)
    return tooltip();
}

// Находит предмет в списке
function getMatch(it) {
    for (let i = 0; i < listItems.length; i++) {
                
        if(it.classList.contains(listItems[i].textContent)){
            return listItems[i].classList.add('listFound')
        }   
    }
}

// Подсказка( подсвечивает элемент)
function tooltip() {
    for(let i = 0; i <= items.length; i++) {
        if(items.length){
            if(i == 0) {
                if(!items[i].classList.contains('found')) {
                    setTimeout(() => {
                        items[i].classList.add('tooltip')
                    }, 5000);
                }
            }  
        }
        else{
            gameOver()
        }
    }
}

tooltip()

//Конец игры
function gameOver() {
    const rel = document.querySelector('.rel')
    const freePlay = document.querySelector('.freePlay')
    const tutorialBlock = document.querySelector('.tutorialBlock')
    // const headerText = document.querySelector('.blink')
    // headerText.classList.remove('blink')
    // headerText.classList.toggle('blinkAfterWin')
    // headerText.textContent = 'congratulations you win!'
    tutorialBlock.style.display = 'none';
    freePlay.style.display = 'flex';
    rel.style.display = 'none';


}
// gameOver()