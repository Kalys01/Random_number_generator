let gen = document.querySelector('h1');
let btn = document.querySelector('.btn');

btn.addEventListener('click', generator);

function generator(){
    gen.innerHTML = Math.floor(Math.random() * 999);
}

// console.log(Math.floor(Math.random() * 12));