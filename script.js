//the vArs 
var createbutton = document.querySelector("#Buttonfunction");
var button1 = document.querySelector("#long");
var button2 = document.querySelector("#medium");
var button3 = document.querySelector("#short");
var button4 = document.querySelector("#uppercase");
var button5 = document.querySelector("#lowercase");
var button6 = document.querySelector("#specialchar");
var button7 = document.querySelector("#numbers");
var uppercase4 = 0;
var lowercase5 = 0;
var special6 = 0;
var numss7 = 0;


//generate the password
function generatePassword(){
    console.log("click");

    //length
    if(document.getElementById("long").disabled == true){
    var length = 24;
    }
    else if(document.getElementById("medium").disabled == true){
        var length = 12;
        }
        else if(document.getElementById("short").disabled == true){
            var length = 124;
        }
    
    //char set
    var charset = "";
    var cap =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var spchar = "@#!$&-~";
    var num = "0123456789";
    var lower = "abcdefghijklmnopqrstuvwxyz"
    if(uppercase4 == 1){
        var charset = charset + cap;
    }
    if(lowercase5 == 1){
        var charset = charset + lower;
    }
    if(special6 == 1){
        var charset = charset + spchar;
    }
    if(numss7 == 1){
        var charset = charset + num;
    }

    //computation
    var  retVal = "";

    if(charset == "")
    {
        retVal ="ERROR"
    }
    else
    {
        for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));}
    }
    console.log(retVal);
    document.getElementById("textarea").innerHTML = retVal;
    return retVal;
    
}
createbutton.addEventListener("click",generatePassword);

//make the long medium short buttons work together
function buttonNature1(){
      document.getElementById("long").disabled = true;
      document.getElementById("short").disabled = false;
      document.getElementById("medium").disabled = false;
      if(document.getElementById("long").disabled == true){
        document.getElementById("long").style.backgroundColor = 'red';
        document.getElementById("short").style.backgroundColor = '#2cc732';
        document.getElementById("medium").style.backgroundColor = '#2cc732';
      }
}
function buttonNature2(){
    document.getElementById("long").disabled = false;
    document.getElementById("short").disabled = false;
    document.getElementById("medium").disabled = true;
    if(document.getElementById("medium").disabled == true){
        document.getElementById("medium").style.backgroundColor = 'red';
        document.getElementById("short").style.backgroundColor = '#2cc732';
        document.getElementById("long").style.backgroundColor = '#2cc732';
      }
}
function buttonNature3(){
    document.getElementById("long").disabled = false;
    document.getElementById("short").disabled = true;
    document.getElementById("medium").disabled = false;
    if(document.getElementById("short").disabled == true){
        document.getElementById("short").style.backgroundColor = 'red';
        document.getElementById("long").style.backgroundColor = '#2cc732';
        document.getElementById("medium").style.backgroundColor = '#2cc732';
      }
}
button1.addEventListener("click",buttonNature1);
button2.addEventListener("click",buttonNature2);
button3.addEventListener("click",buttonNature3);

//give the rest of the buttons some value
function numbercasebutton(){
    var butto1 = document.getElementById("numbers");//num
    console.log("rawr");
    if(numss7 == 0){
        numss7++;
        butto1.style.backgroundColor = 'red';
    }
    else{
        numss7--;
        butto1.style.backgroundColor = '#2cc732';
    }
    console.log(numss7);
} 

function uppercasebutton(){
    var butto = document.getElementById("uppercase");//upercase
    console.log("rawr");
    if(uppercase4 == 0){
        uppercase4++;
        butto.style.backgroundColor = 'red';
    }
    else{
        uppercase4--;
        butto.style.backgroundColor = '#2cc732';
    }
    console.log(uppercase4);
}

function lowercasebutton(){
    var butto2 = document.getElementById("lowercase");//lowercase
    console.log("rawr");
    if(lowercase5 == 0){
        lowercase5++;
        butto2.style.backgroundColor = 'red';
    }
    else{
        lowercase5--;
        butto2.style.backgroundColor = '#2cc732';
    }
    console.log(lowercase5);
}

function specialcasebutton(){
    var butto3 = document.getElementById("specialchar");//special
    console.log("rawr");
    if(special6 == 0){
        special6++;
        butto3.style.backgroundColor = 'red';
    }
    else{
        special6--;
        butto3.style.backgroundColor = '#2cc732';
    }
    console.log(special6);
}

button4.addEventListener("click",uppercasebutton);  
button5.addEventListener("click",lowercasebutton);  
button6.addEventListener("click",specialcasebutton);  
button7.addEventListener("click",numbercasebutton);  
 