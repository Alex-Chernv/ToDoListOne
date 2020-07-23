import {SHOW_LOADER} from '../types.js';
import {ADD_NOTE} from '../types.js'
import {FETCH_NOTES} from '../types.js'
import {REMOVE_NOTE} from '../types.js'

const handlers = {
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload}),
  [REMOVE_NOTE]: (state, {payload}) => ({
      ...state,
      notes: state.notes.filter(note => note.id !== payload)
    }),
  DEFAULT: state => state
};

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
};