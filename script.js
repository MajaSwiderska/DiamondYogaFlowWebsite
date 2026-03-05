function scrollToContact(){
document.getElementById("contact").scrollIntoView({
behavior: "smooth"
});
}

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

});