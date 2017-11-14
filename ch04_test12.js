// 스트림 단위로 파일 읽고 쓰기
/*
    createReadStream(path, [options]) : 파일을 읽기 위한 스트림 객체 생성
    createWriteStream(path, [options]) : 파일을 쓰기 위한 스트림 객체 생성
*/

var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function(exists){
    // 같은 이름 파일이 이미 있을경우
    if(exists){
        // unlink() 메소드를 이용하여 삭제
        fs.unlink(outname, function(err){
            if(err) throw err;
            console.log('기존 파일 [' + outname + '] 삭제함.');
        });
    }

    var infile = fs.createReadStream(inname, {flags: 'r'});
    var outfile = fs.createWriteStream(outname, {flags: 'w'});

    // pipe() 메소드로 infile-outfile 스트림 객체를 연결
    infile.pipe(outfile);
    console.log('파일 복사 [' + inname + '] -> [' + outname + ']');
});