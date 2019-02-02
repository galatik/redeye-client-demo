import React from 'react';

import CrudRouter from '../CrudRouter';

export function MesRouter(props) {

    const title = props.title;

    return <CrudRouter displayPath={`mes/${title}`}
                       createPath={`mes/${title}/create`}
                       editPath={`mes/${title}/edit/:id`} {...props} />
}