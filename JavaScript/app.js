$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });   
  });

let quote = document.getElementById('hero-quote');
let divider = document.getElementById('hero-divider');
let name = document.getElementById('hero-name');
let circleLeft = document.getElementById('left');
let circleRight = document.getElementById('right');

let metalGearSolidQuote = '"Find something to believe in, and find it for yourself. When you do, pass it on to the future"';
let metalGearSolidName = 'Solid Snake (Metal Gear Solid 2)';

let unchartedQuote = '"I Havent Thought That Far Ahead."';
let unchartedName = "Nathan Drake (Uncharted 2)";

let redDeadQuote = '"If you find yourself in a hole, the first thing to do is stop diggin"';
let redDeadName = "John Marston (Red Dead Redemption)";

let assassinsCreedQuote = '"Better to be content in this life, than aspire to it in the next."';
let assassinsCreedName = "Ezio Auditore (Assassins Creed II)";

let oddworldQuote = "Follow me!";
let oddworldName = "Abe (Oddworld)";

let quoteIndex = 0;


function FadeText(){
    quote.classList.toggle('fade');
    divider.classList.toggle('fade');
    name.classList.toggle('fade');
}

function ChangeText(){

    if(quoteIndex == 0)
    {
        quote.textContent = unchartedQuote;
        name.textContent = unchartedName;
        quoteIndex++;
        return;
    }

    if(quoteIndex == 1)
    {
        quote.textContent = redDeadQuote;
        name.textContent = redDeadName;
        quoteIndex++;
        return;
    }

    if(quoteIndex == 2)
    {
        quote.textContent = assassinsCreedQuote;
        name.textContent = assassinsCreedName;
        quoteIndex++;
        return;
    }

    if(quoteIndex == 3)
    {
        quote.textContent = oddworldQuote;
        name.textContent = oddworldName;
        quoteIndex++;
        return;
    }

    if(quoteIndex == 4)
    {
        quote.textContent = metalGearSolidQuote;
        name.textContent = metalGearSolidName;
        quoteIndex = 0;
        return;
    }

    console.log(quoteIndex)

}

setInterval(ChangeText, 10 * 1000); 
setInterval(FadeText, 5 * 1000); 
