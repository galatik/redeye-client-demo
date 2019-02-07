import React from 'react';
import { stroriesOf } from '@storybook/react';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
import MesForm from '.';

stroriesOf('mesForm', module)
    .add('mesForm with text inputs', () => {
        return (
            <MesForm onCancel={() => console.log('cancel')} onSubmit={(e) => console.log(e)}>
                <Input name="firstName" label="First name" type="text" required={true}/>
                <Input name="lastName" label="Last name" type="text" required={true}/>
                <NumericTextBox label="Age" name="age" validationMessage='маловато' required={true} min={18}/>
                <Input name='email' label='Email' validationMessage='Incorrect email'/>
                <Input name='password' label='password' required={true}/>
            </MesForm>
            );
    });