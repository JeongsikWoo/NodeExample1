function add(a, b, callback){
    var result = a + b;
    callback(result);
}

add(10, 10, function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10,10)의 결과 : %d', result);
});

// 콜백함수
// 파라미터로 전달되는 함수를 Callback FUnction이라고 한다.
// 함수가 실행되는 중간에 호출되어 상태 정보를 전달하거나 결과 값을 처리하는데 사용
