import React, { Component, Fragment } from 'react';
import { injectIntl, IntlShape } from 'react-intl';

import PageMeta from '../../components/PageMeta';
import messages from './Home.messages';
import styles from './styles.module.scss';
import andreImage from './images/PicAndre.png';

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
                        <img className={styles.picAndre} src={andreImage} alt="Picture of Andre"></img>
                        <h6 className={styles.t}>This picture is from Andre's performance at the Waring International Piano Competition</h6>
                    </div>
            </Fragment>
        );
    }
};

export default injectIntl(Home);