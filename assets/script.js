// Variables
var currentDay = $("#currentDay");
var nineBlock = $("#first-block");
var tenBlock = $("#second-block");
var elevenBlock = $("#third-block");
var twelveBlock = $("#fourth-block");
var oneBlock = $("#fifth-block");
var twoBlock = $("#sixth-block");
var threeBlock = $("#seventh-block");
var fourBlock = $("#eighth-block");
var fiveBlock = $("#ninth-block");

// Displays the current date in the jumbotron
currentDay.text(moment().format("MMMM Do, YYYY"));