const numCounter = document.getElementById('showNum');

let value = 0;

const increment = document.querySelector('#incre');
const decrement = document.querySelector('#decre');
const reste = document.querySelector('#reste');
increment.addEventListener("click",()=>{
    value++;
    numCounter.innerHTML = value;
});
decrement.addEventListener("click",()=>{
    value--;
    numCounter.innerHTML = value;
});
reste.addEventListener("click",()=>{
    value = 0;
    numCounter.innerHTML = value;
});