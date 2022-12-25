console.log("ここにコードを追加します。");
var person = {
    name: "yota",
    age: 30,
    hobbies: ["sports", "cooking"]
};
var favoriteActivities;
favoriteActivities = ["Sports"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
