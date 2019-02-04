import React from 'react';

export default function MesGridPageLayout(props){
    const { MenuComponent, GridComponent } = props;

    const { gridData } = props;


    return (
        <div>
            <div>
                <MenuComponent />
            </div>
            <div>
                <GridComponent data={ gridData } {...props} />
            </div>
        </div>
    );
}