

import {useState} 


//커스텀 훅 정의
function useCounter (initValue=0){
  const [count,setCount]=useState(0);

 const increase=()=> setCount((prev)=>prev +1);
 const decrease=()=> setCount((prev)=>prev +1);
 const reset=()=> setCount(initValue);
 
return {count, increase, decrease, reset};
}

//import useCounter from "./useCounter"; //커스텀 훅 인포트
// 상태변경 함수 increase, decrease, reset 여러 개를 설계하고자 할 때 
export function Counter(){
  const {count,increase,decrease,reset}=useCounter(0);

  return(
    <div>
    <h3>Counter: {count}</h3>
    <button onClick={increase}>증가</button>
    <button onClick={decrease}>감소</button>
    <button onClick={reset}>리셋</button>
    </div>
  );
}

export default App;