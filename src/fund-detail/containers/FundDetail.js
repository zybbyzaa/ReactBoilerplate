import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as detailActions from '../actions/actions';
import FundDetailHeader from '../components/FundDetailHeader';
import FundDetailIntro from '../components/FundDetailIntro';
import FundDetailTab from '../components/FundDetailTab';
import FundDetailTabPanel from '../components/FundDetailTabPanel';
import FundDetailBox from '../components/FundDetailBox';
import FundDetailBoxItem from '../components/FundDetailBoxItem';
import FundDetailFooterTips from '../components/FundDetailFooterTips';
import FundDetailFooterButtons from '../components/FundDetailFooterButtons';
import '../assets/scss/fundDetail.scss';
import moment from 'moment';

const defaultProps = {
};
const propTypes = {

};

class FundDetail extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        // 定义 state
        // 定义 eventHandler

    }

    // 生命周期方法

    // getter methods for render

    // event handlers
    //render methods
    // render
    render () {
        const tabIndex = this.props.tab.tabIndex;
        const chartDay = this.props.chart.chartDay;
        const toggleTab = this.props.actions.toggleTab;
        const changeChartDay = this.props.actions.changeChartDay;
        const fund = {
            fundCode: '000609',
            fundName: 'xxxxx',
            fundFullName: 'xxxxxxxxx',
            assetAmount: 10080,
            oneYearReturn: 0.3012,
            netDate: new Date(),
            NAV: 1.031,
            riskLevel: 2,
            dailyGains: 0.008,
            typeName: '货币型',
            fundType: 4,
            setupDate: new Date(),
            fundInfo: {
                trustee: '中国银行',
                fundManager: [{
                    id: '1000000',
                    name: '李xx'
                }]
            }
        };
        const showRedeemButton = true;
        const showBuyButton = true;
        const discount = 0.5;

        return (
            <div className="wrapper">
                <FundDetailHeader fund={fund}/>
                <FundDetailIntro fund={fund}/>
                <FundDetailTab tabIndex={tabIndex} toggleTab={toggleTab} fund={fund}>
                    <FundDetailTabPanel chartDay={chartDay} changeChartDay={changeChartDay} />
                </FundDetailTab>
                <FundDetailBox>
                    <FundDetailBoxItem title="资产配置" itemText={"最新规模" + fund.assetAmount/100000000 + "亿"} 
                                hasLink={true} linkType="fundManager" query={fund.fundCode}/>
                    <FundDetailBoxItem title="基金经理" itemText={fund.fundInfo && fund.fundInfo.fundManager[0].name} 
                                isLast={true} hasLink={true} linkType="fundAssets" query={fund.fundInfo && fund.fundInfo.fundManager[0].id}/>
                </FundDetailBox>
                <FundDetailBox>
                    <FundDetailBoxItem title="基金公司" itemText={fund.fundFullName} />
                    <FundDetailBoxItem title="基金托管" itemText={fund.fundInfo && fund.fundInfo.trustee} />
                    <FundDetailBoxItem title="基金成立" itemText={fund.setupDate?moment(fund.setupDate).format("YYYY-MM-DD"):""} isLast={true}/>
                </FundDetailBox>
                <FundDetailFooterTips/>
                <FundDetailFooterButtons showRedeemButton={showRedeemButton} showBuyButton={showBuyButton} discount={discount}/>
            </div>
        )
    }

}

FundDetail.defaultProps = defaultProps;
FundDetail.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        tab: state.tab.toJS(),
        chart: state.chart.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(detailActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FundDetail)
