var guest 
var peoplename = [];
var i

function a1(){
    guest = document.getElementById("input1").value;
    peoplename.push(guest);
    document.getElementById("lista").innerHTML = peoplename.toString()  
}
function a2(){
    peoplename.sort()
    document.getElementById("lista3").innerHTML = peoplename.toString()
}
function a3(){
    guest = document.getElementById("input1").value
    peoplename.push(guest)
    document.getElementById("lista2").innerHTML = peoplename.toString()
}
function pesquisar(){
    var s = document.getElementById("input2").value;
    var found = 0;
    var j;
    console.log(s)
    for(j = 0; j<peoplename.lengt; j++ ){
        if(s == peoplename[j]){
            found = found + 1
        
        }
    }
    document.getElementById("quantidade").innertHTML = "Nome encontrado" + found + "vez(es)";
    console.log("Nome encontrado" +found+ "vez(es)")
    
        
}