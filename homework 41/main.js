//const { removeData } = require("jquery");

let app = new Vue({
    el: "#app",
    data: {
        setNumber: 15,
        style: {
            display: "block",
            fontSize: "20px",
            border: "1px solid gray",
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "red",
        },
        addText: "",
        styleText: {
            backgroundColor: `${text}`,
        }
    }
   


})
 $(".button").on("click", () => {
   $(".addedText").remove();
    $("#app").add(`<p class="addedText">${app.addText}</p>`).appendTo(document.body.querySelector("#app"));
    $(".addedText").css("color", `${app.addText}`);
    $("textarea").css("backgroundColor", `${app.addText}`);
    $("textarea").val("");
    })