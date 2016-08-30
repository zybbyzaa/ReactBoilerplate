import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const defaultProps = {
    fund: {
        fundType: 4
    },
    tabIndex: 0
};
const propTypes = {
    fund: React.PropTypes.object,
    children: React.PropTypes.node,
    tabIndex: React.PropTypes.number,
    toggleTab: React.PropTypes.func
};

class FundDetailTab extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        // 定义 eventHandler
        this.changeChartType = this.changeChartType.bind(this);
    }

    // 生命周期方法

    // getter methods for render

    // event handlers
    changeChartType (tabIndex,type) {
        this.props.toggleTab(tabIndex);
        console.log(type);
    }
    //render methods
    // render
    render () {
        const {children,fund,tabIndex} = this.props;
        let tabClassName1 = classnames({
            'tab': true,
            'on': tabIndex == 0
        });
        let tabClassName2 = classnames({
            'tab': true,
            'tab-li-last': true,
            'on': tabIndex == 1
        });

        return (
            <div className="fund-detail-charttab">
                <ul className="fund-detail-nav-tab">
                    {
                        fund.fundType && fund.fundType == 4 ?
                        <li className={tabClassName1} id="tab0" onClick={e => this.changeChartType(0,'yearlyRoe')}>7日年化收益率</li>
                        :
                        <li className={tabClassName1} id="tab0" onClick={e => this.changeChartType(0,'nav')}>净值走势</li>
                    }
                    {
                        fund.fundType && fund.fundType == 4 ?
                        <li className={tabClassName2} id="tab1" onClick={e => this.changeChartType(1,'unitYield')}>万份收益</li>
                        :
                        <li className={tabClassName2} id="tab1" onClick={e => this.changeChartType(1,'change')}>收益率走势</li>
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
