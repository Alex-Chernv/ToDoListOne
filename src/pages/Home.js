import React, {Fragment} from 'react';
import {Form} from '../components/Form.js'
import {Notes} from '../components/Notes.js'

export const Home = () => {
    const notes = new Array(3).fill('').map((_, i) => ({id: i, title: `Note ${i + 1}`}));
    return (
        <Fragment>
            <Form />
            <hr />
            <Notes notes={notes} />
        </Fragment>
    )
};