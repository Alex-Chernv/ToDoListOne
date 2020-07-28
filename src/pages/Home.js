import React, {Fragment, useContext, useEffect} from 'react';
import {Form} from '../components/Form.js';
import {Notes} from '../components/Notes.js';
import {Loader} from '../components/Loader.js';
import {FirebaseContext} from '../context/firebase/FirebaseContext.js';

export const Home = () => {
  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Form />

      <hr/>

      {loading
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote} />
      }
    </Fragment>
  )
};