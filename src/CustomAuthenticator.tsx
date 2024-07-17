import { View, Image, useTheme } from '@aws-amplify/ui-react';
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
                    alt="SmartPlantPot Logo"
                    src="/logo.png" // Replace with the path to your logo
                    className="custom-logo"
                />
            </View>
        );
    },

};



export default CustomAuthenticator;
