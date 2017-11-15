var winston = require('winston'); // 로그 처리 모듈
var winstonDaily = require('winston-daily-rotate-file'); // 로그 일별 처리 모듈
var moment = require('moment'); // 시간 처리 모듈

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
    // ex) '2017-11-15 17:21:23.500 +0900'
};

// Logger : 로그를 출력하는 객체. transports 속성으로 설정 정보를 전달한다.
var logger = new (winston.Logger)({
    transports: [
        new (winstonDaily)({
            name: 'info-file',
            filename: './log/server',
            datePattern: '_yyyy-MM-dd.log',
            colorize: false, // 색상적용
            mixsize: 50000000, // 50MB. 초과시 새 파일 생성
            maxFiles: 1000, // 분리되어 생성되는 파일 최대 1000개
            level: 'info', // info 수준 로그 기록
            showLevel: true, // debug 수준 로그 출력
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name: 'exception-file',
            filename: './log/exception',
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'error',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});

/*
로그 수준 : 어쩐 정보까지 출력할 것인지 결정
debug: 0 > info: 1 > notice: 2 > warning: 3 > error: 4 > crit: 5 > alert: 6 > emerg: 7
하위 수준은 상위 수준을 포함하여 출력
*/

// winston : 로그를 파일로 저장하면서 화면에 출력