function run() {
    let html = document.querySelector(".html").value;
    let css = document.querySelector(".css").value;
    let js = document.querySelector(".js").value;
    let output = document.querySelector(".output");

    output.contentDocument.body.innerHTML = html + "<style>" +css+ "</style>";
    output.contentWindow.eval(js);
}
function js() {
    let js = document.querySelector(".js");
    js.select();
    document.execCommand("copy");
    alert("JavaScript Code is Copied")
}

function html() {
    let html = document.querySelector(".html");
    html.select();
    document.execCommand("copy");
    alert("HTML Code is Copied")
}

function css() {
    let css = document.querySelector(".css");
    css.select();
    document.execCommand("copy");
    alert("CSS Code is Copied")
}

document.querySelector(".clear").addEventListener("click", function(){
    location.reload()
})

function insertHTMLSymbol(symbol) {
    const textarea = document.querySelector('.htmlsymbol');
    const cursorPos = textarea.selectionStart;
    const textBefore = textarea.value.substring(0, cursorPos);
    const textAfter  = textarea.value.substring(cursorPos, textarea.value.length);

    textarea.value = textBefore + symbol + textAfter;
    textarea.selectionStart = cursorPos + symbol.length;
    textarea.selectionEnd = cursorPos + symbol.length;
    textarea.focus();
}

function insertCSSSymbol(symbol) {
    const textarea = document.querySelector('.csssymbol');
    const cursorPos = textarea.selectionStart;
    const textBefore = textarea.value.substring(0, cursorPos);
    const textAfter  = textarea.value.substring(cursorPos, textarea.value.length);

    textarea.value = textBefore + symbol + textAfter;
    textarea.selectionStart = cursorPos + symbol.length;
    textarea.selectionEnd = cursorPos + symbol.length;
    textarea.focus();
}
function insertJSSymbol(symbol) {
    const textarea = document.querySelector('.jssymbol');
    const cursorPos = textarea.selectionStart;
    const textBefore = textarea.value.substring(0, cursorPos);
    const textAfter  = textarea.value.substring(cursorPos, textarea.value.length);

    textarea.value = textBefore + symbol + textAfter;
    textarea.selectionStart = cursorPos + symbol.length;
    textarea.selectionEnd = cursorPos + symbol.length;
    textarea.focus();
}

function mobRes() {


let htmlframe = document.querySelector(".h");
let cssframe = document.querySelector(".c");
let jsframe = document.querySelector(".j");
let outputframe = document.querySelector(".right");
let cssp = document.querySelector(".c-pos");
let htmlp = document.querySelector(".h-pos");
let jsp = document.querySelector(".j-pos");
let runp = document.querySelector(".run");

htmlframe.addEventListener("click", function(){
    jsp.style.right = "-110%";
    cssp.style.left = "-110%";
    outputframe.style.bottom = "-110%";
    htmlp.style.display = "block"
})

cssframe.addEventListener("click", function(){
    cssp.style.left = "3%";
    jsp.style.right = "-110%";
    outputframe.style.bottom = "-110%";
    htmlp.style.display = "none"
})

jsframe.addEventListener("click", function(){
    jsp.style.right = "3%";
    cssp.style.left = "-110%";
    outputframe.style.bottom = "-110%";
    htmlp.style.display = "none"
})

runp.addEventListener("click", function(){
    outputframe.style.bottom = "24%";
    htmlp.style.display = "none"
    cssp.style.left = "-110%"
    jsp.style.right = "-110%"
})

document.querySelector(".gpt").addEventListener("click", function(){
    window.open("https://chatgpt.com/c/f3f10da5-2468-42f8-9575-ea04a1c9e513")
})

}


mobRes();