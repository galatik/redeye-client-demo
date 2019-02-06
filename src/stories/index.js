import React from 'react';
import { storiesOf } from '@storybook/react';
import ListMenu from '../components/ListMenu/index';

storiesOf('ListMenu', module)
    .add('can create and can delete', ()=>(
        <ListMenu canDelete={ true }
                  canCreate={ true }
                  onDelete={ () => alert('delete!!!') }
                  onResetConfiguration={() => alert('reset configuration') }
                  onCreate={() => alert('create') }
        />
    ));