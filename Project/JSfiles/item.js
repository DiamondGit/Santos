var slideIndex = 1;
showDivs(slideIndex);
showDivsFull(slideIndex);
function plusDivs(n){
    showDivs(slideIndex += n);
    showDivsFull(slideIndex);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
    showDivsFull(slideIndex);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("display-badge");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].innerHTML = 'radio_button_unchecked';
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].innerHTML = 'lens';
    imageZoom('mySlides',"ResultZoom");
}
function showDivsFull(n) {
    var i;
    var x = document.getElementsByClassName("mySlides_full");
    var dots = document.getElementsByClassName("display-badge_full");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].innerHTML = 'radio_button_unchecked';
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].innerHTML = 'lens';
}
function imageZoom(imgClass, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementsByClassName(imgClass)[slideIndex-1];
    result = document.getElementById(resultID);
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    img.parentElement.insertBefore(lens, img);
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
        var pos, x, y;
        e.preventDefault();
        pos = getCursorPos(e);
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
        if (x < 0) {x = 0;}
        if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
        if (y < 0) {y = 0;}
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}
function open_closeFull(){
    let x = document.getElementById('fullScreen');
    let vis = document.body;
    if (x.style.display === 'block'){
        x.style.display = 'none';
        vis.style.overflow = 'visible';
    }
    else {
        x.style.display = 'block';
        vis.style.overflow = 'hidden';
    }
}
function addAmount(number){
    let element = document.getElementById('amount');
    if (parseInt(element.value)+number>=0 && parseInt(element.value)+number<=9999){
        element.value = parseInt(element.value)+number;
    }
    checkAmount();
}
function checkAmount(){
    let element = document.getElementById('amount');
    let total = document.getElementById('total');
    let price = document.getElementById('price');
    let output = document.getElementById('outputOfPayment');
    let shipping = 0;
    if (output.innerHTML.length>0){
        shipping = parseFloat(output.innerHTML);
    }
    if (parseInt(element.value)<1){
        element.value = 1;
    }
    if (parseInt(element.value)>9999){
        element.value = 9999;
    }
    total.innerHTML = Math.round((parseInt(element.value)*parseFloat(price.getAttribute('data-price'))+shipping)*100)/100;
    makeSound();
}
function makeSound(){
    let sound = new Audio('../../Media/Message-notification.mp3');
    sound.play();
}
function SoundBuyNow(){
    let sound = new Audio('../../Media/nice-work.wav');
    sound.play();
}
function SoundAddToCart(){
    let sound = new Audio('../../Media/whiff.wav');
    sound.play();
}
function changeShip(){
    let types = document.getElementById("typeOfShips");
    let status = document.getElementById('statusOfPayment');
    let output = document.getElementById('outputOfPayment');
    document.getElementById('outputOfDay').innerHTML = types.options[types.selectedIndex].value;
    status.innerHTML = 'Shipping: $';
    switch(types.selectedIndex){
        case 0: status.innerHTML = 'Free Shipping';output.innerHTML = "";break;
        case 1:output.innerHTML = "4.99";break;
        case 2:output.innerHTML = '13.49';break;
        case 3:output.innerHTML = '31.25';break;
        case 4:output.innerHTML = '0.01';break;
    }
    checkAmount();
}
function openCom(){
    $(document).ready(function(){
        $('#comment-container').slideToggle(200);
    })

}