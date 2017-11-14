var Person = {
    age: 20,
    name: '소녀시대',
    add: function(a, b){
        return a+b;
    }
};

console.log('더하기 : %d', Person.add(10, 10));

// 자바스크립트 객체 생성
// 중괄호 안에 속성을 넣어준다
// 속성이름: 속성 값
// 각각의 속성을 (,) 로 구분한다
// 속성에는 함수도 할당될 수 있다.
// 함수를 add라는 속성으로 추가