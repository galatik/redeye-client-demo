import React from 'react';
import css from './styles.css';

export default function MesMenuLayout(props) {
    const items = props.items;


    return(
        <div className={ css.wrap }>
            {
                items.map((item)=>{
                    return(
                        <div>{item}</div>
                    );
                })
            }
        </div>
    );
}