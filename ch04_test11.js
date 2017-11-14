// 스트림 단위로 파일 읽고 쓰기
/*
    createReadStream(path, [options]) : 파일을 읽기 위한 스트림 객체 생성
    createWriteStream(path, [options]) : 파일을 쓰기 위한 스트림 객체 생성
*/

var fs = require('fs');
var infile = fs.createReadStream('./output.txt', {flags: 'r'}); // read
var outfile = fs.createWriteStream('./output2.txt', {flags: 'w'}); // write

infile.on('data', function(data){
    console.log('읽어 들인 데이터', data);
    outfile.write(data);
});

infile.on('end', function(data){
    console.log('파일 읽기 종료.');
    outfile.end(function(){
        console.log('파일 쓰기 종료.');
    });
});