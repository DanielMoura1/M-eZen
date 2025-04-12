import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
  const [rotinas, setRotinhas] = useState([{ id: 1, texto: "Acordar",horaI:'08:00',horaF:'08:00'}, { id: 2, texto: "Ler a Bíblia",horaI:'09:00',horaF:'10:00'},{ id: 3, texto: "Fazer exercício",horaI:'10:30',horaF:'11:30' }])
  const [pagina,setPagina] =useState(true)
  const [criar,setCriar] =useState(false)
  const [apoio,setApoio] =useState(false)
  const [novaRotina, setNovaRotina] = useState('');
  const [horai, setHorai] = useState('');
  const [horaf, setHoraf] = useState('');
  
  function teste(){
    alert('O site ainda não está pronto')
  }
  function fazerRotina(){
    setCriar(true)
    setApoio(false)
    setPagina(false)
  }
  function tela(){
    setCriar(false)
    setApoio(false)
    setPagina(true)

  }
  function adicionar(){
    setRotinhas([...rotinas, { id: 1, texto: novaRotina, horaI: horai, horaF: horaf }]);
    tela()

  }
 
  return (
    <div >
            <div class="home-container">
                    <h2>Minhas Rotinas</h2>
                <div className='barra-menu'>
                    <button onClick={tela}>Rotina</button>
                    <button onClick={fazerRotina}>Adicionar rotina</button>
                    <button onClick={teste}>Apoio emocional </button>

                </div>

            <div className={criar ? "rotina-form" :"none"}>
            <p>Atividade</p>
            <input
                type="text"
                value={novaRotina}
                onChange={(e) => setNovaRotina(e.target.value)}
                placeholder="Ex: correr"
            />
            <p>Hora de inicio</p>
            <input
                type="text"
                value={horai}
                onChange={(e) => setHorai(e.target.value)}
                placeholder="Ex: 13:00"
            />
            <p>Hora de termino</p>
            <input
                type="text"
                value={horaf}
                onChange={(e) => setHoraf(e.target.value)}
                placeholder="Ex: 15:00"
            />
            <button onClick={adicionar} className='entrar' >Adicionar</button>
            </div>

            <ul className={pagina ?'' :'none'}>
                {rotinas.map(rotina => (
                <div className='rotina' key={rotina.id}>  <p>{rotina.texto} - Horário de início : {rotina.horaI} / Horário de término : {rotina.horaF}</p></div>
                ))}
            </ul>

        </div>

    </div>
    
  )
}

export default Home