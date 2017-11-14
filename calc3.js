// util 모듈 호출
var util = require('util');
var EventEmitter = require('events').EventEmitter;


// 프로토타입 객체 생성
var Calc = function(){
    var self = this;

    this.on('stop', function(){
        console.log('Calc에 stop event 전달');
    });
};

// Calc 객체가 이벤트 처리를 하도록 EventEmitter 상속
// util 모듈의 inherits() 메서드 : 상속
util.inherits(Calc, EventEmitter);

// add() 함수 추가
Calc.prototype.add = function(a, b){
    return a + b;
}

// ch04_test4.js에서 Calc 객체를 참조하도록 처리
module.exports = Calc;
module.exports.title = 'calculator';