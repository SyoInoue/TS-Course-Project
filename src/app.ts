//unknown型。なんの型になるかわからない。
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";

if (typeof userInput === "string") {
  userName = userInput;
}

console.log("Hello");
//voidとneverは基本的に似ているが、それが絶対にあり得ないかどうかが違う。

// never型はそれは絶対にあり得ない。と言う事。
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code }; //ここでスクリプトが停止する。
// }

// const result = generateError("エラーが発生しました。", 500);
// console.log(result);
