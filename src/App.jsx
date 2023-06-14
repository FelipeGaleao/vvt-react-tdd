import { useState } from 'react'
import { FormularioContato } from './Componentes/FormularioContato'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Mensagem } from './Componentes/Mensagem'



function App() {
  const [visible, setVisible] = useState(false)

  const enviarFormulario = () => {
    setVisible(true)
  }

  return (
    <>
      <div>
        {visible ? <Mensagem visible={visible} /> : null}
        <FormularioContato function={enviarFormulario} />
      </div>
    </>
  )
}

export default App
