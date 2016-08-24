import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
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

        return (
            <div className="wrapper">
                <FundDetailHeader />
                <FundDetailIntro />
                <FundDetailTab>
                    <FundDetailTabPanel />
                </FundDetailTab>
            </div>
        )
    }

}

FundDetail.defaultProps = defaultProps;
FundDetail.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        location: state.routing.location
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FundDetail)
