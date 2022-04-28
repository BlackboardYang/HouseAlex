
// var num = [4, 2, 5, 6, 8, 9, 1];
// // var i = 0;
// var j = 0;


// for (var i = 0; i < num.length - 1; i++) {
//     if (num[i] > num[i + 1]) {
//         var temp = num[i];
//         num[i] = num[i + 1];
//         num[i + 1] = temp;
//     }
//     var max = num[6]
// }
// console.log(max);
// window.alert("max value is " + max);

var button = document.getElementById("button1");
var show = document.getElementById("print");

function msOver(){
show.innerHTML += "Moused over!<br>";
}
function msOut(){
show.innerHTML += "Moused out!<br>";
}
function msClick(){
show.innerHTML += "You clicked it!<br>";
}
button.onmouseover = msOver;
button.onmouseout = msOut;
button.onclick = msClick;

// $(#button1).onmouseover(function(){
// 	$(#show).html($(#show).html() + "mouse over!(powered by jQuery)<br>")
// })


	  



