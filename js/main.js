// (window.onload = function (){
    const items = document.querySelectorAll('.item');
    
    document.body.onclick = function(e) {
        let a = e.target.nextElementSibling
        if(a.classList.contains('item') ) {
            return console.log('yep')
        }
        return console.dir(e.target)
    }
    
    // items.forEach((e) => {
    //     e.addEventListener('click', (e) => {
    //        return  console.dir(e.target)
    //     })
    // } )
// })