//1. useState 훅
//컴퍼넌트 내에서 상태를 관리할 수 있도록 도와주는 훅이다.
//상태 변수와 상태를 업데이트하는 함수를 반환합니다.
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

//index.js import App
export function Counter1() {
  let count = 0;

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => count + 1}>증가</button>
    </div>
  );
}
//*상태변수가 업데이트시 리렌더링됨.
export function Counter2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

//2. useEffect 훅: 사이트 이펙트 관리 훅
//함수형 컴퍼넌트의 생명주기 함수를 지원한다.
//1. 마운트 : useEffect( ()=>{},[] );
//2. 언마운트:useEffect(return()=>{} )
//3. 업데이트(props, state가 업데이트 될 때): useEffect( ()=>{}, [state1, state2]    );

export function Counter3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("컴퍼넌트가 마운트되었습니다.");
  }, []);

  useEffect(() => {
    return () => {
      console.log("컴퍼넌트가 언마운트되었습니다.");
    };
  });

  useEffect(() => {
    console.log("컴퍼넌트가 업데이트되었습니다.");
  }, [count]); //의존성 변수(배열)

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

//3. useMemo 훅
// useMemo는 특정 연산의 결과를 메모이제이션(저장)하여
//불필요한 잭계산을 방지하는데 사용된다.
//컴퍼넌트가 렌더링 될때마다 매번 계산하는 대신
//의존성 배열에 명시된 값이 변경될 때만 해당 연산을 다시 수행한다.
//용도
//1. 비용이 큰 연산을 최적화할 때(통신, 큰 데이터 연산...)
//2. 렌더링 성능을 개선할 때
//계산한 값을 변경되지 않는 한 계속 가지고 있음.
export function Counter4() {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  //number 상태변수가 변경되지 않는 한, double 값은
  //재 연산되지 않음.

  const double = useMemo(() => {
    console.log("두배 연산중...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h1>useMemo</h1>
      <h1>입력한 숫자: {number}</h1>
      <h2>두 배 결과: {double}</h2>

      <input
        type="number"
        value={number}
        onchange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

//4. useCallback 함수
export function Counter5() {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  //useMemo 두 배 계산 결과를 메모이제이션
  const double = useMemo(() => {
    console.log("두배 연산중...");
    return number * 2;
  }, [number]);

  //useCallback으로 숫자 입력 핸들러(콜백함수) 메이제이션
  //e: JS 이벤트 객체 , 이벤트함수에서 전달됨
  const handleNumberChange = useCallback((e) => {
    console.log("useCallback 메모이제이션");
    setNumber(parseInt(e.target.value) || 0);
  }, []);

  const handleInputChange = useCallback((e) => {
    console.log("useCallback 메모이제이션2");
    setInputValue(e.target.value);
  }, []);

  return (
    <div>
      <h1>useCallback</h1>
      <h1>입력한 숫자: {number}</h1>
      <h2>두 배 결과: {double}</h2>

      <input type="number" value={number} onChange={handleNumberChange} />

      <br />
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

export function Counter6() {
  const [count, setCount] = useState(0);
  const clickCountRef = useRef(0); //useRef로 클릭 횟수 관리

  const handleClick = () => {
    setCount(count + 1);
    clickCountRef.current += 1; //A+=B , A= A+B
    console.log("총 클릭 횟수:", clickCountRef.current);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2>버튼 클릭 횟수: {clickCountRef.current}</h2>
      <button onClick={handleClick} 증가></button>
    </div>
  );
}
