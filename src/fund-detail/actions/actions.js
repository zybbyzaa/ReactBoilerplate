import {TOGGLETAB,CHANGECHARTDAY} from './constants';

export function toggleTab(tabIndex) {
    return {
        type: TOGGLETAB,
        payload: tabIndex
    }
}

export function changeChartDay(dateType) {
    return {
        type: CHANGECHARTDAY,
        payload: dateType
    }
}
