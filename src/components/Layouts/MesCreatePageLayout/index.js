import React from 'react';

export default function MesCreatePageLayout(props){
    const { menuComponent, createComponent } = props;

    return (
        <div>
            <div>
                {menuComponent}
            </div>
            <div>
                {createComponent}
            </div>
        </div>
    );
}