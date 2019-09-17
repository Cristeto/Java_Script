function lightOn(){
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif';
}

function lightOff(){
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif';
}

var status = 0;
function toggleLight() {
  if(status==0) {
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif';
    status=1;
  } else {
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif';
    status=0;
  }
}
