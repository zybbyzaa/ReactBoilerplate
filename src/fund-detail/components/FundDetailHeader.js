import React, { Component, PropTypes } from 'react';
import moment from 'moment';

const defaultProps = {
	fund: {
		oneYearReturn: 0.3012,
		netDate: new Date(),
		NAV: 1.031
	}
};
const propTypes = {
	fund: PropTypes.object
};

class FundDetailHeader extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        // 定义 eventHandler

    }

    // 生命周期方法

    // getter methods for render

    // event handlers

    //render methods
    renderHeaderLeft (fund) {
    	let profitRateText = '';
    	let profitRate = 0.00;

    	if (fund.oneYearReturn) {
    		profitRateText = '近一年收益率';
    		profitRate = fund.oneYearReturn * 100;
    	} else if (fund.halfYearReturn) {
    		profitRateText = '近半年收益率';
    		profitRate = fund.halfYearReturn * 100;
    	} else if (fund.quarterReturn) {
    		profitRateText = '近一季收益率';
    		profitRate = fund.quarterReturn * 100;
    	} else if (fund.oneMonthReturn) {
    		profitRateText = '近一月收益率';
    		profitRate = fund.oneMonthReturn * 100;
    	} else if (fund.oneWeekReturn) {
    		profitRateText = '近一周收益率';
    		profitRate = fund.oneWeekReturn * 100;
    	} else {
    		profitRateText = '近一年收益率';
    	}

    	return (
    		<section className="fund-detail-header-left left">
					<span className="title">{profitRateText}</span>
					<span className="value">{profitRate.toFixed(2)}<span className="per">%</span></span>
			</section>
    	)

    }
    // render
    render () {
    	const {fund} = this.props;
    	const HeaderLeft = this.renderHeaderLeft(fund);

        return (
            <div className="fund-detail-header clearfix">
				{ HeaderLeft }
				<section className="fund-detail-header-right left">
	                <span className="title">最新净值({fund.netDate?moment(fund.netDate).format("YYYY-MM-DD"):""}) <span className="detail-icon" id="lastest-val-icon"></span></span>
					<span className="value">{fund.NAV?fund.NAV.toFixed(2):0.00}<span className="per">元</span></span>
				</section>
			</div>
        )
    }

}

FundDetailHeader.defaultProps = defaultProps;
FundDetailHeader.propTypes = propTypes;

export default FundDetailHeader
