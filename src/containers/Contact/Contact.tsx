import React, { Component, Fragment } from 'react';
import { injectIntl, IntlShape } from 'react-intl';

import PageMeta from '../../components/PageMeta';
import messages from './Contact.messages';

interface Props {
    intl: IntlShape;
};

class Contact extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            intl: { formatMessage }
        } = this.props;

        return (
            <Fragment>
                <PageMeta title={formatMessage(messages.pageTitle)} />
                
            </Fragment>
        );
    }
};

export default injectIntl(Contact);