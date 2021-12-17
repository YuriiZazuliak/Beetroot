// Task 1
let paragraph = document.getElementById("parText");
let textarea = document.getElementById("redText");

textarea.hidden = true;

document.addEventListener("keydown", function(event) {
    if((event.ctrlKey || event.metaKey) && event.code == "KeyE") {
    event.preventDefault();
    }
});

document.addEventListener("keydown", function(event) {
if((event.ctrlKey || event.metaKey) && event.code == "KeyE") {
    paragraph.hidden = true;
    textarea.hidden = false; 
    textarea.innerHTML = paragraph.innerHTML; 
    }  
});
    
document.addEventListener("keydown", function(event) {
    if((event.ctrlKey || event.metaKey) && event.code == "Key<") {
        event.preventDefault();
        }
    });
document.addEventListener("keydown", function(event) {    
    if((event.ctrlKey || event.metaKey) && event.code == "Space") {       
        paragraph.hidden = false;
        textarea.hidden = true;
        paragraph.innerHTML = textarea.value;
        }
    });
//Task 2




//Task 3


