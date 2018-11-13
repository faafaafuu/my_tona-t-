(window.onload = function (){ 

    const items = document.querySelectorAll('.item');
    const listItems = document.querySelectorAll('li')
    
    items.forEach((e) => {
        e.addEventListener('click', (e) => {
            const item = e.target
           if(item.classList.contains('item')) {
            console.log(item.classList)
            item.classList.add('found')
            item.style.opacity = '0';
        
                for (let i = 0; i < listItems.length; i++) {
                    if(item.classList.contains(listItems[i].textContent)){
                        listItems[i].classList.add('listFound')
                    }   
                }
            }
        })
    })

    // function getMatch(a) {
    //     const  liMatch = listItems.filter(function(e) { e.textContent == a.classList.contains('e')});
    //     console.log(liMatch)
    //     return liMatch;
    // }
})