import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const idFocus = useRef(""); //id를 위한 focus
  const pwFocus = useRef(""); //pw를 위한 focus
  const [ idState, setIdState ] = useState(""); //#5. id,pw의 value를 담을 state를 설정
  const [ pwState, setPwState ] = useState("");

  useEffect(() => {
    idFocus.current.focus(); 
  },[]); 

  const idChange = (e) => { //#6. onChange하여, id의 value값 업데이트, 같은 방식으로 pw는 jsx에 직접 넣어줌
    setIdState(e.target.value);
  };
 
  const checkClick = () => { //#7. onClick를 이용하여 id,pw에 조건에 맞는 alert창 띄우기. 
    const idLength = idState.length;
    const pwLength = pwState.length;

    switch (true) {
      case (idLength >= 5 && idLength <= 10) && (pwLength >= 5):
        alert('로그인 되었습니다.');
        break;
      case (idLength >= 5 && idLength <= 10) && (pwLength < 5):
        alert('비밀번호를 다시작성해주세요');
        pwFocus.current.focus();//#8 alert창 후 해당input focus
        break;
      default:
        alert('아이디를 다시작성해주세요');
        idFocus.current.focus();
        break;
    };
  };

  return (
    <div>
      <div className='loginId'>
        <span>ID</span>
        <input 
        type="text" 
        ref={idFocus} 
        onChange={idChange} 
        value={idState} 
        />
      </div>
      <div className="loginPw">
        <span>PW</span>
        <input 
        type="password"
        ref={pwFocus}  
        onChange={ e =>  setPwState(e.target.value) } 
        value={pwState} 
        />  
      </div>
      <div className="loginBtn">
        <button onClick={checkClick}>Login</button>
      </div>
    </div>
  )
}

export default App
