var fs = require('fs');

// 파일을 비동기식 IO로 읽어온다.
fs.readFile('/Users/JeongsikWoo/Documents/VisualStudioCodeProject/NodeExample1/package.json', 'utf8', function(err, data){
    // 오류 발생시 err에 오류 데이터가 들어가고, 아니면 err가 null
    
    // 데이타 출력
    console.log(data);
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');

/*
파일 읽고쓰는 메서드
readFile(filename, [encoding], [callback]) : 비동기식 IO로 파일읽기
readFileSync(filename, [encoding]) : 동기식 IO로 파일읽기
writeFile(filename, data, encoding='utf8', [callback]) : 비동기식 IO로 파일쓰기
writeFileSync(filename, data, encoding='utf8') : 동기식 IO로 파일쓰기
*/