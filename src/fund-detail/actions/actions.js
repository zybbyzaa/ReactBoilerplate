import {
    TOGGLETAB,
    CHANGECHARTDAY,CHANGECHARTTYPE,
    REQUEST_CHART_DATA,CHART_DATA
} from './constants';
import fetch from 'isomorphic-fetch'
import querystring from 'querystring'

function requestChartData() {
    return {
        type: REQUEST_CHART_DATA
    }
}

function receiveChartData(json) {
    return {
        type: CHART_DATA,
        rank: json.rank,
        returnX: json.returnX,
        data: json.resultVo.data
    }
}
export function getChartData() {
    return (dispatch, getState) => {
        dispatch(requestChartData())
        const chart = getState().chart.toJS()

        return fetch("http://120.76.99.151:8087/m/fund/getFundNavSeries.htm",{
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({"fundCode":"000942","period":chart.chartDay})
        }).then(response => response.json()).then(json => {
            return dispatch(receiveChartData(json))
        })
    }
}

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

export function changeChartType(chartType) {
    return {
        type: CHANGECHARTTYPE,
        payload: chartType
    }
}
