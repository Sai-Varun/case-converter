// buttons
let upCB = document.getElementById("upper-case");
let loCB = document.getElementById("lower-case");
let prCB = document.getElementById("proper-case");
let senCB = document.getElementById("sentence-case");
let svTxtFl = document.getElementById("save-text-file");
// textArea
let tAr = document.getElementById("textAr");
// string
let text = tAr.value;
// events
upCB.addEventListener("click", function () {
    text = tAr.value;
    tAr.value = text.toUpperCase();
});
loCB.addEventListener("click", function () {
    text = tAr.value;
    tAr.value = text.toLowerCase();
});
prCB.addEventListener("click", function () {
    text = tAr.value;
    const arr = text.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    text = arr.join(' ');
    tAr.value = text;
});
senCB.addEventListener("click", function () {
    text = tAr.value;
    const arr = text.split('. ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    text = arr.join('. ');
    tAr.value = text;
});
svTxtFl.addEventListener("click", function () {
    let element = document.createElement('a');
    text = tAr.value;
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
});