const btn = document.getElementById ('btn');
const ph = document.getElementById ('p');
const input = document.getElementById ('input');


ph.innerHTML=localStorage.getItem('value');


btn.addEventListener ('click', (e) => {
    ph.innerHTML=input.value
    localStorage.setItem("value", input.value);
    ph.innerHTML=input.value
    ph.innerHTML=localStorage.getItem('value');
   
}
) 