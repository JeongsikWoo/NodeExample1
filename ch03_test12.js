var Users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}];

console.log('unshift() 호출 전 배열 요소의 수 : %d', Users.length);

Users.unshift({name:'티아라', age:23});

console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);

Users.shift();

console.log('pop() 호출 후 배열 요소의 수 : %d', Users.length);
console.log('%s %s', Users[0].name, Users[1].name);

// unshift()와 shift()는 배열 가장 앞에 요소를 추가하고 삭제한다.
