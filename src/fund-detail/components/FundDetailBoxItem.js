import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

const defaultProps = {
    isLast: false,
    hasLink: false,
    LinkType: '',
    query: '',
    title: '',
    text: ''
};
const propTypes = {
    isLast: PropTypes.bool,
    hasLink: PropTypes.bool,
    LinkType: PropTypes.string,
    query: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};

class FundDetailBoxItem extends Component {

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
        const {isLast,hasLink,linkType,title,itemText,query } = this.props;
        let css = classnames({
            "fund-detail-boxlist": true,
            "fund-detail-boxlistlast": isLast
        });

        return (
            <div className={css}>
                <div className="fund-detail-boxlistl left">{title}</div>
                <div className="fund-detail-boxlistr right">
                    {
                        hasLink ? 
                        <Link to={`/${linkType}.html/${query}`}><span>{itemText}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="right-icon"></span></Link>
                        :
                        {itemText}
                    }
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }

}

FundDetailBoxItem.defaultProps = defaultProps;
FundDetailBoxItem.propTypes = propTypes;

export default FundDetailBoxItem
