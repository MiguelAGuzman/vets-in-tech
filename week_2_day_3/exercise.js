//  Write a JavaScript statement that selects the #meDom ID element.
document.getElementById("meDom").innerText = "#meDom ID";

//  Write at least 2 ways to select the #myFamily ul element.
document.getElementById("myFamily").innerText = "#myFamily ul";
document.getElementsByTagName("ul").innerText = "#myFamily ul";

//  Write a JavaScript statement that selects Hans.
document.getElementById("myFamily").firstChild.nextSibling = "#hans";

// Write a JavaScript statement that selects the .rideOrDie class.
document.getElementsByClassName("rideOrDie").innerText = "#rideOrDie";

//  Bonus: Can you select Brian Oconner?
document.getElementById("myFamily").firstChild.nextSibling.nextSibling.innerText = "#Brian Oconner";

//  Bonus2: Can you console log Brian Oconner?
console.log(document.getElementById("myFamily").firstChild.nextSibling.nextSibling.innerText = "#Brian Oconner");
