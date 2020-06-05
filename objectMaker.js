var objNameElement = document.querySelector("#objectName");
var orgNameElement = document.querySelector("#orgName");
var idElement = document.querySelector("#id");
var idElement = document.querySelector("#strapline");
var descriptionElement = document.querySelector("#description");
var updateElement = document.querySelector("#update");
var volunteeringElement = document.querySelector("#volunteering");
var donatingElement = document.querySelector("#donating");
var contactElement = document.querySelector("#contact");
var emailElement = document.querySelector("#email");
var lastUpdateElement = document.querySelector("#lastUpate");
var submitButton = document.querySelector("#submitButton");
var outputBox = document.querySelector("#outputBox");


submitButton.addEventListener("click",function(){
  outputBox.innerHTML=
    objNameElement.value
    +" = new OrgEntry("
    +"'"+orgNameElement.value+"'"+","
    +"'"+idElement.value+"'"+","
    +"'"+straplineElement.value+"'"+","
    +"'"+descriptionElement.value+"'"+","
    +"'"+updateElement.value+"'"+","
    +"'"+volunteeringElement.value+"'"+","
    +"'"+donatingElement.value+"'"+","
    +"'"+contactElement.value+"'"+","
    +"'"+emailElement.value+"'"+","
    +"'"+lastUpdateElement.value+"'"+","
    +"'"+submitButton.value+"'"+","
    +"'"+outputBox.value+"'"+
  ");";
});
