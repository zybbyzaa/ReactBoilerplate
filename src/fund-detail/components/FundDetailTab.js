import React, { Component, PropTypes } from 'react';
import moment from 'moment';

const defaultProps = {
    fund: {
        fundType: 4
    },
    changeChartType: function(type) {
        console.log(type);
    }
};
const propTypes = {
    fund: React.PropTypes.object,
    changeChartType: React.PropTypes.func
};

class FundDetailTab extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        // 定义 eventHandler

    }

    // 生命周期方法

    // getter methods for render

    // event handlers

    //render methods
    // render
    render () {
    	const {children,fund,changeChartType} = this.props;

        return (
            <div className="fund-detail-charttab">
                        <ul className="fund-detail-nav-tab">
                            {
                            fund.fundType && fund.fundType == 4 ?
                            <li className="tab on" id="tab0" onClick={e => changeChartType('yearlyRoe'){>7日年化收益率</li>
                            :
                            <li className="tab on" id="tab0" onClick={e => changeChartType('nav')}>净值走势</li>
                            }
                            {
                                fund.fundType && fund.fundType == 4 ?
                                <li className="tab tab-li-last" id="tab1" onClick={e => changeChartType('unitYield')}>万份收益</li>
                                :
                                <li className="tab tab-li-last" id="tab1" onClick={e => changeChartType('change')}>收益率走势</li>
                            }
                        </ul>
                        {children}
                    </div>
        )
    }

}

FundDetailTab.defaultProps = defaultProps;
FundDetailTab.propTypes = propTypes;

export default FundDetailTab
