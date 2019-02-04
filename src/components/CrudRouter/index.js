import React from 'react';
import { Switch, Route } from "react-router-dom";

export default function CrudRouter(props) {

    const { DisplayComponent, CreateComponent, EditComponent } = props;

    const { displayPath, createPath, editPath } = props;

    return(
        <Switch>
            <Route path={displayPath} render={(routeProps)=>{
                return <DisplayComponent {...props} {...routeProps} />;
            }}/>
            <Route path={CreatePath} render={(routeProps)=>{
                return <CreateComponent {...props} {...routeProps} />;
            }}/>
            <Route path={editPath} render={(routeProps)=>{
                return <EditComponent {...props} {...routeProps} />;
            }}/>
        </Switch>

    );

}