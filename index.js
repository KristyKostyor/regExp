const data = [
  "module.jsx",
  "index.html",
  "style.css",
  "index.js",
  "file.ts",
  "library.css",
  "my.plugin.js",
];
const regexp = /\.jsx?$|\.ts$|\.js$/;

for (const fileName of data) {
  console.log(`${fileName}: ${regexp.test(fileName)}`);
};

const exec1 = regexp.exec(data);
console.log('regexp:', exec1);

console.log(regexp.test(data));


const filterFileNames =(data)=> {
  const regex = /\.(js|jsx|ts)$/;
  const filteredNames = data.filter((fileName) => regex.test(fileName));
  return filteredNames;
}
const filteredNames = filterFileNames(data);
console.log(filteredNames);