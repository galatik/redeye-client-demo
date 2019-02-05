import React from 'react';
import  PropTypes from 'prop-types';

import CrudRouter from '../CrudRouter';

function MesRouter({ title, }) {

    return <CrudRouter displayPath={`mes/${title}`}
                       createPath={`mes/${title}/create`}
                       editPath={`mes/${title}/edit/:id`}/>
}

MesRouter.propTypes = {
    title: PropTypes.string,
    ListComponent: PropTypes.element,
    CreateComponent: PropTypes.element,
    EditComponent: PropTypes.element
};

export default MesRouter;
