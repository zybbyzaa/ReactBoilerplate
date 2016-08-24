import React, { Component, PropTypes } from 'react';
import moment from 'moment';

const defaultProps = {
	fund: {
		riskLevel: 2,
		dailyGains: 0.008,
		typeName: '货币型'
	}
};
const propTypes = {
	fund: React.PropTypes.object
};

class FundDetailIntro extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        // 定义 eventHandler

    }

    // 生命周期方法

    // getter methods for render

    // event handlers

    //render methods
    renderRiskLevel (fund) {
    	let riskLevelText = '';
    	let classnames = 'green';

    	if (fund.riskLevel && fund.riskLevel <= 1) {
    		riskLevelText = '低风险';
    	} else if (fund.riskLevel && fund.riskLevel == 2) {
    		riskLevelText = '中风险';
    	} else {
    		riskLevelText = '高风险';
    		classnames = 'red';
    	}

    	return (
    		<span className={"val " + classnames}>{riskLevelText}</span>
    	)

    }
    // render
    render () {
    	const {fund} = this.props;
    	const RiskLevel = this.renderRiskLevel(fund);
    	let classnames = fund.dailyGains && fund.dailyGains>0 ? 'red' : 'green';

        return (
            <div className="fund-detail-intro">
				<ul className="fund-detail-introul clearfix">
					<li className="li-1st-of-3"><span className="title">日涨跌幅</span><span className={"val " + classnames}>{fund.dailyGains ? (fund.dailyGains*100).toFixed(2) : 0.00}</span><span className="detail-icon" id="upanddown-icon"></span></li>
					<li className="li-2nd-of-3"><span className="title">类型</span><span className="val">{fund.typeName?fund.typeName:""}</span></li>
					<li className="last-li"><span className="title">风险</span>
						{ RiskLevel }
					</li>
				</ul>
			</div>
        )
    }

}

FundDetailIntro.defaultProps = defaultProps;
FundDetailIntro.propTypes = propTypes;

export default FundDetailIntro