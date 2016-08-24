import React, { Component, PropTypes } from 'react';
import moment from 'moment';

const defaultProps = {

};
const propTypes = {

};

class FundDetailTabPanel extends Component {

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
            <div className="fund-detail-tab-pane in" id="tab-pane0">
                <div className="fund-detail-tab-pane-header clearfix">
                    <section className="fund-detail-tab-pane-headerl left" id="_compare-section" style={{display: 'none'}}>
                        <span className="icon icon-1"></span><span className="fund1">本基金</span><span className="icon icon-2"></span><span className="fund2">沪深300</span><span className="detail-icon" id="the-fund-icon"></span>
                    </section>
                    <section className="fund-detail-tab-pane-headerr right" id="_recent_up_down_ratio_section" style={{display: 'none'}}>
                        <span id="_recent-change-text"></span>&nbsp;&nbsp;<span id="_recent-change-percent"></span>%
                    </section>
                </div>
                <div className="fund-detail-tab-pane-footer clearfix">
                    <section className="fund-detail-tab-pane-footerl left" id="_rank_section"><span>同类排名</span>&nbsp;&nbsp;<span id="_no_rank_span" className="hide">未有同类排名</span><span id="_rank_span" className="hide"><span className="stress" id="_rankMine"></span><span id="_rankTotal"></span></span>
                    </section>
                    <section className="fund-detail-tab-pane-footerr right">
                        <ul className="fund-detail-tab-pane-footerrul clearfix">
                            <li className="stress" onClick="changeChartDay('1m')">近一月</li>
                            <li onClick="changeChartDay('3m')">近三月</li>
                            <li onClick="changeChartDay('1y')">近一年</li>
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
