var fs = require('fs');

// 파일쓰기
fs.writeFile('./output.txt', 'Hello World!', function(err){
    if(err){
        console.log('Error : ' + err);
    }

    console.log('output.txt 파일에 데이터 쓰기 완료.');
});