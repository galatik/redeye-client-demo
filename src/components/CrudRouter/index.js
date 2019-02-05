import React from 'react';
import { Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';

function CrudRoute(props) {

    const { ListComponent, CreateComponent, EditComponent } = props;

    const { displayPath, createPath, editPath } = props;

    return(
        <Switch>
            <Route path={displayPath} render={(routeProps)=>{
                return <ListComponent {...props} {...routeProps} />;
            }}/>
            <Route path={createPath} render={(routeProps)=>{
                return <CreateComponent {...props} {...routeProps} />;
            }}/>
            <Route path={editPath} render={(routeProps)=>{
                return <EditComponent {...props} {...routeProps} />;
            }}/>
        </Switch>

    );

}

CrudRoute.propTypes = {
    displayPath: PropTypes.string,
    createPath: PropTypes.string,
    editPath: PropTypes.string,
    CreateComponent: PropTypes.element,
    ListComponent: PropTypes.element,
    EditComponent: PropTypes.element
};

export default CrudRoute;