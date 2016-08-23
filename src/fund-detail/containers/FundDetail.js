import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

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
        // const {children} = this.props;

        return (
            <div className="container">
                <p>FundDetail</p>
                <ul>
                    <li><Link to='/fundManager.html'>FundManager</Link></li>
                    <li><Link to='/fundAssets.html'>FundAssets</Link></li>
                </ul>
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