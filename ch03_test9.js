var Users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}];

var add =function(a, b){
    return a+ b;
};

Users.push(add);

console.log('배열 요소의 수 : %d', Users.length);
console.log('세 번째 요소로 추가된 함수 실행 : %d', Users[2](10, 10));

// 객체 배열을 생성 후 변수 Users에 할당
// 함수를 add변수에 할당 후 Users 배열에 추가
// 배열의 길이를 출력
// 배열 index 2에 추가한 함수 반환값을 출력