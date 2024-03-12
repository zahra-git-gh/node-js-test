const path= require('path');
// console.log(path.sep);

const filePath= path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
// console.log(base);

const dir = path.dirname(filePath)
// console.log(dir);

// console.log(path.parse(filePath));

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);