// 연습문제1: 동적 표현식 렌더링
// 목표: props로 받은 이름을 화면에 출력하는 간단한 컴포넌트 연습
// 요구사항
// 1. Namecard 컴포넌트를 만들고, user 객체의 정보를 JSX에 넣어서
//   표현한다.
// 2. props는 사용안함.

const user = {
  firstName: "김",
  lastName: "민수",
  age: 30,
};

export const E1= (
  <ul>
    {User.map((item, index, array)=>{
    {
      console.log(index);
    }

    })}

  </ul>
)


//연습문제2: props를 이용해 이름과 나이 출력하기
// 목표: props로 전달받은 이름과 나이를 사용자 정의 컴퍼넌트에 출력한다.
// 요구사항
// 1. Greeting 함수형 컴퍼넌트를 만들고, props로 전달받은 name과 age를
//   출력한다.
// 2. 출력양식 : 안녕하세요, 홍길동님! 당신의 나이는 25살입니다.
