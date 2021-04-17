import React, { Component } from 'react';
import { injectIntl, IntlShape } from 'react-intl';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import messages from './NavBar.messages';

interface Props {
    intl: IntlShape;
};

class NavBar extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            intl: { formatMessage }
        } = this.props;

        return (
            <div className={styles.navBar}>
                <div className={styles.navBarLink}>
                    <Link to="/home">{formatMessage(messages.homeTitle)}</Link>
                </div>
                <div className={styles.navBarLink}>
                    <Link to="/videos">{formatMessage(messages.videosTitle)}</Link>
                </div>
                <div className={styles.navBarLink}>
                    <Link to="/contact">{formatMessage(messages.contactTitle)}</Link>
                </div>
                <div className={styles.navBarLink}>
                    <Link to="/about">{formatMessage(messages.aboutTitle)}</Link>
                </div>
            </div>
        );
    }
};

export default injectIntl(NavBar);