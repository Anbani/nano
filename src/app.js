String.prototype.toElement = function () {
    var template = document.createElement("template");
    var html = this.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};

function clickListener(s) {
    let txt = document.querySelector(`#${s}Btn`).innerText
    const body = document.querySelector('body');
    const area = document.createElement('textarea');
    body.appendChild(area);
    area.value = txt;
    area.select();
    document.execCommand('copy');
    body.removeChild(area);
    console.log(txt, "copied")
}

function inputListener() {
    results.innerHTML = "";
    if (inputArea.value == '')
        return
    let scripts = anbani.data.keys;
    scripts.forEach((script) => {
        results.appendChild(
            `<button onclick="clickListener('${script}')" id="${script}Btn" class="result materialBtn">${anbani.core.interpret(
                inputArea.value,
                script
            )}</button>`.toElement()
        );
    });
}

window.addEventListener("DOMContentLoaded", (event) => {
    inputArea = document.querySelector("#input");
    results = document.querySelector(".results");
});
