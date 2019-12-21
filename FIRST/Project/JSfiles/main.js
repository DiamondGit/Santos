var opened = false;

function slideSearch() {
    let search = $('#search_bar');
    if(search.length > 0 && search.val() !== ''){
        search.css("border-color","red");
        alert("Sorry! But your item:\n"+ document.getElementById('search_bar').value+"\nwas not found!");
    }
    else{
        search.css("border-color",'black');
    }
    document.getElementById('search_bar').value="1";
}

function uniNav(){
    var x = document.getElementById("div-nav-slide");
    if (x.style.width==='280px'){closeNav()}
    else {openNav()}
}

function openNav() {
    opened = true;
    document.getElementById("arrow").style.left = '-70px';
    document.getElementById("div-nav-slide").style.width = "280px";
    document.getElementById("div-nav-main").style.marginLeft = "280px";
    document.getElementById("shadow").style.backgroundColor = "rgba(0,0,0,0.7)";
    document.getElementById("shadow").style.zIndex = "7";
}

function closeNav() {
    opened = false;
    document.getElementById("div-nav-slide").style.width = "0";
    document.getElementById("div-nav-main").style.marginLeft= "0";
    document.getElementById("shadow").style.backgroundColor = "transparent";
    document.getElementById("shadow").style.zIndex = "-10";
}
function preOpen() {
    document.getElementById("arrow").style.left = '20px';
    document.getElementById("div-nav-slide").style.width = '20px';
}
function Normal() {
    if (!opened){
        document.getElementById("div-nav-slide").style.width = '0';
        document.getElementById("arrow").style.left = '-70px';
    }
}