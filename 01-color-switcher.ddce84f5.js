!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")},e=null;t.start.addEventListener("click",(function(){e=setInterval((function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.stop.removeAttribute("disabled"),t.start.setAttribute("disabled",!0)})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.ddce84f5.js.map
