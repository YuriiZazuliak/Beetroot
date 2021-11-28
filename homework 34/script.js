var playList = [{
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];
console.dir(playList);
// Task 2
let button = document.querySelector(".open");
let modalWind = document.querySelector(".modalSection");
let closeButton = document.querySelector(".modalSection__button");
modalWind.hidden = true;
button.onclick = function () {
    modalWind.hidden = false;
}
closeButton.onclick = function () {
    modalWind.hidden = true;
}
//task 3
let changeButton = document.querySelector(".lightButton");
let liteBlock = document.querySelector(".lightsWrapper");
let i = 0;
changeButton.onclick = function () {
    if (i == 0) {
        liteBlock.firstElementChild.style.background = "green";
        liteBlock.firstElementChild.nextElementSibling.style.background = "black";
        liteBlock.lastElementChild.style.background = "black";
    } else if (i == 1) {
        liteBlock.children[0].style.background = "black";
        liteBlock.children[1].style.background = "yellow";
        liteBlock.children[2].style.background = "black";
    } else {
        liteBlock.children[0].style.background = "black";
        liteBlock.children[1].style.background = "black";
        liteBlock.children[2].style.background = "red";
    }
    i = i + 1;
    if (i == 3) {
        i = 0;
    }
}