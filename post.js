function post(pseudo, message) {
    //let fil=document.getElementById("fil");
    let newP=document.createElement('p');
    newP.textContent='>>'+pseudo+' : '+message;
    document.getElementById("fil").prepend(newP);
}