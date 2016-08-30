import {TOGGLETAB,CHANGECHARTDAY} from '../actions/constants';
import { createReducer } from 'redux-immutablejs'
import { fromJS, Map, List } from 'immutable'

const initialState = fromJS({
    tabIndex: 0,
    chartDay: '1m'
})

export const tab = createReducer(initialState,{
    [TOGGLETAB]: (state,action) => state.set('tabIndex',action.payload.tabIndex)
})

export const chart = createReducer(initialState,{
    [CHANGECHARTDAY]: (state,action) => state.set('chartDay',action.payload.dateType)
})
