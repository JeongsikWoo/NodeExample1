function add(a, b, callback){
    var result = a+b;
    callback(result);

    var history = function() {
        return a + ' + ' + b + ' = ' + result;
    };

    // 함수 객체 반환
    return history;
}

// add 함수 호출과 함께 함수객체 생성
// add 함수 실행 후 반환받은 함수 객체를 add_history 변수에 저장
var add_history = add(10, 10, function(result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10, 10)의 결과 : %d', result);
});

console.log('결과 값으로 받은 함수 실행 결과: ' + add_history());

// add() 함수 안의 변수들은 함수가 반환된 후에도 접근 할 수 있다.