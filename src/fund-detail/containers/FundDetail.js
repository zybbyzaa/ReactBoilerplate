import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
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
