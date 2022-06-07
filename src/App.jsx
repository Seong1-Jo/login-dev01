import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const idFocus = useRef("");
  console.log(idFocus); // #1. id input태그에 current갖고있는 객체를 확인

  useEffect(() => {//#2. 처음 화면이 출력되었을때 행동으로 useEffect를 이용
    idFocus.current.focus(); //#3. current뒤에다 focus함수를 주면, focus가 주어짐 
  },[]); //#3. dependency array로 빈값을 주어 처음랜더링 되었을때만 useEffect사용
  return (
    <div>
      <div className='loginId'>
        <span>ID</span>
        <input type="text" ref={idFocus}/>
      </div>
      <div className="loginPw">
        <span>PW</span>
        <input type="password" />
      </div>
      <div className="loginBtn">
        <button>Login</button>
      </div>
    </div>
  )
}

export default App
