import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Cadastro() {
  const [count, setCount] = useState(0)
  function teste(){
    alert('O site ainda não está pronto')
  }

  return (
    <>
    <div class="login-container">
    <h2>Cadastro</h2>
    <form action="/cadastro" method="POST">
      <label for="nome">Nome completo:</label>
      <input type="text" id="nome" name="nome" required />

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required />

      <label  for="username">Usuário:</label>
      <input className='email' type="text" id="username" name="username" required />

      <label for="password">Senha:</label>
      <input type="password" id="password" name="password" required />

      <button onClick={teste} className='entrar' type="submit">Cadastrar</button>
    </form>
  </div>
    </>
  )
}

export default Cadastro
