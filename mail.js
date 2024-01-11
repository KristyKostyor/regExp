const text =
  "Примеры валидные: info@methed.ru, max24@mail.com, java_script@google.io Примеры не валидные: my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz";

const regex = /\b\w+@\w{3,}\.\w{2,5}\b/g;
const foundEmails = text.match(regex);

if (foundEmails) {
  console.log("Найденные валидные email адреса:");
  foundEmails.forEach((email) => console.log(email));
} else {
  console.log("Валидные email адреса не найдены.");
}
