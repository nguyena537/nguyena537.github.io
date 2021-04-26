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
                        <h4 className={styles.cap}>Andre's performance at the Southern California Junior Bach Festival when he was 10 years old.</h4>

                        <h2 className={styles.vidT}>Schumann Abegg Variations</h2>
                        <iframe className={styles.video} width="560" height="315"src="https://www.youtube.com/embed/YkdJJz04JzY"></iframe>
                        <h4 className={styles.cap}>Andre's performance at the 31st Annual Glendale Piano Competition Winner's Concert when he was 12 years old.  He won 1st place in his age division.</h4>

                        <h2 className={styles.vidT}>Beethoven Sonata No. 2</h2>
                        <iframe className={styles.video} width="560" height="315"src="https://www.youtube.com/embed/nseW9-mDfsI"></iframe>
                        <h4 className={styles.cap}>Recording of Andre at 14 years old.</h4>

                        <h2 className={styles.vidT}>Liszt - Un Sospiro</h2>
                        <iframe className={styles.video} width="560" height="315"src="https://www.youtube.com/embed/eWaX4v5bK6A"></iframe>
                        <h4 className={styles.cap}>Recording of Andre at 16 years old.</h4>

                        <h2 className={styles.vidT}>Bach WTC II Prelude and Fugue XIV</h2>
                        <iframe className={styles.video} width="560" height="315"src="https://www.youtube.com/embed/NVXq84eiUQw"></iframe>
                        <h4 className={styles.cap}>Recording of Andre at 16 years old.</h4>
                        
                        <h2 className={styles.vidT}>Schumann  Davidsbündlertänze Book II</h2>
                        <iframe className={styles.video} width="560" height="315"src="https://www.youtube.com/embed/Wn2NzTlgUrQ"></iframe>
                        <h4 className={styles.cap}>Recording of Andre at 16 years old.</h4>

                        
                    </div>
            </Fragment>
        );
    }
};

export default injectIntl(Videos);