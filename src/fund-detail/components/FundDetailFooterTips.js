import React, { Component } from 'react';

class FundDetailFooterTips extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        // 定义 eventHandler
    }
    render () {
        return (
            <div className="fund-detail-ft-tips">
				<p>基金销售服务由珠海盈米财富管理有限公司提供</p>
				<p>基金销售资格证号：000000378</p>
				<p>历史业绩不预示未来，市场有风险，投资需谨慎</p>
			</div>
        )
    }

}

export default FundDetailFooterTips
