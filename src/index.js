function formatMatchStr(str, substr) {
  const strRegExp = new RegExp(substr, "g");
  const strMatch = str.replace(strRegExp, "<b>" + substr + "</b>");
  return `<p>${strMatch}</p>`;
}

const strFormatted = formatMatchStr("hello in world", "ll");
document.querySelector("#app").innerHTML = strFormatted;
