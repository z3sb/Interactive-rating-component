const numbers = document.querySelectorAll('.number');
numbers.forEach((e) => {
  e.addEventListener('click', ()=>{
    numbers.forEach(e => e.classList.remove('active'))
    e.classList.toggle('active');
  });
})
const button = document.getElementById('btn');
button.addEventListener('click', () => {
  let cardOne = document.querySelector('.container .card-1')
  let cardTwo = document.querySelector('.container .card-2')
  cardOne.style.display = 'none';
  cardTwo.style.display = 'flex';
  let bull = document.querySelector('.select-element');
  const selectedNumber = document.querySelector('.number.active');
  bull.innerHTML = `You selected ${selectedNumber.textContent} out of 5`

})