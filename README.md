<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style1.css">
    <link rel="stylesheet" href="app1.js">
    <title>Sİnema Rezervasyon</title>


<style>body{
    background-color: #292929;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
   
}
.seat{
    background-color: #444451;
    height: 35px;
    width: 35px;
    margin: 3px;
    border-radius: 11px;
}
.row{
    display: flex;
    
}
.seat.selected{
    background-color: #f6eb6f;
}
.seat.reserved{
    background-color: #fff;
}
.seat:nth-of-type(2){
    margin-right: 20px;
}
.seat:nth-of-type(7){
    margin-left: 20px;
}
.screen{
    background-color: #fff;
    height: 80px;
    width: 100%;
    margin: 20px 0;
    box-shadow: 0 3px 8px rgba(255,255,255,0.7);

}
.movie-list{
   margin: 20px 0 0 120px;
   width: 50%;
   
}
.info{
    background-color: rgba(0,0,0,0.2);
    padding: 5px 10px;
    color: #777;
    list-style-type:none;
    display: flex;
    font-size: 23px;

}
.info li{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
}
.seat:not(.seat.reserved):hover{
    cursor: pointer;
    transform: scale(1.3);
    transition:ease-in-out;
}
 .text{
    color:gold;
    font-size: 20px;
}
#count{
    color: darkgrey;
}
#amount{
    color:darkgray;
}</style>
    </head>


    <body>
 <div class="container"> 
    <div class="screen"></div>
    <div class="row"> 
        <div class="seat"></div>
        <div class="seat "></div>
        <div class="seat "></div>
        <div class="seat reserved "></div>
        <div class="seat reserved"></div>
        <div class="seat "></div>
        <div class="seat"></div>
        <div class="seat"></div>
    </div>
    <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
    </div>
    <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
    </div>
    <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
    </div>
    <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
    </div>
    <div class="movie-list">
        <select id="movie" style="font-size: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif;
                                 color:crimson; background-color:black;">
            <option disabled>Film seçiniz</option>
            <option value="50">Marvel</option>
            <option value="40">Oppenhiemer</option>
            <option value="35">Barbie</option>
        </select></div>
        <ul class="info">
            <li>
                <div class="seat selected"></div>
                <span><b>Seçili</b></span>
            </li>
        </ul>
        <ul class="info">
            <li>
                <div class="seat"></div>
                <span>boş</span>
            </li>
        </ul>
        <ul class="info">
            <li>
                <div class="seat reserved"></div>
                <span>dolu</span>
            </li>
        </ul>
        <p class="text">
            <span id="count">0</span> adet koltuk için hesaplanan ücret <span id="amount">0</span> TL
        </p>
 </div>

<script src="app1.js">const container = document.querySelector('.container');
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
    </script>
    </body>
</html>
