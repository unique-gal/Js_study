// // 1.현재 날짜와 시간 구하기
var today = new Date();
var day = today.getDay();
var daylist = ["월", "수", "수", "목", "금", "토", "일"];
var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
var p = hour >= 12 ? "PM" : "AM";
console.log(`오늘은 ${daylist[day]}요일입니다.`);
console.log(`지금시간은 ${hour}${p} ${minute} : ${seconds}`);

// 3.날짜를 dd-mm-yyyy 형태로 출력하기
var today1 = new Date();
var yyyy = today1.getFullYear();
var mm = today1.getMonth();
var dd = today1.getDay();
if (mm < 10) {
  mm = "0" + mm;
}
if (dd < 10) {
  dd = "0" + dd;
}
var today2 = dd + "-" + mm + "-" + yyyy;
console.log(today2);

// 10.곱하기 나누기 화면
function multiply() {
  var num1 = document.getElementById("firstnum").value;
  var num2 = document.getElementById("secondsnum").value;
  document.getElementById("result").innerHTML = num1 * num2;
}
const divide = () => {
  var num1 = document.getElementById("firstnum").value;
  var num2 = document.getElementById("secondsnum").value;
  document.getElementById("result").innerHTML = num1 / num2;
};

//13.변수 이름 정하기
// var name = "abcd";
// var n = 120;
// console.log(name);
// console.log(n);
// this[name] = n;
// console.log(this[name]);

// 15. 주어진 숫자와 13의 차이를 구하고,
// 숫자가 13보다 크면 절대 차이의 두 배를 리턴
function diff(n) {
  if (n < 13) {
    return 13 - n;
  } else return (n - 13) * 2;
}
console.log(diff(32));

// 16. 두정수의 합을 계산하고, 두값이 같으면 합계의 3배를 반환
function sum(x, y) {
  if (x === y) {
    return (x + y) * 3;
  } else return x + y;
}
console.log(sum(2, 2));

// 17. 지정된 숫자와 19의 차이를 계산하고, 지정된 숫자가 큰 경우 차이의 3배 반환
function minus(n) {
  if (n > 19) {
    return (n - 19) * 3;
  } else 19 - n;
}
console.log(minus(21));

//18. 주어진 두 숫자 중 하나가 50이거나, 합계나 50인경우 true 반환
function torf(x, y) {
  if (x === 50 || y === 50 || x + y === 50) {
    return true;
  } else return false;
}
console.log(torf(25, 25));
console.log(torf(25, 35));
console.log(torf(25, 50));

//다른 방법
function test50(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}
console.log(test50(40, 20));
console.log(test50(30, 20));

// 21. 주어진 문자열 앞에 'Py'를 추가하고, 'Py'로 시작하면 그대로 반환
function textPy(x) {
  if (x === null || x === undefined || x.substring(0, 2) === "Py") {
    return x;
  }
  return "Py" + x;
}
console.log(textPy("Python"));
console.log(textPy("thon"));

const str = "unagal";
console.log(str.substring(3));

//22. 지정된 위치에 문자를 제거한 새 문자열 반환
function remove(str, char_pos) {
  var part1 = str.substring(0, char_pos);
  var part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}
console.log(remove("Hello", 2));

//23. 첫번째와 마지막 문자 위치 변경
//단, 문자열이 1보다 작거나 같을 때는 그대로 반환,
function switchtext(str) {
  if (str.length <= 1) {
    return str;
  }
  var mid_char = str.substring(1, str.length - 1);
  return str.charAt(str.length - 1) + mid_char + str.charAt(0);
}
console.log(switchtext("b"));
console.log(switchtext("ab"));
console.log(switchtext("abcdefg"));

// 24. 문자열 첫번째 글자를 텍스트 앞과 뒤에 추가하기
function textadd(str) {
  var first_text = str.charAt(0);
  return first_text + str + first_text;
}
console.log(textadd("abcdefg"));

// 26. 문자열에서 마지막 3자를 앞뒤에 추가하기
function textadd1(str) {
  var lasttext = str.substring(str.length - 3);
  return lasttext + str + lasttext;
}
console.log(textadd1("abcdfff"));

// 25.주어진 숫자가 3의 배수이거나 7의 배수이면 true 반환
function test37(x) {
  if (x % 3 === 0 || x % 7 === 0) {
    return true;
  } else return false;
}
console.log(test37(6));
console.log(test37(10));
console.log(test37(35));

//27. 문자열이 java가 포함되어 있는 경우 true, 없으면 false반환
function javacheck(str) {
  if (str.length < 4) {
    return false;
  }
  if(str.indexOf('java')){
    return true;
  }else return false;
}
console.log(javacheck('checkjava'));