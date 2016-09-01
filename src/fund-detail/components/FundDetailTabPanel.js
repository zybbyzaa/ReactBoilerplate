import React, { Component, PropTypes } from 'react';
import moment from 'moment';

const ReactHighcharts = require('react-highcharts');
const defaultProps = {
    chartDay: '1m',
    chartData: {
        changePercent: 1.0096,
        date: ["08-01", "08-02", "08-03", "08-04", "08-05", "08-08", "08-09", "08-10", "08-11", "08-12", "08-15", "08-16", "08-17", "08-18", "08-19", "08-22", "08-23", "08-24", "08-25", "08-26", "08-29", "08-30", "08-31"],
        data1: [],//[3.4,6.6,9.8,6.4,12.2,5.6,6.9,7.8]
        data2: [1.0737, 1.0811, 1.0848, 1.0967, 1.0886, 1.1009, 1.1123, 1.1063, 1.0882, 1.0975, 1.1277, 1.1305, 1.135, 1.1319, 1.1326, 1.1186, 1.1203, 1.1268, 1.1188, 1.1223, 1.1235, 1.1234, 1.1214],
        minValue: 1.0727000000000002
    }
};
const propTypes = {
    chartDay: PropTypes.string,
    changeChartDay: PropTypes.func,
    chartData: PropTypes.object
};

class FundDetailTabPanel extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        // 定义 eventHandler
        this.changeChartDay = this.changeChartDay.bind(this);
    }

    // 生命周期方法

    // getter methods for render

    // event handlers
    changeChartDay (dateType) {
        console.log(dateType);
        this.props.changeChartDay(dateType);
    }
    //render methods
    // render
    render () {
    	const {children,fund,chartDay,chartData} = this.props;
        const config = {
            title : false,
            chart: {
                height: hotcss.rem2px(2.8,750)
            },
            legend:{
                enabled: false
            },
            credits:{
                enabled: false
            },
            xAxis: {
                categories:chartData.date,
                labels:{
                    step: chartData.date && chartData.date.length >= 4 ? Math.round(chartData.date.length/4) : 1
                }
            },
            yAxis: {
                title: false,
                min: chartData.minValue,
                allowDecimals: true,
                lineColor: '#ff771d',
                lineWidth: 1,
                gridLineColor: '#f6f6f6',
                gridLineWidth: 1,
                gridLineDashStyle: 'shortdash'
            },
            tooltip: false,
            series: [{
                name: 'otherfund',
                zIndex: 1,
                color:'#e96e19',
                lineWidth:1,
                states: { hover: { enabled: false }},
                hover:{
                    enabled: false
                },
                marker: {
                    fillColor: 'white',
                    lineWidth: 1,
                    enabled: false,
                    lineColor: '#7cb5ec'
                },
                data: chartData.data1//这里记得是其他基金的数据
            }, {
                name: 'myfund',
                data: chartData.data2,//这里记得一定是本基金的数据
                type: 'area',
                states: { hover: { enabled: false }},
                lineColor:'#6366ee',
                lineWidth: 1,
                marker: {
                    enabled:false
                },
                linkedTo: ':previous',
                color: '#ecf2fd',
                //fillOpacity: 0.3,
                zIndex: 0
            }]
        };

        return (
            <div className="fund-detail-tab-pane in" id="tab-pane0">
                <div className="fund-detail-tab-pane-header clearfix">
                    <section className="fund-detail-tab-pane-headerl left" id="_compare-section" style={{display: 'none'}}>
                        <span className="icon icon-1"></span>
                        <span className="fund1">本基金</span>
                        <span className="icon icon-2"></span>
                        <span className="fund2">沪深300</span>
                        <span className="detail-icon" id="the-fund-icon"></span>
                    </section>
                    <section className="fund-detail-tab-pane-headerr right" id="_recent_up_down_ratio_section">
                        <span id="_recent-change-text">
                            {chartDay=='1m'?'近一月涨跌幅':''}
                            {chartDay=='3m'?'近三月涨跌幅':''}
                            {chartDay=='1y'?'近一年涨跌幅':''}
                        </span>
                        &nbsp;&nbsp;
                        <span id="_recent-change-percent">{chartData.changePercent}</span>%
                    </section>
                </div>
                <ReactHighcharts config = {config} className="fund-detail-tab-pane-chart" id="fund-detail-left-chart"></ReactHighcharts>
                <div className="fund-detail-tab-pane-footer clearfix">
                    <section className="fund-detail-tab-pane-footerl left" id="_rank_section"><span>同类排名</span>&nbsp;&nbsp;<span id="_no_rank_span" className="hide">未有同类排名</span><span id="_rank_span" className="hide"><span className="stress" id="_rankMine"></span><span id="_rankTotal"></span></span>
                    </section>
                    <section className="fund-detail-tab-pane-footerr right">
                        <ul className="fund-detail-tab-pane-footerrul clearfix">
                            <li className={chartDay=='1m'?'stress':''} onClick={e => this.changeChartDay('1m')}>近一月</li>
                            <li className={chartDay=='3m'?'stress':''} onClick={e => this.changeChartDay('3m')}>近三月</li>
                            <li className={chartDay=='1y'?'stress':''} onClick={e => this.changeChartDay('1y')}>近一年</li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }

}

FundDetailTabPanel.defaultProps = defaultProps;
FundDetailTabPanel.propTypes = propTypes;

export default FundDetailTabPanel
