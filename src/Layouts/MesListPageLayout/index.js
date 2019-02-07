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
    onDelete: PropTypes.func,
    onCreate: PropTypes.func,
    canDelete: PropTypes.bool.default(true),
    canCreate: PropTypes.bool.default(true),
    onResetConfiguration: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
    initialGridDataState: PropTypes.object,
    fetchGridData: PropTypes.func,
    isFetchingGridData: PropTypes.bool,
    gridData: PropTypes.arrayOf(PropTypes.object)
};

export default MesListPageLayout;