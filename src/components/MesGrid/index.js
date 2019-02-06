import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@progress/kendo-react-grid';


class MesGrid extends React.Component{

    constructor(props){
        super(props);

        this.state = props.initialDataState;

        this.onDataStateChange = this.onDataStateChange.bind(this);
    }

    onDataStateChange({ data }){
        this.props.fetchData(data);

        this.setState(data);
    }

    render(){
        const {
            isFetching,
            gridData,
            children,
        } = this.props;

        return isFetching ?
            (
                <div>Loading</div>
            )
            :
            (
                <Grid data={gridData} {...this.state} onDataStateChange={this.onDataStateChange} {...this.props}>
                    {children}
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
    children: PropTypes.arrayOf(PropTypes.element),
    initialDataState: PropTypes.object,
    isFetching: PropTypes.bool
};

MesGrid.defaultProps = {
    sortable: true,
    pageable: true,
    filterable: true,
    initialDataState: { take: 10, skip: 0 }
};

export default MesGrid;