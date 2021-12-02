function post(pseudo, message) {
    let fil=document.getElementById("fil");
    let newP=document.createElement('p');
    fil.append(newP);
    let blabla = pseudo + " " + message;
    newP.innerHTML = newP.append(blabla);

    //newP.textContent='>>'+pseudo+' : '+message;
    //fil.prepend(newP);
}