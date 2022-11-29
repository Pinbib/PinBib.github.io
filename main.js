var pages = document.querySelectorAll('.page');
var pagesList = ['SCRIMER'];
pages[0].onclick = (event)=>{
    var scrimer = document.createElement('a');
    scrimer.href = 'https://pinbib.github.io/SCRIMER/index.html';
    scrimer.target = '_blank';
    scrimer.innerHTML = 'click';
    pages[0].innerHTML = scrimer;
}
