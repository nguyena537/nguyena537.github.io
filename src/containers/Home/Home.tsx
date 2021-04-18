import React, { Component, Fragment } from 'react';
import { injectIntl, IntlShape } from 'react-intl';

import PageMeta from '../../components/PageMeta';
import messages from './Home.messages';
import styles from './styles.module.scss';

interface Props {
    intl: IntlShape;
};

class Home extends Component<Props> {
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
                    <h1 className={styles.t}>Welcome to Andre's Piano Website!</h1>
                    <div>
                        <img src="images/PicAndre.png" alt="Picture of Andre"></img>
                    </div>
            </Fragment>
        );
    }
};

export default injectIntl(Home);