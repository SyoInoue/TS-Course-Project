console.log("ここにコードを追加します。");

const person = {
  name: "yota",
  age: 30,
  hobbies: ["sports", "cooking"],
};

let favoriteActivities: string[];

favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby);
}
