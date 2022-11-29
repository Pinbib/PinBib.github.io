var pages = document.querySelectorAll('page');
var pagesList = ['SCRIMER'];
var pagesL = pages.length;
var i = 0;

while(i<pagesL){
    if(pages[i]==pagesList[i]){
        var scrimer = document.createElement('a');
        scrimer.href = '/workspaces/PinBib.github.io/SCRIMER/index.html';;
        scrimer.target = '_blank';
        scrimer.click();
    }
}
