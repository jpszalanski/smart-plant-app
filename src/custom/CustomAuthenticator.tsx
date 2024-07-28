import { View, Image, useTheme, Heading, Button, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../styles/App.css';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('pt');

const CustomAuthenticator = {
    Header() {
        const { tokens } = useTheme();
        return (
            <View textAlign="center" padding={tokens.space.large} className="custom-authenticator">
                <Image
                    alt="SmartPlantPot"
                    src="/logo.png"
                    className="custom-logo"
                />
            </View>
        );
    },

    Footer() {
        const { tokens } = useTheme();
        return (
            <View textAlign="center" padding={tokens.space.large}>
                <p>Smart Plant Dashboard ©2024 Created by Jeferson Aguiar</p>
            </View>
        );
    },

    SignIn: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
                    Entre na sua conta
                </Heading>
            );
        },
        Footer() {
            const { toForgotPassword } = useAuthenticator();
            return (
                <View textAlign="center">
                    <Button fontWeight="normal" onClick={toForgotPassword} size="small" variation="link">
                        Resetar Senha
                    </Button>
                </View>
            );
        },
    },

    SignUp: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
                    Crie uma nova conta
                </Heading>
            );
        },
        Footer() {
            const { toSignIn } = useAuthenticator(({ toSignIn }) => [toSignIn]);
            return (
                <View textAlign="center">
                    <Button fontWeight="normal" onClick={toSignIn} size="small" variation="link">
                        Voltar para o Login
                    </Button>
                </View>
            );
        },
    },
};

export default CustomAuthenticator;
