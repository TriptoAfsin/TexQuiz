var NTF;

function calName(){
    console.log("name called");
    document.getElementById("namebtn").style.visibility = "visible";
}

function checkNTF(){
    console.log("checkNTF() called");
    var grade;
    var score = 0;
    var q1 = document.ntf.q1.value;
    var q2 = document.ntf.q2.value;
    var q3 = document.ntf.q3.value;
    var q4 = document.ntf.q4.value;
    var q5 = document.ntf.q5.value;
    var q6 = document.ntf.q6.value;
    var q7 = document.ntf.q7.value;
    var q8 = document.ntf.q8.value;
    var q9 = document.ntf.q9.value;
    var q10 = document.ntf.q10.value;

    if(q1 == "2"){
        score++;
    }
    if(q2 == "3"){
        score++;
    }
    if(q3 == "2"){
        score++;
    }
    if(q4 == "3"){
        score++;
    }
    if(q5 == "2"){
        score++;
    }
    if(q6 == "1"){
        score++;
    }
    if(q7 == "3"){
        score++;
    }
    if(q8 == "3"){
        score++;
    }
    if(q9 == "4"){
        score++;
    }
    if(q10 == "4"){
        score++;
    }
    if(score >7 && score <11){
        grade = "A+";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 6 && score <8){
        grade = "A";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 5 && score <7){
        grade = "A-";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 4 && score <6){
        grade = "B";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 3 && score <5){
        grade = "C";
        document.getElementById("grade").style.color = "red";
    }
    if(score> 2 && score <4){
        grade = "D";
        document.getElementById("grade").style.color = "red";
    }
    else if(score < 3){
        grade = "F";
        document.getElementById("grade").style.color = "red";
    }
    var usrname = document.getElementById("usrname").value;
    document.getElementById("resultHeader").innerHTML = usrname + "'s NTF Result";
    document.getElementById("ntfBody").style.visibility = "hidden";
    document.getElementById("ResultNTF").style.visibility = "visible";
    document.getElementById("scoreNTF").innerHTML = "Score: " + score + "/10";
    document.getElementById("grade").innerHTML = "Grade: " + grade;
}

//WP-I Function

function checkwp1(){
    console.log("checkWP1() called");
    var grade;
    var score = 0;
    var q1 = document.ntf.q1.value;
    var q2 = document.ntf.q2.value;
    var q3 = document.ntf.q3.value;
    var q4 = document.ntf.q4.value;
    var q5 = document.ntf.q5.value;
    var q6 = document.ntf.q6.value;
    var q7 = document.ntf.q7.value;
    var q8 = document.ntf.q8.value;
    var q9 = document.ntf.q9.value;
    var q10 = document.ntf.q10.value;

    if(q1 == "2"){
        score++;
    }
    if(q2 == "2"){
        score++;
    }
    if(q3 == "3"){
        score++;
    }
    if(q4 == "1"){
        score++;
    }
    if(q5 == "3"){
        score++;
    }
    if(q6 == "3"){
        score++;
    }
    if(q7 == "1"){
        score++;
    }
    if(q8 == "3"){
        score++;
    }
    if(q9 == "1"){
        score++;
    }
    if(q10 == "3"){
        score++;
    }
    if(score >7 && score <11){
        grade = "A+";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 6 && score <8){
        grade = "A";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 5 && score <7){
        grade = "A-";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 4 && score <6){
        grade = "B";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 3 && score <5){
        grade = "C";
        document.getElementById("grade").style.color = "red";
    }
    if(score> 2 && score <4){
        grade = "D";
        document.getElementById("grade").style.color = "red";
    }
    else if(score < 3){
        grade = "F";
        document.getElementById("grade").style.color = "red";
    }
    var usrname = document.getElementById("usrname").value;
    document.getElementById("resultHeader").innerHTML = usrname + "'s WP-I Result";
    document.getElementById("ntfBody").style.visibility = "hidden";
    document.getElementById("ResultNTF").style.visibility = "visible";
    document.getElementById("scoreNTF").innerHTML = "Score: " + score + "/10";
    document.getElementById("grade").innerHTML = "Grade: " + grade;
}

