// 배열
// 여러 개의 데이터를 하나의 변수에 저장
// 배열의 요소들은 index 로 접근

var Users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}];

Users.push({name:'티아라', age:23});

console.log('사용자 수 : %d', Users.length);
console.log('첫 번째 사용자 이름 : %s', Users[0].name);

// 배열 객체를 Users 변수에 할당
// 객체의 속성은 name, age
// 배열에 새로운 객체를 추가
// 배열의 길이와 index 0의 name 속성 출력