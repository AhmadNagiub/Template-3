// ///////////////////////////////////////////////////// Counter DOwn Time /////////////////////////////////////////////////////
//notes on code
//getTime() => get time in milli seocnds
// date begin with 1-1-1970 until now for  this function
//1000ms => 1s 
//end notes

// End of the year
let CountDownDate = new Date("Dec 31,2021 23:59:59").getTime(); //1640987999000

let counter = setInterval(()=>{
    //Date Now
    let DateNow = new Date().getTime();
    // find diff in time between now and the identified time
    let dateDiff = CountDownDate - DateNow;
    // get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let modulesDays = dateDiff % (1000 * 60 * 60 * 24) // get decimal fractions
    let hours = Math.floor(modulesDays / (1000 * 60 * 60));
    let Minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60 ));
    let Seconds = Math.floor(dateDiff % (1000 * 60 ) / (1000 ));
    
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = Minutes <10 ? `0${Minutes}`:Minutes;
    document.querySelector('.seconds').innerHTML = Seconds < 10 ? `0${Seconds}` : Seconds;

    if(dateDiff < 0)
    {
        clearInterval(counter)
    }
}, 1000)

///////////////////////////////////////////////////////// Animate with scroll to skills section /////////////////////////////////////////////////////
// skill section information
let skills = document.querySelector(".Ourskills");
let spans = document.querySelectorAll(".the-progress span");
// offsetTop => the identified section that i want to reach or i passed it

// State section infomrations
let Stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");
let isStarted = false;

// scroll to top informatio
let up = document.querySelector(".up")

window.onscroll = function () {
    if(window.scrollY >= skills.offsetTop - 300){
        console.log(skills.offsetTop)
        spans.forEach(span => {
            span.style.width = span.dataset.width;
        });
    }
    if (window.scrollY <= 7100){
        spans.forEach(span => {
            span.style.width = 0;
        });
    }

    // increase Stats
    if(window.scrollY >= Stats.offsetTop -300 ){
        console.log('done')
        if(!isStarted){
            numbers.forEach((number) => StartCount(number));
        }
        isStarted = true;
    }


    // scroll to top
    this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");

}
///////////////////////////////////////////////////////// Animate with scroll to increase States section /////////////////////////////////////////////////////
function StartCount(element){
    let goal = element.dataset.goal;
    let time = 2400/goal
    let counter = setInterval(()=>{
        element.textContent++;
        if(element.textContent == goal){
            clearInterval(counter)
        }
    
    },time)
}

///////////////////////////////////////////////////////// scroll to Top /////////////////////////////////////////////////////
up.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}