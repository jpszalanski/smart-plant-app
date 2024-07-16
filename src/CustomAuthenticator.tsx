// CustomAuthenticator.tsx
import { View, Image, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('pt');
const CustomAuthenticator = {
    Header() {
        const { tokens } = useTheme();
        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Image
                    alt="Your Logo"
                    src="/logo.png" // Replace with the path to your logo
                    className="custom-logo"
                />
            </View>
        );
    },

};



export default CustomAuthenticator;
