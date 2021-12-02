function post(pseudo, message) {
    let fil=document.getElementById("fil");
    let newP=document.createElement('p');
    fil.append(newP);
    newP.textContent='>>'+pseudo+' : '+message;
    fil.prepend(newP);
}