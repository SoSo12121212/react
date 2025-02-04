// Ex.jsx
// 연습문제1: 간단한 인사말 출력하기
// 목표: props로 받은 이름을 화면에 출력하는 간단한 컴포넌트 연습
// 요구사항
// 1. Hello 컴포넌트를 만들고, name이라는 props로 받은 값을 화면에
// "안녕하세요, [name]님!"이라고 출력하세요.

// 연습문제2: 간단한 계산기
// 목표: 두 개의 숫자(props)를 받아 합을 계산하여 화면에 출력하는 컴포넌트
// 요구사항
// 1. num1과 num2라는 props를 받아 두 값을 더한 결과를 출력하는 Sum 컴포넌트를 만들어 보세요.

// 연습문제3: 간단한 자동판매기
// 목표: 받은 금액에 따라 자동으로 음료를 결정하고 출력하는 컴포넌트 연습
// 요구사항
// 1. DrinkMachine 컴포넌트를 만들고, price라는 props로 받은 금액에 따라 아래와 같이 출력하세요.
// 2. 1000원: "콜라"
// 3. 2000원: "사이다"
// 4. 그 외 금액: "물"
//
function Hello(name) {
  return <h1> "안녕하세요 " {props.name}님!</h1>;
}

function Sum(props) {
  //숫자 덧셈 계산
  //parseInt, parseFloat, Number(value)
  const sum = parseInt(props.num1) + parseInt(props.num2);

  return (
    <>
      <h1>첫번째 숫자는 {props.num1}입니다.</h1>
      <h1>두번째 숫자는 {props.num2}입니다.</h1>
      <h1>두 숫자의 합은 {sum}입니다.</h1>
    </>
  );
}

function Drink({ name, price }) {
  return <p>{price}원</p>;
}

function DrinkMachine(props) {
  let selectedDrink;

  if (props.price === 1000) {
    selectedDrink = "콜라";
  } else if (props.price === 2000) {
    selectedDrink = "사이다";
  } else {
    selectedDrink = "물";
  }

  return (
    <>
      <h1>{`받은 금액: ${props.price}원`}</h1>
      <h1>{`선택된 음료: ${drink}`}</h1>
    </>
  );
}

export default DrinkMachine;
