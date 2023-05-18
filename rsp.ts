function gambambo(na:string, you:string):string {
  let result:string = "과연 결과는?";
  // let rock:string = "바위"; 
  let a, b, c;
  a = "이겼다";
  b = "졌다";
  c = "비겼다";
  // 내가 가위를 냈을 때
  if(na ==="가위" || na ==="찌") {
    if(you === "가위" || you === "찌") {
      result = c;
    }
    if(you === "바위" || you === "묵") {
      result = b;
    }
    if(you === "보자기" || you === "빠") {
      result = a;
    }
  };
  // 내가 바위를 냈을 때
  if(na ==="바위" || na ==="묵") {
    if(you === "가위" || you === "찌") {
      result = a;
    }
    if(you === "바위" || you === "묵") {
      result = c;
    }
    if(you === "보자기" || you === "빠") {
      result = b;
    }
  };  
  // 내가 보자기를 냈을 때
  if(na ==="보자기" || na ==="빠") {
    if(you === "가위" || you === "찌") {
      result = b;
    }
    if(you === "바위" || you === "묵") {
      result = a;
    }
    if(you === "보자기" || you === "빠") {
      result = c;
    }
  };  
  return result;
}
// ? 내가 져야함
console.log(gambambo("찌","묵"));
// ? 내가 비겨야함
console.log(gambambo("찌","가위"));
// ? 내가 이겨야함
console.log(gambambo("빠","묵"));
// ? 작업을 할 때 첫번째로 해야할 것은 조건(가위바위보)을 가지고 얽힌 생각을 풀어내야 한다.
// ? 1. 함수가 될지 클래스가 될지 모르지만 이름을 만들어 줌
// ? 2. 규칙을 적습니다. -> 한글로 적어야 알아 먹음(작업중이라고 써넣는다)
// ! 설계(규칙) 구상중 -> 불변하는 '전제'
// * 가위바위보를 하는 함수를 만들건데 ga, ba, bo 세가지 경우가 있다.
// * 가위는 주먹한테 지고, 보자기는 이긴다.
// * 주먹은 보자기한테 지고, 가위는 이긴다.
// * 보자기는 가위한테 지고, 주먹은 이긴다.
// 함수에서 가위,바위,보 문자로 받는다면 변수선언은 필요없을듯 함
// 그러면 문자로 받아서 하는 경우 먼저해보자
//! a,b,c 세가지 경우의 수를 두자 "이겼다, 졌다, 비겼다"
// ! 결과 값을 result에 담아서 return해주자