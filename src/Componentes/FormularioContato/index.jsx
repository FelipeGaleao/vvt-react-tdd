

const FormularioContato = () => {
    return (
        <div>
            <form>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}


export default {
    FormularioContato
}