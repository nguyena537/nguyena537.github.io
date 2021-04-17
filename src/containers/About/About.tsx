import React, { Component, Fragment } from 'react';
import { injectIntl, IntlShape } from 'react-intl';

import PageMeta from '../../components/PageMeta';
import messages from './About.messages';

interface Props {
    intl: IntlShape;
};

class About extends Component<Props> {
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

export default injectIntl(About);