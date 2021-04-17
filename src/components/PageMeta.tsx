import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
    title?: string;
};

const BASE_TITLE = 'Andre Nguyen Piano';

const PageMeta: FC<Props> = ({title}) => {
    console.log(title);
    return (
        <Helmet title={`${BASE_TITLE} | ${title}`} />
    );
};

export default PageMeta;