import React, { Component, Fragment } from 'react';
import { injectIntl, IntlShape } from 'react-intl';

import PageMeta from '../../components/PageMeta';
import messages from './Contact.messages';
import styles from './styles.module.scss';

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
                    <h1 className={styles.t}>Contact Andre</h1>
                    <h3 className={styles.info}>Email: andre.nguyen2368@gmail.com</h3>
                    <h3 className={styles.message}>Feel free to contact me at this email any time!</h3>
            </Fragment>
        );
    }
};

export default injectIntl(Contact);