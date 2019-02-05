import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/ListMenu';

function MesListPageLayout({
    gridColumns,
    onGridRowClicked,
    gridData,
    canCreate,
    canDelete,
    onDelete,
    onCreate,
    onResetConfiguration
                           }){

    return (
        <div>
            <div>
                <Menu canCreate={canCreate} canDelete={canCreate}
                      onCreate={onCreate} onDelete={onDelete}
                      onResetConfiguration={onResetConfiguration} />
            </div>
            <div>
                <GridComponent data={gridData} onGridRowClicked={onGridRowClicked} />
            </div>
        </div>
    );
}

MesListPageLayout.propTypes = {
    gridColumns: PropTypes.arrayOf(PropTypes.element),
    onGridRowClicked: PropTypes.func,
    gridData: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func,
    onCreate: PropTypes.func,
    canDelete: PropTypes.bool.default(true),
    canCreate: PropTypes.bool.default(true),
    onResetConfiguration: PropTypes.func
};

export default MesListPageLayout;