import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

interface Props {
    children?: React.ReactNode;
}

interface State {
    locale: string;
}

const messages = {

}

export default class LocaleProvider extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const browserLanguage = this.sanitiseBrowserLanguage(navigator.language);
        const locale = messages[browserLanguage] ? browserLanguage : 'en';
        this.state = {
            locale: locale
        };
    }

    sanitiseBrowserLanguage = (browserLanguage: string) => {
        const [lang, country] = browserLanguage.split('-');
        switch(lang.toLocaleLowerCase()) {
            case 'be':
                return 'ru';
            default:
                break;
        }

        return lang;
    }

    render() {
        return (
            <IntlProvider
                key={this.state.locale}
                locale={this.state.locale}
                messages={messages[this.state.locale]}
            >
                {this.props.children}
            </IntlProvider>
        );
    }
};