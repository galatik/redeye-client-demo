import React from 'react';
import { Switch, Route } from "react-router-dom";

export default function CrudRouter(props) {

    const { displayComponent, createComponent, editComponent } = props;

    const { displayPath, createPath, editPath } = props;

    return(
        <Switch>
            <Route path={displayPath} render={(routeProps)=>{
                return <displayComponent {...props} {...routeProps} />;
            }}/>
            <Route path={createPath} render={(routeProps)=>{
                return <createComponent {...props} {...routeProps} />;
            }}/>
            <Route path={editPath} render={(routeProps)=>{
                return <editComponent {...props} {...routeProps} />;
            }}/>
        </Switch>

    );

}