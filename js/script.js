function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('hidden');
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("imgs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "inline";  
  setTimeout(carousel, 4000);    
}

