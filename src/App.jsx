import { useState } from 'react'
import { FormularioContato } from './Componentes/FormularioContato'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Mensagem } from './Componentes/Mensagem'



function App() {
  const [visible, setVisible] = useState(false)

  const enviarFormulario = () => {
    console.log('enviarFormulario')
    setVisible(true)
  }

  return (
    <>
      <div>
        {/* {visible ? <Mensagem visible={visible} /> : null}
        <FormularioContato handleForm={enviarFormulario} /> */}
      </div>
    </>
  )
}

export default App
