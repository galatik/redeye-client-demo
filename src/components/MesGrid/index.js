import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@progress/kendo-react-grid';


class MesGrid extends React.Component{
    constructor(props){
        super(props);

        const {
            fetchData,
            gridData,
            initialDataState
        } = props;

        fetchData(initialDataState);

        this.onDataStateChange = this.onDataStateChange.bind(this);

        this.state = {
            data: gridData,
            dataState: initialDataState
        };
    }

    onDataStateChange(e){

    }

    render(props){

        const {
            gridColumns,
            fetchData,
            gridData
        } = props

        return (
            <Grid data={gridData} {...props} onDataStateChange={onDataStateChange}>
                {gridColumns}
            </Grid>
        );
    }
}

MesGrid.propTypes = {
    gridData: PropTypes.shape({
        Data: PropTypes.arrayOf(PropTypes.object),
        Total: PropTypes.number
    }),
    fetchData: PropTypes.func,
    initialDataState: PropTypes.object,
    gridColumns: PropTypes.arrayOf(PropTypes.element)
};