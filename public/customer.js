const magazinSelector = document.querySelector("#m");
const newspaperSelector = document.querySelector("#np");
const archiveSelector = document.querySelector("#a");
const category = document.querySelector("#category");
const fom = document.querySelector("#fomm");

const setMagazine = () => {
    fom.style.display ="block";
    category.value = "MAGAZINE"
    document.querySelector(".parent-section").style.display = "none";
};
const setNewspaper = () => {
    fom.style.display ="block";
    category.value = "NEWSPAPER";
    document.querySelector(".parent-section").style.display = "none";
}
const setArchives = () => {
    fom.style.display ="block";
    category.value = "ARCHIVES";
    document.querySelector(".parent-section").style.display = "none";
}

magazinSelector.addEventListener("click", setMagazine);
newspaperSelector.addEventListener("click", setNewspaper);
archiveSelector.addEventListener("click", setArchives);
