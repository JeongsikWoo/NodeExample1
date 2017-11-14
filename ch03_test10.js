var Users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}, {name:'티아라', age:23}];

console.log('배열 요소의 수 : %d', Users.length);

for(var i = 0 ; i < Users.length ; i++){
    console.log('배열 요소 #' + i + ' : %s', Users[i].name);
}

console.log('\nforEach 구문 사용하기');

Users.forEach(function(item, index){
    console.log('배열 요소 #' + index + ': %s', item.name);
});


// 객체를 저장하는 배열 생성 후 변수 Users에 할당
// 배열 길이를 출력
// 배열 요소만큼 반복하여 인덱스 순으로 name 속성 출력
// forEach 사용하여 출력
// 파라미터 순서를 반드시 지켜야 한다.