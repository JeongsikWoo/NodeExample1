var http = require('http');

// 웹서버 객체 생성
var server = http.createServer();

// 웹서버 시작 3000번 포트에서 대기
var port = 3000;
server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다. : %d', port);
});

// 클라이언트 연결 이벤트
server.on('connection', function(socket){
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. %s, %d', addr.address, addr.port);
});

// 클라이언트 요청 이벤트
server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');
    res.writeHead(200, {"Content-Type" : "text/html; charset=urf-8"});
    res.write("<!DOVTYPE html>");
    res.write(" <head>");
    res.write("     <title>응답 페이지</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write("     <h1>NodeJS로부터의 응답</h1>");
    res.write(" </body>");
    res.write("</html>");
    res.end();
});

// 클라이언트 종료 이벤트
server.on('close', function(){
    console.log('서버가 종료됩니다.');
});