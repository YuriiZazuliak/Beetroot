const API = "https://jsonplaceholder.typicode.com"

fetch(`${API}/users`)
    .then(Response => Response.json())
    .then(Response => console.log(Response[3]))
    .catch(error => console.error(error));



fetch(`${API}/photos`)
.then(Response => Response.json())
.then(Response => console.log(Response[3]))
.then(document.createElement(photo76()))
setTimeout(() => 2000)

function photo76() {
    let img = document.createElement("img");
    let src = img.getAttribute("src");

    src = photo3.url;

    return img;
}