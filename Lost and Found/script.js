/* STORAGE */

let reports = JSON.parse(localStorage.getItem("reports")) || [];

/* SAVE REPORT */

function saveReport(report){

reports.push(report);

localStorage.setItem("reports", JSON.stringify(reports));

alert("Report submitted successfully!");

}

/* LOST FORM */

let lostForm = document.querySelector(".report-form");

if(lostForm){

lostForm.addEventListener("submit", function(e){

e.preventDefault();

let report = {

type: "Lost",
itemName: this.itemName.value,
description: this.description.value,
location: this.location.value,
date: this.dateLost.value,
contact: this.contact.value

};

saveReport(report);

this.reset();

});

}

/* FOUND FORM */

let foundForm = document.querySelector(".found-form");

if(foundForm){

foundForm.addEventListener("submit", function(e){

e.preventDefault();

let report = {

type: "Found",
itemName: this.itemName.value,
description: this.description.value,
location: this.locationFound.value,
date: this.dateFound.value,
contact: this.contact.value

};

saveReport(report);

this.reset();

});

}

/* DISPLAY REPORTS */

function displayReports(){

let container = document.getElementById("reportsContainer");

if(!container) return;

container.innerHTML = "";

if(reports.length === 0){

container.innerHTML = "<p>No reports submitted yet.</p>";
return;

}

reports.slice().reverse().forEach(report => {

let card = document.createElement("div");

card.className = "report-card";

card.innerHTML = `

<h3>${report.itemName}</h3>

<p><b>Type:</b> ${report.type}</p>

<p>${report.description}</p>

<p><b>Location:</b> ${report.location}</p>

<p><b>Date:</b> ${report.date}</p>

<p><b>Contact:</b> ${report.contact}</p>

`;

container.appendChild(card);

});

}

/* CONTACT FORM */

let contactForm = document.querySelector(".contact-container form");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Message sent successfully!");

this.reset();

});

}

/* PAGE LOAD */

window.onload = function(){

displayReports();

};