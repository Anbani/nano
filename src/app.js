import anbani from "anbani";

var inputArea, debugEl;

function debugMsg(msg) {
    debugEl.innerHTML = msg + (msg.length > 50 ? "..." : "")
}

String.prototype.toElement = function () {
    var template = document.createElement("template");
    var html = this.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};

function inputListener() {
    let inputText = "გამარჯობა"
    if (inputArea.value != "")
        inputText = inputArea.value

    let scripts = anbani.data.keys;
    let georgian = anbani.core.interpret(
        inputText,
        "mkhedruli"
    );

    scripts.forEach((script) => {
        document.querySelector(`#${script}Btn`).innerHTML = anbani.core.convert(
            georgian,
            "mkhedruli",
            script
        );
    });
}

function copyWithAPI(e) {
    let content = e.target.innerHTML;

    navigator.clipboard.writeText(content).catch(e => {
        console.log('ასე ვერ გავფრინდებით', e);
    })

}

function copyWithExec(e) {
    let content = e.target.innerHTML
    const area = document.createElement('textarea');
    document.body.appendChild(area);
    area.value = content;
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
}

function copy(e) {
    if (navigator.clipboard) copyWithExec(e)
    else copyWithExec(e)
    debugMsg("ტექსტი კოპირებულია ჻ " + e.target.innerHTML.slice(0,30))
}

window.addEventListener("DOMContentLoaded", (event) => {

    window.copy = copy
    window.anbani = anbani

    inputArea = document.querySelector("#inputArea");
    debugEl = document.querySelector("#debug");
    inputArea.addEventListener("input", inputListener)
});