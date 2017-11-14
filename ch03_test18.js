// 프로토타입 객체 생성
// 자바스크립트에서 생산자(함수)를 이용하여 프로토타입을 정의한 후 프로토타입에서 인스턴스 객체를 만들어낼 수 있다.

// 프로토타입 함수 Person 정의
// new 연산자로 호출되는 함수는 생성자 (객체를 만들기 위한 함수)이다. 실제 데이터를 담는게 아니라 인스턴스 객체 생성을 위한 원형 틀이다.
// 사람의 이름을 담는 name 속성과 나이를 담는 age 속성
// this는 함수를 호출한 객체
function Person(name, age){
    this.name = name;
    this.age = age;
}

// walk 함수 추가
// 함수 Person 생성 시 prototype 속성이 자동으로 생긴다.
// prototype 객체는 Person 객체 자신을 가리킨다.
Person.prototype.walk = function(speed){
    console.log(speed + 'km 속도로 걸어갑니다.');
}

// new 연산자를 이용하여 인스턴스 객체(실제 객체) 생성
var person01 = new Person('소녀시대', 20);
var person02 = new Person('걸스데이', 22);

console.log(person01.name + ' 객체의 walk(10)을 호출합니다.');
person01.walk(10);