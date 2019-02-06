import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/ListMenu';
import MesGrid from '../../components/MesGrid';

function MesListPageLayout(props){

    const {
        canCreate,
        canDelete,
        onCreate,
        onDelete,
        onResetConfiguration,
        children,
        gridData,
        fetchGridData,
        isFetchingGridData,
        initialGridDataState

    } = props;

    return (
        <div>
            <div>
                <Menu canCreate={canCreate} canDelete={canDelete}
                      onCreate={onCreate} onDelete={onDelete}
                      onResetConfiguration={onResetConfiguration} />
            </div>
            <div>
                <MesGrid initialDataState={initialGridDataState}
                         isFetching={isFetchingGridData}
                         gridData={gridData}
                         fetchData={fetchGridData}
                         {...props}
                >
                    {children}
                </MesGrid>
            </div>
        </div>
    );
}

MesListPageLayout.propTypes = {
    gridColumns: PropTypes.arrayOf(PropTypes.element),
    gridData: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func,
    onCreate: PropTypes.func,
    canDelete: PropTypes.bool.default(true),
    canCreate: PropTypes.bool.default(true),
    onResetConfiguration: PropTypes.func
};

export default MesListPageLayout;