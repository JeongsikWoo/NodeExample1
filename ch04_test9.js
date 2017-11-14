// 파일 읽어 들이기

var fs = require('fs');

// open() 파일 열기
fs.open('./output.txt', 'r', function(err, fd){
    if(err) throw err;

    // Prameter byte 크기의 객체 지정
    // 바이너리 데이터를 읽고 쓰기위해 Buffer 인스턴스 생성. UTF-8에서 한글은 한 글자 당 3바이트
    var buf = new Buffer(99);

    console.log('버퍼 타입 : %s', Buffer.isBuffer(buf));

    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer){
        if(err) throw err;

        var inStr = buffer.toString('utf8', 0, bytesRead);
        console.log('파일에서 읽은 데이터 : %s', inStr);

        console.log(err, bytesRead, buffer);

        fs.close(fd, function(){
            console.log('output.txt 파일을 열고 읽기 완료');
        });
    });
});

/*
    플래그
    r : 읽기
    w : 쓰기
    w+ : 읽기와 덮어쓰기, 파일 없으면 만들어진다.
    a+ : 읽기와 이어쓰기, 파일 없으면 만들어진다.
*/