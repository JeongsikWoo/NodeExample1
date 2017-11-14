var Users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}];

console.log('push() 호출 전 배열 요소의 수 : %d', Users.length);

Users.push({name:'티아라', age:23});

console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);

Users.pop();

console.log('pop() 호출 후 배열 요소의 수 : %d', Users.length);
console.log('%s', Users[0].name);

// 자바스크립트에서 pop은 배열의 마지막 요소를 삭제한다
