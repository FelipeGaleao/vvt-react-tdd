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
import { PropTypes } from 'prop-types';

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {
        wrapper: {
            display: 'flex',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
            borderRadius: theme.radius.lg,
            padding: rem(4),
            border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
                }`,

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        form: {
            boxSizing: 'border-box',
            flex: 1,
            padding: theme.spacing.xl,
            paddingLeft: `calc(${theme.spacing.xl} * 2)`,
            borderLeft: 0,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
        },

        fields: {
            marginTop: rem(-12),
        },

        fieldInput: {
            flex: 1,

            '& + &': {
                marginLeft: theme.spacing.md,

                [BREAKPOINT]: {
                    marginLeft: 0,
                    marginTop: theme.spacing.md,
                },
            },
        },

        fieldsGroup: {
            display: 'flex',

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        contacts: {
            boxSizing: 'border-box',
            position: 'relative',
            borderRadius: theme.radius.lg,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: `${rem(1)} solid transparent`,
            padding: theme.spacing.xl,
            flex: `0 0 ${rem(280)}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.sm,
                paddingLeft: theme.spacing.md,
            },
        },

        title: {
            marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },

        control: {
            [BREAKPOINT]: {
                flex: 1,
            },
        },
    };
});

export function FormularioContato(props) {
    const { classes } = useStyles();

    return (
        <Paper shadow="md" radius="lg">
            <div className={classes.wrapper}>

                <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
                    <Text fz="lg" fw={700} className={classes.title}>
                        Entre em contato com a Meican<b>Soft</b>
                    </Text>

                    <div className={classes.fields}>
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
                            <Button id="btnEnviar" type="submit" className={classes.control} onClick={props.enviarFormulario}>
                                Enviar mensagem
                            </Button>
                        </Group>
                    </div>
                </form>
            </div>
        </Paper>
    );
}

FormularioContato.propTypes = {
    enviarFormulario: PropTypes.func
};

FormularioContato.defaultProps = {
    enviarFormulario: () => { }
};
