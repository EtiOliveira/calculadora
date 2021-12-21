function on(){
    document.getElementById('resultado').innerHTML = ''

}
function insert(num){
   
   var numero = document.getElementById('resultado').innerHTML

   document.getElementById('resultado').innerHTML = numero + num
}
function calculater(){
    var resultado = document.getElementById('resultado').innerHTML 
    

if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado)
} else {
    document.getElementById('resultado').innerHTML = window.alert('erro')
   document.getElementById('resultado').innerHTML = '' 
}

}
function raiz(resultado){
var r2 = resultado/2
document.getElementById('resultado').innerHTML = r2

}