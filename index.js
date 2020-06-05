// Content Selectors
var content = {
  orgName: document.querySelector("#org-name"),
  strapline: document.querySelector("#org-strapline"),
  description: document.querySelector("#description .content"),
  update: document.querySelector("#update .content"),
  volunteering: document.querySelector("#volunteering .content"),
  donating: document.querySelector("#donating .content"),
  contact: document.querySelector("#contact .content"),
  email: document.querySelector(".email"),
  lastUpdated: document.querySelector("#upDateDisplay"),
  pageMenuHeader: document.querySelector(".page-menu-header")
}
// Buttons & Menus
// Open Site Menu - Mobile
var siteButton = document.querySelector("#site-nav-button");
var siteMenu = document.querySelector("#sitemenu");
siteButton.addEventListener("click", function(){
  toggleVisible
});
// Open Page Menu - Mobile
var pageButton = document.querySelector("#page-nav-button");
var pageMenu = document.querySelector(".page-dropup-container");
var menuButtons = document.querySelector(".page-dropup-list");
pageButton.addEventListener("click", function() {
  toggleVisible(pageMenu, orgMenu)
});
// close menu when menu button clicked
menuButtons.addEventListener("click", function() {
  toggleVisible(pageMenu)
});
// Open Org Menu - Mobile
var calaisOrgButton = document.querySelector("#org-nav-button");
var orgMenu = document.querySelector("#org-menu");
calaisOrgButton.addEventListener("click", function() {
  toggleVisible(orgMenu, pageMenu)
});

// Make dropup menus visible - Mobile only
function toggleVisible(dropUp, otherMenu) {
  var thing = dropUp;
  thing.classList.toggle("hidden");
  var other = otherMenu;
  other.classList.add("hidden");
  var navbar = document.querySelector(".mynavbar");
  navbar.classList.toggle("navbar-open");
}
// Make pop out (eg menu) visible - Desktop only
function togglePopOut(target) {
  var thing = target;
  thing.classList.toggle("hidden");
}

// Desktop Menu Buttons (left side)
// Frontline Orgs Button
var desktopOrgButton = document.querySelector("#org-sidebar-button")
desktopOrgButton.addEventListener("click", function() {
  toggleVisible(orgMenu);
});
// Local Orgs Button
var localOrgButton = document.querySelector("#local-sidebar-button")
localOrgButton.addEventListener("click", function(){
window.open("https://www.google.com/maps/d/u/0/viewer?mid=1HMMUEy_Q1vl-lafTEGMb5OgXZ20&ll=54.470538387046034%2C-3.474155608984005&z=6");
});
// Entries - Constructor
var frontlineOrgs = [];

function OrgEntry(orgName, buttonID, strapline, description, update, volunteering, donating, contact, email, lastUpdated) {
// data
  this.name = orgName;
  this.id = buttonID;
  this.button = document.querySelector("#" + this.id);
  this.strapline = strapline;
  this.description = description;
  this.update = update;
  this.volunteering = volunteering;
  this.donating = donating;
  this.contact = contact;
  this.email = email;
  this.lastUpdated = lastUpdated;
// menu button click listener
  this.listener = function(button,entry) {
    button.addEventListener("click", function() {
      entry.show();
      orgMenu.classList.add("hidden");
    });
  };
  this.listener(this.button,this);
// show record method
  this.show = function(){
    content.orgName.innerHTML = this.name;
    content.strapline.innerHTML = this.strapline;
    content.description.innerHTML = this.description;
    content.update.innerHTML = this.update;
    content.volunteering.innerHTML = this.volunteering;
    content.donating.innerHTML = this.donating;
    content.contact.innerHTML = this.contact;
    content.email.innerHTML = this.email;
    content.lastUpdated.innerHTML = this.lastUpdated;
    content.pageMenuHeader.innerHTML = this.name;
  };
// add to frontline group list
  this.addToList = function(id,object){
    frontlineOrgs[id]=object;
  }
  this.addToList(this.id,this);
}

// Entries - Refugee Community Kitchen
refugeeCommunityKitchen = new OrgEntry(
  "Refugee Community Kitchen",
  "rck",
  "Serving food without judgement",
  "We support displaced people in Northern France and homeless people in London. We give people more than a hot meal, we give them a place to gather and connect. Somewhere to recreate a community – providing space for medical and legal services, safeguarding groups and other support. <br> Every food serving is made of fresh highly nutritious food freshly cooked with healthy ingredients accompanied with fresh herbs and condiments so our beneficiaries can make the food to their taste as we serve and we do this for 50p a meal including all ingredients, gas equipment and delivery",
  "It is sad news that we have to announce that Refugee Community Kitchen is suspending operations in Northern France due the coronavirus. <br> RCK is a COMMUNITY kitchen. It is about people supporting people, and so it is with heavy hearts we have made this decision. We have to protect our volunteers, the people we serve and the people in the surrounding area. <br> We will be reviewing the situation over the next 3 weeks, posting updates and will be ready to start up again as soon as viably possible. <br> Thank you for your continued support during this unprecedented times. <br> Love to you all",
  "usually there's loads, but not at the moment",
  "We take all sorts of food donations. mostly peas:<ul><li>peas</li><li>peas</li><li>peas</li><li>peas</li><li>peas</li><li>peas</li></ul>",
  "You can contact us best by email or by facebook or tincans",
  "testemail.email.com",
  "18/05/20"
)

aboutUs = new OrgEntry(
  "Calais Aid Network",
  "can",
  "Connecting the frontline humanitarian groups in Calais with solidarity groups and individuals that support them",
  "The Calais Aid Network is a website designed to provide accessible information about the humanitarian groups operating in Calais and Dunkirk and updates about the ongoing crisis. The aim is to give local refugee solidarity groups and interested individuals in the UK an overview of the opportunities and activities in Calais so they can get involved. We also aim to provide information to help anybody looking to find their local solidarity group , or start one of their own (do it!).<br><br>The site is maintained and updated by a small group of volunteers from various organisations. We don\'t need your money, so if you want to donate money or fundraise the checkout the 'Donate' section for any of the organisations here. If you'd like to give us some of your time to contact groups to make sure their information is up-to-date then please check out the volunteering information below.<br><br>Special shoutout to all the volunteers, frontline and throughout the UK, for their continuing dedication.",
  "Phase 1 - Frontline organisation details - live.<br>Phase 2 - 1st draft Guidance for Local Solidarity/Collection Groups inc central needs list - Due late June 2020.<br>Phase 3 - Searchable directory of Local Solidarity\/Collection Groups - Due July 2020.<br>For updates from Calais, please see the 'News From Calais' section."
  ,"It takes lots of human-time to call around getting up-to-date information. If you'd like to be a human with us then please email us at "+this.email+" and we can arrange a chat about what's involved.",
  "You can find an up-to-date list of the items needed in Calais over here.<br>If you'd like to donate money then please have a look at the frontline organisation entries, which include information about donating to them.",
  "If you've got any questions about this site then you can email us at "+this.email+"<br>If you have questions about the situation in Calais and Dunkirk in general, then we suggest you contact the HelpRefugees Calais Field Manager at ruth@helprefugees.org.uk",
  "curiousqueries@calais-solidarity.net",
  "28th May 2020"
)
