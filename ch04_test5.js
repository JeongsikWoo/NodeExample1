// 파일 다루기

var fs = require('fs');

// 파일을 동기식 IO로 읽는다.
var data = fs.readFileSync('/Users/JeongsikWoo/Documents/VisualStudioCodeProject/NodeExample1/package.json', 'utf8');

// 읽어 들인 데이터를 출력
console.log(data);