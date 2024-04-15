const yellowBtn = document.querySelector(".yellow");
const blueBtn = document.querySelector(".blue");
const redBtn = document.querySelector(".red");


yellowBtn.addEventListener("click", ()=>{
    const box = document.querySelector(".box");
    box.innerHTML = "<img src='yellow.png' alt='Finge que o dustin tá aqui'>"
    box.innerHTML += "<p class='dustin_p' >Feliz aniversário Giovanna! Nós temos muito em comum, você faz geografia e gosta de TERRA igual eu!</p>"
    box.innerHTML+='<a class="button-28 yellow" role="button" href="https://www.youtube.com/watch?v=HZ7bY_a0UtE" >Clique aqui</a>';
})

redBtn.addEventListener("click", ()=>{
    const box = document.querySelector(".box");
    box.innerHTML = "<img src='red.png' alt='Finge que o shane tá aqui'>"
    box.innerHTML += "<p class='shane_p' >Eae Giovanna! Fiquei sabendo que hoje é seu aniversário! Parabéns aí e não se esqueça de ser leve como o vento e radical ao mesmo tempo!</p>"
    box.innerHTML+='<a class="button-28 red" role="button" href="https://www.youtube.com/watch?v=HZ7bY_a0UtE" >Clique aqui</a>';
})

blueBtn.addEventListener("click", ()=>{
    const box = document.querySelector(".box");
    box.innerHTML = "<img src='blue.webp' alt='Finge que a tori tá aqui'>"
    box.innerHTML += "<p class='shane_p' >Ei Giovanna, parabéns pelo seu aniversário! Gostaria de dizer que você parece um golfinho e que o Blake já tem dona! :)</p>"
    box.innerHTML+='<a class="button-28 blue" role="button" href="https://www.youtube.com/watch?v=HZ7bY_a0UtE" >Clique aqui</a>';
})