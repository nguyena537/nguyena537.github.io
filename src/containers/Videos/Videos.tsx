import React, { Component, Fragment } from 'react';
import { injectIntl, IntlShape } from 'react-intl';

import PageMeta from '../../components/PageMeta';
import messages from './Videos.messages';
import styles from './styles.module.scss';

interface Props {
    intl: IntlShape;
};

class Videos extends Component<Props> {
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
                    <div className={styles.videos}>
                        <h2 className={styles.vidT1}>Bach Invention and Sinfonia No. 15</h2>
                        <iframe className={styles.video} width="560" height="315"src="https://www.youtube.com/embed/4Dfp3I8_-2I"></iframe>

                        <h2 className={styles.vidT}>Schumann Abegg Variations</h2>
                        <iframe className={styles.video} width="560" height="315"src="https://www.youtube.com/embed/YkdJJz04JzY"></iframe>

                        <h2 className={styles.vidT}>Liszt - Un Sospiro</h2>
                        <iframe className={styles.video} width="560" height="315"src="https://www.youtube.com/embed/eWaX4v5bK6A"></iframe>

                        <h2 className={styles.vidT}>Bach WTC II Prelude and Fugue XIV</h2>
                        <iframe className={styles.video} width="560" height="315"src="https://www.youtube.com/embed/NVXq84eiUQw"></iframe>
                        
                        <h2 className={styles.vidT}>Schumann  Davidsbündlertänze Book II</h2>
                        <iframe className={styles.video} width="560" height="315"src="https://www.youtube.com/embed/Wn2NzTlgUrQ"></iframe>
                    </div>
            </Fragment>
        );
    }
};

export default injectIntl(Videos);