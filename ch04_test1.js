// 주소 문자열을 URL 객체로 변환하기

// require() 메서드 호출
// url 모듈 로딩 후 변수 url에 할당
var url = require('url');

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

// URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log('주소 문자열 %s', curStr);
console.dir(curURL);

// 파라미터 확인하기
// querystring 모듈

// require() 메서드 호출하여 querystring 모듈을 불러와 querystring 변수에 할당
var querystring = require('querystring');

// 메서드로 파라미터 문자열(query)을 파싱하여 객체로 만들어 param 변수에 할당
// parse() : 요청 파라미터 문자열을 파싱하여 요청 파라미터 객체로 만들어준다.
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query);
// stringify() : 요청 파라미터 객체를 문자열로 변환한다.
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));