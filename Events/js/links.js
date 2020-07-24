var url = window.location.href;

if (url.includes("#credenz-t")) {
    document.getElementById("collapseOne").classList.toggle("collapse");
}

if (url.includes("#credenz-nt")) {
    document.getElementById("collapseOne1").classList.toggle("collapse");
}

if (url.includes("#ctd-t")) {
    document.getElementById("collapseTwo").classList.toggle("collapse");
}