//MMTF function

function checkmmtf(){
    console.log("checkMMTF() called");
    var grade;
    var score = 0;
    var q1 = document.ntf.q1.value;
    var q2 = document.ntf.q2.value;
    var q3 = document.ntf.q3.value;
    var q4 = document.ntf.q4.value;
    var q5 = document.ntf.q5.value;
    var q6 = document.ntf.q6.value;
    var q7 = document.ntf.q7.value;
    var q8 = document.ntf.q8.value;
    var q9 = document.ntf.q9.value;
    var q10 = document.ntf.q10.value;

    if(q1 == "3"){
        score++;
    }
    if(q2 == "1"){
        score++;
    }
    if(q3 == "2"){
        score++;
    }
    if(q4 == "3"){
        score++;
    }
    if(q5 == "2"){
        score++;
    }
    if(q6 == "4"){
        score++;
    }
    if(q7 == "4"){
        score++;
    }
    if(q8 == "2"){
        score++;
    }
    if(q9 == "4"){
        score++;
    }
    if(q10 == "3"){
        score++;
    }
    if(score >7 && score <11){
        grade = "A+";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 6 && score <8){
        grade = "A";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 5 && score <7){
        grade = "A-";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 4 && score <6){
        grade = "B";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 3 && score <5){
        grade = "C";
        document.getElementById("grade").style.color = "red";
    }
    if(score> 2 && score <4){
        grade = "D";
        document.getElementById("grade").style.color = "red";
    }
    else if(score < 3){
        grade = "F";
        document.getElementById("grade").style.color = "red";
    }
    var usrname = document.getElementById("usrname").value;
    document.getElementById("resultHeader").innerHTML = usrname + "'s MMTF Result";
    document.getElementById("ntfBody").style.visibility = "hidden";
    document.getElementById("ResultNTF").style.visibility = "visible";
    document.getElementById("scoreNTF").innerHTML = "Score: " + score + "/10";
    document.getElementById("grade").innerHTML = "Grade: " + grade;
}

//EM Function

function checkem(){
    console.log("checkem() called");
    var grade;
    var score = 0;
    var q1 = document.ntf.q1.value;
    var q2 = document.ntf.q2.value;
    var q3 = document.ntf.q3.value;
    var q4 = document.ntf.q4.value;
    var q5 = document.ntf.q5.value;
    var q6 = document.ntf.q6.value;
    var q7 = document.ntf.q7.value;
    var q8 = document.ntf.q8.value;
    var q9 = document.ntf.q9.value;
    var q10 = document.ntf.q10.value;

    if(q1 == "1"){
        score++;
    }
    if(q2 == "3"){
        score++;
    }
    if(q3 == "2"){
        score++;
    }
    if(q4 == "2"){
        score++;
    }
    if(q5 == "1"){
        score++;
    }
    if(q6 == "3"){
        score++;
    }
    if(q7 == "1"){
        score++;
    }
    if(q8 == "1"){
        score++;
    }
    if(q9 == "2"){
        score++;
    }
    if(q10 == "4"){
        score++;
    }
    if(score >7 && score <11){
        grade = "A+";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 6 && score <8){
        grade = "A";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 5 && score <7){
        grade = "A-";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 4 && score <6){
        grade = "B";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 3 && score <5){
        grade = "C";
        document.getElementById("grade").style.color = "red";
    }
    if(score> 2 && score <4){
        grade = "D";
        document.getElementById("grade").style.color = "red";
    }
    else if(score < 3){
        grade = "F";
        document.getElementById("grade").style.color = "red";
    }
    var usrname = document.getElementById("usrname").value;
    document.getElementById("resultHeader").innerHTML = usrname + "'s EM Result";
    document.getElementById("ntfBody").style.visibility = "hidden";
    document.getElementById("ResultNTF").style.visibility = "visible";
    document.getElementById("scoreNTF").innerHTML = "Score: " + score + "/10";
    document.getElementById("grade").innerHTML = "Grade: " + grade;
}

//MP Function

