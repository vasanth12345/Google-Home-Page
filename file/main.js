
var bur= document.querySelector(".bar");
var navl=document.querySelector(".navbar");
var navclose = document.querySelector(".closenav");
  
bur.addEventListener("click", () => { 
navl.classList.toggle("open");

navclose.classList.add('closenavopen');

 const multicon = document.querySelector('.multicon');

if(multicon.classList.contains('displayflex')){
dotbar();
}

});

/*_______________________________*/

function navacleration() {
  
var nav=document.querySelector("nav");

nav.classList.remove('open');
navclose.classList.remove('closenavopen');
}

/*_______________________________*/

function dotbar(){
  const multicon = document.querySelector('.multicon');
  
  multicon.classList.toggle('displayflex');
  
}

/*________________________________*/

function tamil() {

let text = document.getElementById('allbtn');
let imgbtn = document.getElementById('imgbtn');
let signin = document.getElementById('signin');
let offered = document.getElementById('offered');
let gmail = document.getElementById('gmail');
let india = document.getElementById('india');
let searchbtn = document.getElementById('searchbtn');
let luckybtn = document.getElementById('luckybtn');
let weather = document.getElementById('weather');
let rest = document.getElementById('rest');
let watch = document.getElementById('watch');
let sports = document.getElementById('sports');


//alert('hshsh'); // all btn
text.style.width = "60px";
text.style.paddingLeft = "0px";
text.style.overflowX = "scroll";
text.setAttribute('lang', 'ta');
text.textContent= "ஏல்லாம் ";

//img btn
imgbtn.setAttribute('lang', 'ta');
imgbtn.textContent= "படங்கள்";

//sign ib brn
signin.style.paddingLeft = "7px";
signin.style.paddingRight = "7px";
signin.setAttribute('lang', 'ta');
signin.textContent= "உள்நுழைக";

//offered
offered.setAttribute('lang', 'ta');
offered.textContent= "கூகிள் வழங்கியது:";

//gmail
gmail.style.width = "75px";
gmail.setAttribute('lang', 'ta');
gmail.textContent= "ஜிமெயில்";

//india
india.setAttribute('lang', 'ta');
india.textContent= "இந்திய ";

//searchbtn
searchbtn.setAttribute('lang', 'ta');
searchbtn.textContent= "கூகிளில் தேடு ";

//luckybtn
luckybtn.setAttribute('lang', 'ta');
luckybtn.textContent= "நான் அதிர்ஷ்டசாலி என்று நினைக்கிறேன்";

//gicons
weather.setAttribute('lang', 'ta');
weather.textContent = "வானிலை";
sports.setAttribute('lang', 'ta');
sports.textContent = "விளையாட்டு ";

watch.setAttribute('lang', 'ta');
watch.textContent = "என்ன பார்க்க";

rest.setAttribute('lang', 'ta');
rest.textContent = "உணவகம் ";


}



function english(){
  
let text = document.getElementById('allbtn');
let imgbtn = document.getElementById('imgbtn');
let signin = document.getElementById('signin');
let gmail = document.getElementById('gmail');
let searchbtn = document.getElementById('searchbtn');
let luckybtn = document.getElementById('luckybtn');


// allbtn
text.style.width = "40px";
text.setAttribute('lang', 'en');
text.textContent= "All ";

//imgbtn
imgbtn.setAttribute('lang', 'en');
imgbtn.textContent= "Images";

//sign in btn
signin.style.paddingLeft = "18px";
signin.style.paddingRight = "18px";
signin.setAttribute('lang', 'en');
signin.textContent= "Sign In";

//Google offered in:
offered.setAttribute('lang', 'en');
offered.textContent= "Google offered in:";

//gmail
gmail.setAttribute('lang', 'en');
gmail.textContent= "Gmail";

//india
india.setAttribute('lang', 'en');
india.textContent= "India";

//searchbtn
searchbtn.setAttribute('lang', 'en');
searchbtn.textContent= "Google Search";

//luckybtn
luckybtn.setAttribute('lang', 'en');
luckybtn.textContent= "I'am Feeling Lucky";

//gicons
weather.setAttribute('lang', 'en');
weather.textContent = "Weather";
watch.setAttribute('lang', 'en');
watch.textContent = "What To Watch";
sports.setAttribute('lang', 'en');
sports.textContent = "Sports ";
rest.setAttribute('lang', 'en');
rest.textContent = "Restaurant";

}

