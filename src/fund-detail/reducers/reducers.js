import {
	TOGGLETAB,
	REQUEST_CHART_DATA,CHART_DATA,
	CHANGECHARTDAY,CHANGECHARTTYPE} from '../actions/constants';
import { createReducer } from 'redux-immutablejs'
import { fromJS, Map, List } from 'immutable'

const initialState = fromJS({
	isFetching: false,
    tabIndex: 0,
    chartDay: '1m',
    chartType: '',
    chartData: {}
})

export const tab = createReducer(initialState,{
    [TOGGLETAB]: (state,action) => state.set('tabIndex',action.payload)
})

export const chart = createReducer(initialState,{
    [CHANGECHARTDAY]: (state,action) => state.set('chartDay',action.payload),
    [CHANGECHARTTYPE]: (state,action) => state.set('chartType',action.payload),
    [REQUEST_CHART_DATA]: (state,action)=>state.set('isFetching',true),
    [CHART_DATA]: (state,action)=>{
    	var minValue = null;		
		var info = action.data;
		var json = JSON.parse(info);
		var data2Tmp = new Array();
		var dateTmp = new Array();
		var data1Tmp = new Array();
		if (json && json.length > 0 && json[0]) {
			var datalist = json[0].navSeries;

            var isData1Legal = true;
            var isData2Legal = true;
			for(var i=0; i<datalist.length ;i++) {
				var navSeries = datalist[i];

				var dateWithoutYear = navSeries.date.substr(5);
				dateTmp.push(dateWithoutYear);
				if (state.get("chartType") == "nav") {
					var nav = parseFloat(navSeries.nav);
					if (!minValue || nav < minValue) {
						minValue = nav;
					}
					data2Tmp.push(nav);
				}else if(state.get("chartType") == "unitYield") {
					var unitYield = parseFloat(navSeries.unitYield);
					if (!minValue || unitYield < minValue) {
						minValue = unitYield;
					}
					data2Tmp.push(unitYield);
				}else if(state.get("chartType") == "yearlyRoe") {
					var yearlyRoe = parseFloat(navSeries.yearlyRoe) * 100;
					if (!minValue || yearlyRoe < minValue) {
						minValue = yearlyRoe;
					}
					data2Tmp.push(yearlyRoe);
				}else if(state.get("chartType") == "change") {
				    if(!navSeries.hs300Change || isNaN(parseFloat(navSeries.hs300Change))){//navSeries.hs300Change 可能为null或者是非数字
                        isData1Legal = false;
                    }
					data2Tmp.push(parseFloat(navSeries.change) * 100);
					data1Tmp.push(parseFloat(navSeries.hs300Change)*100)
				}

			}
		}
        return state.merge({
            isFetching: false,
            chartData: {
            	date: dateTmp || [],
		        data1: data1Tmp || [],
		        data2: data2Tmp || [],
		        minValue: minValue || null
            }
        })
    }
})
