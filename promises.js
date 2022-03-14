const fs = require("fs/promises");
async function readTextFile() {
  console.log("this is before the readfile");
  let content = await fs.readFile("sample.txt", { encoding: "ascii" });
  console.log("content is:", content);
  console.log("this is after the readfile");
  return content;
}
const main = async () => {
  console.log("function call");
  await readTextFile();
  console.log("after function call");
};
main();

// this is the .then way of doing the above code:

// console.log("this is content:", content);
// console.log("this is before the readfile");
// fs.readFile("sample1.txt", { encoding: "ascii" })
//   .then((content) => {
//     console.log("content is:", content);
//   })
//   .catch((err) => {
//     console.log("error is:", err);
//   });
// console.log("this is after the readfile");
