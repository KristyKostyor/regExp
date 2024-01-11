function replaceUrlsWithLinks(text) {
  const regex = /(https?:\/\/\S+)/g;
  const replacedText = text.replace(regex, '<a href="$1">$1</a>');
  return replacedText;
}

const inputText =
  "Посетите сайты http://site.ru и https://site.com для более подробной информации.";
const replacedText = replaceUrlsWithLinks(inputText);
console.log(replacedText);
