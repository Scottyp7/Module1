
function calc() {    

    let random6 =  Math.floor(Math.random() * 6) + 1;
    let random10 = Math.floor(Math.random() * 10) + 1 ;

    if(document.getElementById("box6").checked == true) {document.getElementById("random").innerText=random6} 
    else if(document.getElementById("box10").checked == true) {document.getElementById("random").innerText=random10}
    else alert("Please Select a box before clicking submit");
}
