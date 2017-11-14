// calc3.js에서 정의한 Calc 프로토타입 객체를 변수롤 사용가능. Calc 변수에 할당
var Calc = require('./calc3');

// 인스턴스 생성 후 변수 calc에 할당
var calc = new Calc();
// 객체에 stop 이벤트 전달
calc.emit('stop');

console.log(Calc.title + '에 stop 이벤트 전달함.');