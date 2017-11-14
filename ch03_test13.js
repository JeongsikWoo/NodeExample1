var Users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}, {name:'티아라', age:23}];

console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d', Users.length);

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users);

// 배열 안에 요소를 담아두는 공간을 남겨두고 객체만 삭제한다.
// 따라서 배열에서 요소 삭제시 splice()를 삭제하는게 더 좋다.
/*
delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : 3
delete 키워드로 배열 요소 삭제 후
[ { name: '소녀시대', age: 20 }, <1 empty item>, { name: '티아라', age: 23 } ]
*/