
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
