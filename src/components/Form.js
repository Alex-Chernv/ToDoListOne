import React, {useState, useContext} from 'react';
import {AlertContext} from '../context/alert/alertContext';

export const Form = () => {
  const [value,setValue] = useState('');
  const alert = useContext(AlertContext);

  const submitHandler = event => {
      event.preventDefault();

     if (value.trim()) {
         //...
         alert.show('Note was created', 'success');
         setValue('')
     } else {
         alert.show('Enter name for notes')
     }
  }

  return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                placeholder="Enter note"
                value={value}
                onChange={e => setValue(e.target.value)}>
                    
                </input>
            </div>
        </form>
  )
}