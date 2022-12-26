console.log("ここにコードを追加します。");
// enum型は自動的に数値が割り当てられる。
//Enum型は定数の集合の一覧に名前を付けて管理
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "yota",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("読み取り専用ユーザー");
}

const human: {
  name: string;
  age: number;
  hobbies: string[];
  //Tuple型は配列の型をより厳密に定義できる。
  role: [number, string];
} = {
  name: "yota",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

human.role.push("admin");

let favoriteActivities: string[];

favoriteActivities = ["Sports"];

for (const hobby of human.hobbies) {
  console.log(hobby);
}
