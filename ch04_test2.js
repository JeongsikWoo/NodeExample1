// 이벤트 보내고 받기

// on(event, listener) : 지정한 이벤트의 리스너를 추가
// once(event, listener) : 지정한 이벤트의 리스너를 추가하지만, 한 번 실행 후 리스너 제거
// removeListener(event, listener) : 이벤트의 리스너 제거

// process 객체는 노드에서 사용 가능한 객체로 EventEmitter를 상소받아 on(), emit() 메서드 사용 가능
// process 객체의 on() 메서드를 호출하면서 exit라는 이름의 이벤트를 
process.on('exit', function(){
    console.log('exit 이벤트 발생.');
});

console.log('실행.');
setTimeout(function() {
    console.log('2초 후에 시스템 종료 시도.');

    process.exit();
}, 2000);