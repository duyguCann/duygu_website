
var me = document.querySelector('#mMe');
me.style.cursor = "pointer";
me.innerHTML =" &nbsp;&nbsp; Me";
me.addEventListener('click', linkMe);
me.style.visibility = "visible";

var Works = document.querySelector("#mWorks");
Works.style.cursor = "pointer";
Works.innerHTML =" &nbsp;&nbsp; Works";
Works.addEventListener('click', linkWorks);
Works.style.visibility = "visible";

var Projects = document.querySelector('#mProjects');
Projects.style.cursor = "pointer";
Projects.innerHTML =" &nbsp;&nbsp; Projects";
Projects.addEventListener('click', linkProjects);
Projects.style.visibility = "visible";

var ProductSketches = document.querySelector("#mProductSketches");
ProductSketches.style.cursor = "pointer";
ProductSketches.innerHTML =" &nbsp;&nbsp; ProductSketches";
ProductSketches.addEventListener('click', linkProductSketches);
ProductSketches.style.visibility = "visible";

var Artworks = document.querySelector('#mArtworks');
Artworks.style.cursor = "pointer";
Artworks.innerHTML =" &nbsp;&nbsp; Artworks";
Artworks.addEventListener('click', linkArtworks);
Artworks.style.visibility = "visible";

var Photographs = document.querySelector("#mPhotographs");
Photographs.style.cursor = "pointer";
Photographs.innerHTML =" &nbsp;&nbsp; Photographs";
Photographs.addEventListener('click', linkPhotographs);
Photographs.style.visibility = "visible";

var Project1 = document.querySelector('#mProject1');
Project1.style.cursor = "pointer";
Project1.innerHTML =" &nbsp;&nbsp; Project1";
Project1.addEventListener('click', linkProject1);
Project1.style.visibility = "visible";

var Project2 = document.querySelector("#mProject2");
Project2.style.cursor = "pointer";
Project2.innerHTML =" &nbsp;&nbsp; Project2";
Project2.addEventListener('click', linkProject2);
Project2.style.visibility = "visible";

var Project3= document.querySelector('#mProject3');
Project3.style.cursor = "pointer";
Project3.innerHTML =" &nbsp;&nbsp; Project3";
Project3.addEventListener('click', linkProject3);
Project3.style.visibility = "visible";

var Project4 = document.querySelector("#mProject4");
Project4.style.cursor = "pointer";
Project4.innerHTML =" &nbsp;&nbsp; Project4";
Project4.addEventListener('click', linkProject4);
Project4.style.visibility = "visible";


setTimeout(myFunction, 2000);

function myFunction() {

    mMe.style.visibility = "visible";
    mWorks.style.visibility = "visible";
    mProjects.style.visibility = "visible";
    mProductSketches.style.visibility = "visible";
    mArtworks.style.visibility = "visible";
    mPhotographs.style.visibility = "visible";
    mProject1.style.visibility = "visible";
    mProject2.style.visibility = "visible";
    mProject3.style.visibility = "visible";
    mProject4.style.visibility = "visible";
}

function linkWorks() {
    location.href = 'Works.html';
}
function linkMe() {
    location.href = 'Me.html';
}
function linkProjects() {
    location.href = 'Projects.html';
}
function linkProductSketches() {
    location.href = 'ProductSketches.html';
}
function linkArtworks() {
    location.href = 'Artworks.html';
}
function linkPhotographs() {
    location.href = 'Photographs.html';
}
function linkProjects() {
    location.href = 'Project1.html';
}
function linkProductSketches() {
    location.href = 'Projects2.html';
}
function linkArtworks() {
    location.href = 'Projects3.html';
}
function linkPhotographs() {
    location.href = 'Projects4.html';
}
