// let btns = document.querySelectorAll('.btns')

// btns.forEach(btn =>{
//     btn.addEventListener('click', (e)=>{
//         let target = e.target
//         target.style.color = 'blue'
//         console.log("Target: ", target);
//     })
// })

let menuBtn = document.querySelector('#menu-btn')
let nav = document.querySelector('#nav')

let openMenu = document.querySelector('#menu-btn')
let closeMenu = document.querySelector('#close-menu')

menuBtn.addEventListener('click', ()=>{
    nav.classList.toggle('hide')
    openMenu.classList.toggle('hide')
    closeMenu.classList.toggle('hide')
})

closeMenu.addEventListener('click', ()=>{
    nav.classList.toggle('hide')
    openMenu.classList.toggle('hide')
    closeMenu.classList.toggle('hide')
})