import http from "http";
console.dir(http);
// 외우면 안된다?
// 인자(argument)를 전달 받았음을 알 수 있다.-> callback함수 형태네?
const sever = http.createServer(function (request, response) {
  let body = "";
  body += "<!DOCTYPE html>";
  // body = body + "<!DOCTYPE html>"이라는 뜻
  body += "<html>";
  body += "<head>";
  body += "<title>node.js</title>";
  body += "</head>";
  body += "<body>";
  body += "<h1>hello world</h1>";
  body += "</body>";
  body += "</html>";
  // 문서는 문서가 아니었다 문서는 string덩어리 였다
  response.statusCode = 200;
  response.setHeader("content-type", "text/plain");
  response.end("hello world");
  // response는 데이터가 객체네
});
