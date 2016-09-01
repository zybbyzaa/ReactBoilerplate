import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

const defaultProps = {
    data: {
        isLast: false,
        hasLink: false,
        LinkType: '',
        query: '',
        title: '',
        itemText: ''
    }
};
const propTypes = {
    data: PropTypes.object
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
        const { data } = this.props;
        let css = classnames({
            "fund-detail-boxlist": true,
            "fund-detail-boxlistlast": data.isLast,
            "clearfix": true
        });

        return (
            <div className={css}>
                <div className="fund-detail-boxlistl left">{data.title}</div>
                <div className="fund-detail-boxlistr right">
                    {
                        data.hasLink ? 
                        <Link to={`/${data.linkType}/${data.query}.html`}><span>{data.itemText}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="right-icon"></span></Link>
                        :
                        <span>{data.itemText}</span>
                    }
                </div>
            </div>
        )
    }

}

FundDetailBoxItem.defaultProps = defaultProps;
FundDetailBoxItem.propTypes = propTypes;

export default FundDetailBoxItem
