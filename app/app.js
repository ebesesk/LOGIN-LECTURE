"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

// 로그
const morgan = require("morgan");
const accessLogStream = require("./src/config/log");
app.use(morgan("common", { stream: accessLogStream}));


// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", home);  // use -> 미들 웨어를 등록해주는 메서드.


module.exports = app;








// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"content-Type": "text/html; charset=utf-8"});
//     if (req.url === '/') {
//         res.end("여기는 루트입니다.")
//     } else if (req.url === '/login') {
//         res.end("여기는 로그인입니다.")
//     }
// });

// app.listen(3000, () => {
//     console.log("http로 가동된 서버입니다.")
// });

