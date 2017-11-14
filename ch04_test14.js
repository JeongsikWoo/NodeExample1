// fs 모듈로 새 디렉터리 생성 후 삭제하기

var fs = require('fs');
fs.mkdir('./new_folder', 0621, function(err){
    if(err) throw err;
    console.log('새로운 docs 폴더를 만들었습니다.');

    fs.rmdir('./new_folder', function(err){
        if(err) throw err;
        console.log('docs 폴더를 삭제했습니다.');
    });
    
});