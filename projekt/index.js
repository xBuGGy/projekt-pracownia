function resp() {
    var x = document.getElementById("navi");
    if (x.className === "navi") {
        x.className += " responsive";
    } else {
        x.className = "navi";
    }
}