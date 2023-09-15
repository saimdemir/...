const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount'); 
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');


container.addEventListener('click',function(e) {
if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved') ) {
    e.target.classList.toggle('selected');
    calculateTotal();
      
       
}
});

select.addEventListener('change',function(e){
    calculateTotal();
})
const selectedSeatArr = [];
const seatsArr = [];
selectedSeats.forEach(function(seat) {
    selectedSeatArr.push(seat);
});

// spread method 

seats.forEach(function(seat){
    seatsArr.push(push);
});



let selectedSeatIndexs = selectedSeatArr.map(function(seat){
    return seatsArr.indexOf(seat);
});


function calculateTotal(){
    let selectedSeatCount = container.querySelectorAll('.seat.selected').length - 1;
    let price = select.value;

      count.innerText = selectedSeatCount;
      amount.innerText = selectedSeatCount * price;
      saveToLocalStroage(selectedSeatIndexs);

}

function saveToLocalStroage(indexs) {
    localStorage.setItem('selectedseats',JSON.stringify(indeks));
    localStorage.setItem('selectedMovieIndex',select.selected);
}

