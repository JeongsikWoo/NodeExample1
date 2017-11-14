var Person = {};

Person['age'] = 20;
Person['name'] = '소녀시대';

// 값이 함수인 add 속성을 추가
Person.add = function(a, b){
    return a+b;
};

console.log('더하기 : %d', Person.add(10, 10));