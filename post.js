function post(pseudo, message) {
    let fil=document.getElementById("fil");
    let newP=document.createElement('p');
    newP.textContent='>>';//+pseudo+' : '+message;
    fil.prepend(newP);
}