var Users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}, {name:'티아라', age:23}, {name:'에프터스쿨', age:25}];

console.log('배열 요소의 수 : &d', Users.length);
console.log('원본 Users');
// [ { name: '소녀시대', age: 20 }, { name: '걸스데이', age: 22 }, { name: '티아라', age: 23 }, { name: '에프터스쿨', age: 25 } ]
console.dir(Users);

var User2 = Users.slice(1,4);

console.log('splice()로 잘라낸 후 Users2');
// [ { name: '걸스데이', age: 22 }, { name: '티아라', age: 23 }, { name: '에프터스쿨', age: 25 } ]
console.dir(User2);

var User3 = User2.slice(1);

console.log('splice()로 잘라낸 후 Users3');
// [ { name: '티아라', age: 23 }, { name: '에프터스쿨', age: 25 } ]
console.dir(User3);