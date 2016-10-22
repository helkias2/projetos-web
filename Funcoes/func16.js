
// window.onload = function(){
// 	doceument.getElementByIb("1").onclick = function(){
// 		alert("teste");
// 	}
// }
// teste = function(){
// 	alert("teste");
// }


var findMax = function() {
    var i;
    var max = -Infinity;
    for(i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(4,5));
//document.getElementById("demo").innerHTML = findMax(4, 5, 6);