function checkmp(){
    console.log("checkmp() called");
    var grade;
    var score = 0;
    var q1 = document.ntf.q1.value;
    var q2 = document.ntf.q2.value;
    var q3 = document.ntf.q3.value;
    var q4 = document.ntf.q4.value;
    var q5 = document.ntf.q5.value;
    var q6 = document.ntf.q6.value;
    var q7 = document.ntf.q7.value;
    var q8 = document.ntf.q8.value;
    var q9 = document.ntf.q9.value;
    var q10 = document.ntf.q10.value;

    if(q1 == "4"){
        score++;
    }
    if(q2 == "3"){
        score++;
    }
    if(q3 == "2"){
        score++;
    }
    if(q4 == "1"){
        score++;
    }
    if(q5 == "2"){
        score++;
    }
    if(q6 == "2"){
        score++;
    }
    if(q7 == "2"){
        score++;
    }
    if(q8 == "1"){
        score++;
    }
    if(q9 == "2"){
        score++;
    }
    if(q10 == "2"){
        score++;
    }
    if(score >7 && score <11){
        grade = "A+";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 6 && score <8){
        grade = "A";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 5 && score <7){
        grade = "A-";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 4 && score <6){
        grade = "B";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 3 && score <5){
        grade = "C";
        document.getElementById("grade").style.color = "red";
    }
    if(score> 2 && score <4){
        grade = "D";
        document.getElementById("grade").style.color = "red";
    }
    else if(score < 3){
        grade = "F";
        document.getElementById("grade").style.color = "red";
    }
    var usrname = document.getElementById("usrname").value;
    document.getElementById("resultHeader").innerHTML = usrname + "'s EM Result";
    document.getElementById("ntfBody").style.visibility = "hidden";
    document.getElementById("ResultNTF").style.visibility = "visible";
    document.getElementById("scoreNTF").innerHTML = "Score: " + score + "/10";
    document.getElementById("grade").innerHTML = "Grade: " + grade;
}



//cp Function

function checkCP(){
    console.log("checkCP() called");
    var grade;
    var score = 0;
    var q1 = document.ntf.q1.value;
    var q2 = document.ntf.q2.value;
    var q3 = document.ntf.q3.value;
    var q4 = document.ntf.q4.value;
    var q5 = document.ntf.q5.value;
    var q6 = document.ntf.q6.value;
    var q7 = document.ntf.q7.value;
    var q8 = document.ntf.q8.value;
    var q9 = document.ntf.q9.value;
    var q10 = document.ntf.q10.value;

    if(q1 == "2"){
        score++;
    }
    if(q2 == "3"){
        score++;
    }
    if(q3 == "2"){
        score++;
    }
    if(q4 == "3"){
        score++;
    }
    if(q5 == "2"){
        score++;
    }
    if(q6 == "1"){
        score++;
    }
    if(q7 == "3"){
        score++;
    }
    if(q8 == "3"){
        score++;
    }
    if(q9 == "4"){
        score++;
    }
    if(q10 == "4"){
        score++;
    }
    if(score >7 && score <11){
        grade = "A+";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 6 && score <8){
        grade = "A";
        document.getElementById("grade").style.color = "green";
    }
    if(score> 5 && score <7){
        grade = "A-";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 4 && score <6){
        grade = "B";
        document.getElementById("grade").style.color = "orange";
    }
    if(score> 3 && score <5){
        grade = "C";
        document.getElementById("grade").style.color = "red";
    }
    if(score> 2 && score <4){
        grade = "D";
        document.getElementById("grade").style.color = "red";
    }
    else if(score < 3){
        grade = "F";
        document.getElementById("grade").style.color = "red";
    }
    var usrname = document.getElementById("usrname").value;
    document.getElementById("resultHeader").innerHTML = usrname + "'s CP Result";
    document.getElementById("ntfBody").style.visibility = "hidden";
    document.getElementById("ResultNTF").style.visibility = "visible";
    document.getElementById("scoreNTF").innerHTML = "Score: " + score + "/10";
    document.getElementById("grade").innerHTML = "Grade: " + grade;
}

