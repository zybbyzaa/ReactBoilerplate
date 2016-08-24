import React, { Component, PropTypes } from 'react';
import moment from 'moment';

const defaultProps = {
	fund: {
		fundType: 4
	}
};
const propTypes = {
	fund: React.PropTypes.object
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
    	const {children,fund} = this.props;

        return (
            <div className="fund-detail-charttab">
				<ul className="fund-detail-nav-tab">
					{ 
						fund.fundType && fund.fundType == 4 ?
						<li className="tab on" tab-index="0" id="tab0" onclick="changeChartType('yearlyRoe')">7日年化收益率</li>
						<li className="tab tab-li-last" tab-index="1" id="tab1" onclick="changeChartType('unitYield')">万份收益</li>
						:
						<li className="tab on" tab-index="0" id="tab0" onclick="changeChartType('nav')">净值走势</li>
						<li className="tab tab-li-last" tab-index="1" id="tab1" onclick="changeChartType('change')">收益率走势</li>
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