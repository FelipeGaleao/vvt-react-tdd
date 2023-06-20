import { useState } from 'react'
import { FormularioContato } from './Componentes/FormularioContato'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Mensagem } from './Componentes/Mensagem'
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem,
} from '@mantine/core';


function App() {
  // const [visible, setVisible] = useState(false)

  // const enviarFormulario = () => {
  //   console.log('enviarFormulario')
  //   setVisible(true)
  // }

  return (
    <div>
      {/* <Paper shadow="md" radius="lg" style={{width: "500px", padding: "60px"}}>
        <div>

          <form onSubmit={(event) => event.preventDefault()}>
            <Text fz="lg" fw={700}>
              Entre em contato com a Meican<b>Soft</b>
            </Text>

            <div>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput name="name" id="txtNome" label="Nome" placeholder="Nome" />
                <TextInput name="email" id="txtEmail" label="Email" placeholder="maycon@meicansoft.dev" required />
              </SimpleGrid>

              <TextInput mt="md" label="Mensagem" placeholder="Mensagem" required />

              <Textarea
                id="txtMensagem"
                name="mensagem"
                mt="md"
                label="Sua mensagem"
                placeholder="Insira todas as informações para que a MeicanSoft entre em contato"
                minRows={3}
              />

              <Group position="right" mt="md">
                <Button id="btnEnviar" type="submit">
                  Enviar mensagem
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper> */}
      {/* {visible ? <Mensagem visible={visible} /> : null}
        <FormularioContato handleForm={enviarFormulario} /> */}
    </div>
  )
}

export default App
