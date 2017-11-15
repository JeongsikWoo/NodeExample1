// http 모듈 불러와 http 변수에 할당한다.
var http = require('http');

// 웹 서버 객체 생성하여 server 변수에 할당한다.
var server = http.createServer();

// 웹서버를 시작하여 1000번 포트에서 대기한다.
var host = '192.168.0.5';
var port = 3000;
server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다. : %s, %d', host, port);
});