let board = document.getElementById('board1');
let body = document.body;
let whiteC = document.getElementById('white');
let blackC = document.getElementById('black');
let button = document.getElementById('click');
let clickN = 0;
function white(){
  body.style.backgroundColor = 'white';
  body.style.color = 'black';
  whiteC.style.backgroundColor = '#565656B8';
  blackC.style.backgroundColor = '#FFFFFF00';
}
function black(){
  body.style.backgroundColor = 'black';
  body.style.color = 'white';
  blackC.style.backgroundColor = '#565656B8';
  whiteC.style.backgroundColor = '#FFFFFF00';
}
function Random(maxSum){
  let rs = Math.ceil(Math.random()*maxSum);
  return rs;
}
function info(){
  document.querySelector('p').style.marginTop = '25%';
  document.querySelector('p').innerHTML = 'Carefully this is a site with screamers, the author does not bear any responsibility';
  document.querySelector('p').style.height = '50px';
  document.querySelector('p').style.width = '50px';
}
function closeinfo(){
  document.querySelector('p').style.marginTop = '0%';
  document.querySelector('p').innerHTML = 'i';
  document.querySelector('p').style.height = '1px';
  document.querySelector('p').style.width = '1px';
}
let clickM = Random(5);
function onclicks(){
  if(clickN==clickM){
    board.style.display = 'none';
    body.style.backgroundColor = 'black';
    let img = document.createElement('img');
    img.src = '/file/scrimer.png';
    img.style.width = '100%';
    img.style.height = '100%';
    document.body.append(img)
    let audio = new Audio();
    audio.preload = 'auto';
    audio.src = '/file/scrimer.mp3';
    audio.play();
    setTimeout(()=>{
      location.reload();
    }, 7000)
  } else {
  let x = Random(100);
  let y = Random(100);
  clickN++;
  button.innerHTML = clickN;
  button.style.marginLeft = x+'%';
  button.style.marginTop = y+'%';
  }
}
