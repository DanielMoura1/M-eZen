import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <>
      <div class="login-container">
        <h2>Login</h2>
        <form action="/login" method="POST">
          <label for="username">Usuário:</label>
          <input type="text" id="username" name="username" required />

          <label for="password">Senha:</label>
          <input type="password" id="password" name="password" required />
          <button onClick={()=> navigate("/cadastro")} className='entrar'>Cadastrar</button>
          <button  onClick={()=> navigate("/home")} className='entrar'>Entrar</button>
        </form>
      </div>
    </>
  )
}

export default App
