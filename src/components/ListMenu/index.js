import React from 'react';
import PropTypes from 'prop-types';

function ListMenu({
    canDelete,
    canCreate,
    onDelete,
    onCreate,
    onResetConfiguration
                  }) {
    return (
        <div>
            <button onClick={ onResetConfiguration } >Reset Configuration</button>
            {canCreate ?
                <button onClick={onCreate} >Create</button>
                :
                null
            }
            {canDelete ?
                <button onClick={onDelete} >Delete</button>
                :
                null
            }
        </div>
    );
}

ListMenu.propTypes = {
    canCreate: PropTypes.bool,
    canDelete: PropTypes.bool,
    onDelete: PropTypes.func,
    onCreate: PropTypes.func,
    onResetConfiguration: PropTypes.func
};

export default ListMenu;