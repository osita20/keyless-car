function checkDriverAge(age){
    var msg = '';
    if (Number(age)<18){
    msg = "sorry you are too young to drive";
}
else if (Number(age)===18){
   msg = "powering on enjoy your first ride";
}
else if (Number(age)>18){
 msg = "congratulation enjoy your ride"
} 

return msg;
}
var checkDriverAge2 = function(){
var age = prompt("Enter your age");
    var msg = '';
    if (Number(age)<18){
    msg = "sorry you are too young to drive";
}
else if (Number(age)===18){
    msg = "powering on enjoy your first ride";
}
else if (Number(age)>18){
    msg = "congratulation enjoy your ride"
} 
else {
    alert("Wrong input");
}
 return msg;
} 

alert(checkDriverAge(73));
alert(checkDriverAge2());