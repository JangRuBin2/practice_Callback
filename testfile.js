// file stystem
import fs from "fs";
let name = "jangrubin";
// let date = new Date();
// let filename = date.getMinutes() + name;
let year = "2023";
let month = "03";
let day = "20";
let fileName = year + month + day + "-" + name;
// 파일도 동적으로 생성이 가능함을 알 수 있다.
fs.writeFileSync("./" + fileName, name);
// 파일을 자동으로 생성해 주는 것 도 만들 수 있나?, 파일을 삭제하는 메서드를 찾을 수 도있나??
