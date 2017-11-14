// http 모듈로 요청받은 파일 내용 읽고 응답하기
// 파일에서 만든 스트림 객체와 웹 서버의 스트림 객체를 pipe() 메서드로 연결할 수 있다.

var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res){
    // 파일을 읽고 응답 스트림과 pipe()메서드로 연결
    var instream = fs.createReadStreamReadStream('./output.txt');
    instream.pipe(res);
});

server.listen(7001, '127.0.0.1');