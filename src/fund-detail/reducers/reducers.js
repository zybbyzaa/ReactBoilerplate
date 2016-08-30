import {TOGGLETAB} from '../actions/constants';
import { createReducer } from 'redux-immutablejs'
import { fromJS, Map, List } from 'immutable'

const initialState = fromJS({
    tabIndex: 0
})

export const tab = createReducer(initialState,{
    [TOGGLETAB]: (state,action)=>state.merge({
    	'tabIndex': action.payload.tabIndex
    })
})