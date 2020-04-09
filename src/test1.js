import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// 1. 숫자 두개를 넘겨주면 두 숫자의 합을 돌려주는 function sum 을
// 정의하세요(3가지 함수 스타일로)

function sum(x, y) {
  return x + y;
}
console.log(sum(10, 15));

const sum1 = function(x, y) {
  return x + y;
};
console.log(sum1(10, 15));

const sum2 = (x, y) => {
  return x + y;
};
console.log(sum2(10, 15));

/// 2. 문자열 타입의 숫자 두개를 입력받으면 두 숫자의 합을 구해
//  리턴하는 sumStr function 세가지 함수 스타일로 정의하세요
//  hint : string type 의 숫자를 number type 으로 변환하기 위해서는
//         parseInt() 함수를 이용할 수 있어요
//         https://www.w3schools.com/jsref/jsref_parseint.asp

function sumStr(x, y) {
  return parseInt(x) + parseInt(y);
}
console.log(sumStr("4", "3"));

const sumStr1 = function(x, y) {
  return parseInt(x) + parseInt(y);
};
console.log(sumStr1("4", "3"));

const sumStr2 = (x, y) => {
  return parseInt(x) + parseInt(y);
};
console.log(sumStr2("4", "3"));

// 3. 자바스크립트는 파라미터로 어떤 타입이 들어오는지 모른다고
// 이야기 했는데요
//  함수에 전달된 파라미터 타입값을 리턴하는 checkType function 을 정의하세요
//  hint : typeof <변수> 를 하면 변수의 타입을 알수 있습니다

function checkType(x) {
  return typeof x;
}
console.log(checkType("abc"));

const t = function(x) {
  return typeof x;
};
console.log(t("abc"));

const t1 = x => {
  return typeof x;
};
console.log(t("abc"));

// 4. 함수에 파라미터로 전달된 숫자 값이 10보다 크면 "High" 를,
//    작으면 "Low" 를 리턴하는 함수 lowHigh 를 정의하세요
//    같다면 "Draw" 를 리턴합니다

function lowHigh(x) {
  if (x > 10) {
    console.log("High");
  } else if (x < 10) {
    console.log("Low");
  } else if ((x = 10)) {
    console.log("Draw");
  }
}
console.log(lowHigh(15));
console.log(lowHigh(6));
console.log(lowHigh(10));

const lowHigh1 = function(x) {
  if (x > 10) {
    console.log("High");
  } else if (x < 10) {
    console.log("Low");
  } else if ((x = 10)) {
    console.log("Draw");
  }
};
console.log(lowHigh(15));
console.log(lowHigh(6));
console.log(lowHigh(10));

const lowHigh2 = x => {
  if (x > 10) {
    console.log("High");
  } else if (x < 10) {
    console.log("Low");
  } else if ((x = 10)) {
    console.log("Draw");
  }
};
console.log(lowHigh(15));
console.log(lowHigh(6));
console.log(lowHigh(10));

/// 5. 함수에 파라미터로 전달된 값의 타입이 숫자 타입이면 숫자 그대로
//   리턴하고 문자열 타입의 숫자이면 숫자 타입으로 변환해서 리턴하는
//   str2num function 을 정의하세요

function str2num(x) {
  if (typeof x == "string") {
    return parseInt(x);
  } else return x;
}
console.log(str2num(6));
console.log(str2num("3") + str2num(6));

const str2num1 = function(x) {
  if (typeof x === "string") {
    return parseInt(x);
  } else return x;
};
console.log(str2num1("6"));

const str2num2 = x => {
  if (typeof x === "string") {
    return parseInt(x);
  } else return x;
};
console.log(str2num2("6"));

/// 6. 함수에 파라미터로 전달된 값의 타입이 문자열 타입이면 문자열 그대로
//   리턴하고 숫자 타입이면 문자로 변환해서 리턴하는 num2str function 을 정의하세요

function num2str(x) {
  if (typeof x === "number") {
    return String(x);
  } else return x;
}
console.log(num2str(3) + num2str(5));

const num2str1 = function(x) {
  if (typeof x === "number") {
    return String(x);
  }
};
console.log(num2str1(3) + num2str1(5));

const num2str2 = x => {
  if (typeof x === "number") {
    return String(x);
  }
};
console.log(num2str2(3) + num2str2(5));

// 7. 파라미터로 숫자를 원소로 하는 array 타입이 전달되면
//   모든 원소를 두배로 만들어 array 로 리턴하는 times2 function 을 정의하세요.

// const arrx = [1,4,8]
// const result = arrx * 2;
// const times2 = arrx.map(n=>n*2);
// console.log(times2);

// forEach
const arr = [1, 2, 4];
const times2 = [];

arr.forEach(n => {
  times2.push(n * 2);
});
console.log(times2);

// for문
const arr1 = [1, 4, 8];
const result = times(arr1);

function times(x) {
  let y = [];

  for (let i = 0; i < x.length; i++) {
    y.push(x[i] * 2);
  }
  return y;
}
console.log(result);

/// 8. 파라미터로 숫자를 원소로 하는 array 타입이 전달되면,
//    또다른 파라미터로 전달된 n 배를 해서 리턴하는
// timesX function 을 정의하세요

const arrx = [1, 3, 2];
const resultx = timesX(arrx, 3);

function timesX(x, y) {
  let y1 = [];

  for (let i in x) {
    y1.push(x[i] * y);
  }
  return y1;
}
console.log(resultx);
console.log(timesX([8, 2, 6], 5));

// 아라비아 숫자를 한글 숫자로 변환하는
// function을 만들어보세요

//전달 되는 숫자는 한자리 숫자로 가정

console.log(num2han(1));

function num2han(num) {
  switch (num) {
    case 1:
      console.log("일");
      break;
    case 2:
      console.log("이");
      break;
    case 3:
      console.log("삼");
      break;
    case 4:
      console.log("사");
      break;
    case 5:
      console.log("오");
      break;
    case 6:
      console.log("육");
      break;
    case 7:
      console.log("칠");
      break;
    case 8:
      console.log("팔");
      break;
    case 9:
      console.log("구");
      break;
    case 0:
      console.log("영");
      break;
  }
}
