function watchable(elId)
{
document.getElementById(elId).style.display='block';
}

function unwatchable(elId)
{
document.getElementById(elId).style.display='none';
}

function sendMessage(msg){
watchable('message-box');
document.getElementById('my-message').innerHTML = msg;
}


function add_num(num,elId)
{
document.getElementById(elId).value += num;
}

function add_operator(op,elId)
{
let tmp = document.getElementById(elId).value;
let prevChr = tmp.slice(tmp.length-1,tmp.length); // current character

if(tmp.length <= 0){
    sendMessage("Operation is too short!");
    return;
}

if(prevChr == '+' || prevChr == '-' || prevChr == 'x'){
    sendMessage("canNOT add an operator after another operator");
    return;
}


document.getElementById(elId).value += op;
}

function clearScreen(elId)
{
document.getElementById(elId).value = '';
}

function backSpace(elId)
{
let tmp = document.getElementById(elId).value;
let val = tmp.slice(0,tmp.length-1);
document.getElementById(elId).value = val;
}

// run() executes for onmousemove on <p> in #message-box
function run(){
document.getElementById('close').innerHTML = "X(Close)"
}

function runOut(){
document.getElementById('close').innerHTML = "X"
}
