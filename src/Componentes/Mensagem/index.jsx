import { Alert } from '@mantine/core';
import { PropTypes } from 'prop-types';


export function Mensagem(props) {
    return (
        <a>Mensagem</a>
        // <Alert id="divMensagem" style={{ display: 'flex', width: '300px', alignContent: 'center', marginBottom: '40px', visible: props.visible ? true : false }} color="green">
        //     Mensagem enviada com sucesso!
        // </Alert>
    );
}

// props validation

Mensagem.propTypes = {
    visible: PropTypes.bool
};

Mensagem.defaultProps = {
    visible: false
};

