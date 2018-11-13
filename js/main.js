(window.onload = function (){ 

    const items = document.querySelectorAll('.item');
    const listItems = document.querySelectorAll('li')

    // Удаляет предмет
    items.forEach((e) => {
        e.addEventListener('click', (e) => {    
            const item = e.target

            if(item.classList.contains('item')) {
                item.classList.add('found')
                item.style.opacity = '0';

                getMatch(item)
            }
        })
    })

    // Находит предмет в списке
    function getMatch(it) {
        for (let i = 0; i < listItems.length; i++) {
                    
            if(it.classList.contains(listItems[i].textContent)){
                return listItems[i].classList.add('listFound')
            }   
        }
    }
})