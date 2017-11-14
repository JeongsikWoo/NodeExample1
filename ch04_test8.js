// 파일 열고 닫으면서 읽고 쓰기

var fs = require('fs');

// 파일쓰기
// 호출 순서 open() write() close()
// open() 파일 열기
fs.open('./output.txt', 'a+', function(err, fd){
    if(err){
        throw err;
    }

    var buf = new Buffer('이어쓰기 테스트 중!\n');
    // write() 파일 쓰기
    // fd 객체로 파일을 구별
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        console.log(err, written, buffer);
        
        // close() 파일 닫기
        fs.close(fd, function(){
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료.');
        });
    })
});

/*
    플래그
    r : 읽기
    w : 쓰기
    w+ : 읽기와 덮어쓰기, 파일 없으면 만들어진다.
    a+ : 읽기와 이어쓰기, 파일 없으면 만들어진다.
*/