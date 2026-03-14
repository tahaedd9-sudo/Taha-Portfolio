function addRecommendation(){

let text = document.getElementById("newRec").value;

if(text==""){
document.getElementById("message").innerText = "Please enter a recommendation.";
return;
}

let newRec = document.createElement("p");

newRec.textContent = text;

document.getElementById("recList").appendChild(newRec);

document.getElementById("message").innerText =
"Thanks for leaving a recommendation!";

document.getElementById("newRec").value="";
}