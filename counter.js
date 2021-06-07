var dec=document.getElementById('dec');
var res=document.getElementById('res');
var inc=document.getElementById('inc');

var number=document.querySelector('h2');

 var begin=0;



inc.addEventListener('click', increase);

function increase(){
    
    begin++;
    number.innerHTML=begin;
    if(begin>0){number.style.color='blue'} else if(begin==0){number.style.color='white'};
 }



res.addEventListener('click', reset);

function reset(){

begin=0;
number.innerHTML=begin;
if(begin==0){number.style.color='white'}
}



dec.addEventListener('click', decrease);

function decrease(){

    begin--;
    number.innerHTML=begin;
    if(begin<0){number.style.color='red'}else if(begin==0){number.style.color='white'};
}


