function newalert(){
    alert("Thank you for visiting.");
}
setTimeout(newalert , 10000  );


var project = setInterval(projectDone, 10)
var project2 = setInterval(project2Done, 10)
var project3  = setInterval(project3Done, 10)

let count1 = 1;
let count2 = 1;
let count3 = 1;

function projectDone(){
    count1++;
    document.querySelector("#no1").innerHTML = count1;
    if(count1 == 1296){
        clearInterval(project);
    }
}
function project2Done(){
    count2++;
    document.querySelector("#no2").innerHTML = count2;
    if(count2 == 710){
        clearInterval(project2);
    }
}
function project3Done(){
    count3++;
    document.querySelector("#no3").innerHTML = count3;
    if(count3 == 2065){
        clearInterval(project3);
    }
}