// constructor 생성자 함수  <-자식 LifecycleClss의 컴포넌트
//extends 상속
//부모 Component를 초기화해야할 때 생성자를 호출해야함.
//  Compoenent 안 state
import React, { Component, useState, useEffect } from "react";

class LifecycleClass extends Component {
  constructor(props) {
    //자식생성자 함수
    super(props); //부모생성자 함수 호출
    this.state = {
      //상태변수 선언
      count: 0,
    };
  }

  //마운트 발생시 호출됨.
  componentDidMount() {
    console.log("컴퍼넌트가 마운트되었음.");
  }
  //언마운트 발생시 호출됨.
  componentWillUnmount() {
    console.log("컴퍼넌트가 언마운트되었음.");
  }
  //상태나 props가 변경시 호출됨(update)
  componentDidUpadate() {
    console.log(`컴퍼넌트가 업데이트됨.${this.state.count}`);
  }
  render() {
    return (
      <div>
        <h1>리액트 라이프사이클 (클래스형) </h1>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => {
            //setState: 클래스형 컴퍼넌트의 상태변경 함수
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

//함수형 컴퍼넌트
export function LifecycleFunc() {
  // 상태변수 상태설정함수 초기값
  const [count, setCount] = useState(0);

  //마운트 & 언마운트
  useEffect(() => {
    console.log("컴퍼넌트가 마운트되었음");
    return () => {
      console.log("컴퍼넌트가 언마운트됨.");
    };
  }, []);
  //빈 배열을 넣으면, 마운트/언마운트시 한번만 호출

  //업데이트
  useEffect(() => {
    console.log("컴퍼넌트가 업데이트됨");
  }, [count]); //의존성 상태변수 배열을 설정한다.

  return (
    <div>
      <h1>리액트 라이프사이클(함수형 컴퍼넌트)</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

//부모 컴포넌트
export function Lifecycle() {
  //            상태변수 상태설정함수
  const [showComponent, setShowComponent] = useState(true);

  //조건부 렌더링
  //1. if else
  //2. 삼항연산자
  //3. 논리연산자(&& ||)
  //return 코드 안에 최상위 코드 한줄만 있어야 함.
  //true면 컴퍼넌트 제거 , false면 컴퍼넌트 추가
  //  setShowComponent(!ShowComponent);   T->F  F-> T

  return (
    <div style={{ padding: "20px" }}>
      {showComponent && <LifecycleFunc />}
      <button
        onClick={() => {
          setShowComponent(!showComponent);
        }}
      >
        {showComponent ? "컴퍼넌트 제거" : "컴퍼넌트 추가"}
      </button>
    </div>
  );
}
