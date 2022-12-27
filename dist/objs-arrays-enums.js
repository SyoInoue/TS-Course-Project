"use strict";
console.log("ここにコードを追加します。");
// enum型は自動的に数値が割り当てられる。
//Enum型は定数の集合の一覧に名前を付けて管理
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "yota",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("読み取り専用ユーザー");
}
const human = {
    name: "yota",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, "author"],
};
human.role.push("admin");
let favoriteActivities;
favoriteActivities = ["Sports"];
for (const hobby of human.hobbies) {
    console.log(hobby);
}
