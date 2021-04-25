import React, { Component, Fragment } from 'react';
import { injectIntl, IntlShape } from 'react-intl';

import PageMeta from '../../components/PageMeta';
import messages from './About.messages';
import styles from './styles.module.scss';

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
                    <h1 className={styles.t}>About Andre</h1>
                    <p className={styles.p}>Andre Nguyen is currently a senior at Mission Viejo High School, and will graduate on June 3.  He is going to attend the University of California, Riverside in the fall with a major of Computer Science.  He has been playing the piano for around eleven years, playing competitively from 6th grade to 11th grade.  He has won numerous prizes in local, state, national, and international piano competitions.  He also loves to play tennis, basketball, and recently started playing pickleball.  This website was created from scratch for the CAS project, which is a month=long project that was required for the IB program at his school.</p>
            </Fragment>
        );
    }
};

export default injectIntl(About);