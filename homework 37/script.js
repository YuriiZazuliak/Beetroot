
 $("p").css("display", "none");
 $(".tabs").css("display", "none");

 $(".navBar").on("click", function (e) {
     let arrer = $(".button");
     let asdd = e.target;
     let text = $(".tabs").children();
    console.log(e.target);
    console.log(arrer);
    console.log(text);
    let numb = 0
  for (let index = 0; index < arrer.length; index++) {
        if (arrer[index] == e.target) {
            numb = index;
        }
 }
 $("p").css("display", "none");
 $(".tabs").css("display", "block");
 text[numb].style.display = "block";        
});
