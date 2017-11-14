// 직접 만든 이벤트 처리

// 이벤트 생성
// tick 이벤트 발생시 콜백 함수 실행
process.on('tick', function(str) {
    console.log('tick 이벤트 발생 : %s', str);
});

// 2초 지연
setTimeout(function(){
    console.log('2초 후에 tick이벤트 전달');

    // tick 이벤트를 process 객체로 전달
    process.emit('tick','teststring');
}, 2000);