import { useRef } from 'react'
import './App.css'

function App() {
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
