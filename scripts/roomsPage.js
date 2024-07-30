import { rooms } from "./rooms.js";


const container = document.querySelector('.add-rooms');

let HTML;

rooms.forEach((room)=>{
    let img1Style;
    if(room.img === "images/Room-2.jpg"){
        room.img = "images/Room-1.jpg"
    }

    HTML = ` 
    <div class="container">
        <div>
            <img src="${room.img}" class="room-image" ${img1Style}>
            </div>

        <div class="about-room">

        <span>
        <div class="room-detail">
    
        <h2>${room.roomDetail}</h2>
    
        <div class="statics">
            <h3 class="price-for">Price For: 
                <span class="for-color">${room.priceFor} Adult</span></h3>
            <h3 class="bed-type">Bed Type: 
                <span class="for-color">${room.bedType}</span></h3>
            <h3 class="room-size">Room Size: 
                <span class="for-color">${room.roomSize}m<sup>2</sup></span></h3>
            <div class="call">
            <i class="fa-solid fa-phone contact-detail"></i><span class="phone">: +251966701153</span>
            </div>        
            <button class="call-to-book-btn"><a href="tel: + 251966701153" style="color: white; text-decoration: none;">Call To Book</a></button>
        </div>
    
        </div>
    
        </span>
        </div>
    </div>
`;

        container.innerHTML += HTML;
});


$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $('.my_up_bttn').fadeIn(250);
        }
        else{
            $('.my_up_bttn').fadeOut(250);
        }
    });
    $('.my_up_bttn').click(function(){
        $('html,body').animate(
            {scrollTop:0},400
            );
    });
});