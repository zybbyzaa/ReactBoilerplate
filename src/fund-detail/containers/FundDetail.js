import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as detailActions from '../actions/actions';
import FundDetailHeader from '../components/FundDetailHeader';
import FundDetailIntro from '../components/FundDetailIntro';
import FundDetailTab from '../components/FundDetailTab';
import FundDetailTabPanel from '../components/FundDetailTabPanel';
import '../assets/scss/fundDetail.scss';

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

        return (
            <div className="wrapper">
                <FundDetailHeader />
                <FundDetailIntro />
                <FundDetailTab tabIndex={tabIndex} toggleTab={toggleTab}>
                    <FundDetailTabPanel chartDay={chartDay} changeChartDay={changeChartDay} />
                </FundDetailTab>
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
