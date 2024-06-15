let header:any = document.getElementById("container");
let nav:any = document.getElementById("sidenav");
let carousel:any = document.getElementById("carousel");
let btnOne:any = document.getElementById("btnOne");
let btnTwo:any = document.getElementById("btnTwo");
let btnThree:any = document.getElementById("btnThree");
let box:any = document.querySelectorAll(".propertyList .box");
window.onscroll = function (params) {
    if (window.scrollY >= 1) {
        header.style.cssText = `
        width: 100%;
        margin-top: 0px;
        `;
    }
    else {
        header.style.cssText = `
        width: 90%;
        margin-top: 30px;
        `;
    }
};
let flag = false;
function changeImage() {
    carousel.style.opacity = 0;
    setTimeout(() => {
        if (flag !== true) {
            carousel.src = "imgs/carousel-2.jpg";
        }
        else {
            carousel.src = "imgs/carousel-1.jpg";
        }
        flag = !flag;
        setTimeout(() => {
            carousel.style.opacity = 1;
        }, 100);
    }, 1000);
}
carousel.onload = () => {
    carousel.style.opacity = 1;
};
setInterval(changeImage, 10000);
btnOne.onclick = function () {
    btnOne.classList.add("active");
    btnOne.classList.remove("notActive");
    btnTwo.classList.add("notActive");
    btnTwo.classList.remove("active");
    btnThree.classList.add("notActive");
    btnThree.classList.remove("active");
    box[0].style.display = "block";
    box[2].style.display = "block";
    box[4].style.display = "block";
    box[1].style.display = "block";
    box[3].style.display = "block";
    box[5].style.display = "block";
};
btnTwo.onclick = function () {
    btnOne.classList.add("notActive");
    btnOne.classList.remove("active");
    btnTwo.classList.add("active");
    btnTwo.classList.remove("notActive");
    btnThree.classList.add("notActive");
    btnThree.classList.remove("active");
    box[1].style.display = "none";
    box[3].style.display = "none";
    box[5].style.display = "none";
    box[0].style.display = "block";
    box[2].style.display = "block";
    box[4].style.display = "block";
};
btnThree.onclick = function () {
    btnOne.classList.add("notActive");
    btnOne.classList.remove("active");
    btnTwo.classList.add("notActive");
    btnTwo.classList.remove("active");
    btnThree.classList.add("active");
    btnThree.classList.remove("notActive");
    box[0].style.display = "none";
    box[2].style.display = "none";
    box[4].style.display = "none";
    box[1].style.display = "block";
    box[3].style.display = "block";
    box[5].style.display = "block";
};
function openNav() {
    nav.style.width = "100%";
}
function closeNav() {
    nav.style.width = "0";
}
//# sourceMappingURL=main.js.map