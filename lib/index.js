"use strict";
import React from 'react'

import {mergeStyles} from './utils';
import Circle from './types/Circle.js';
import Basic from './types/Basic.js';
import Point from './types/Point.js';

var style = {
    main: {
        display: 'block',
        flexWrap: 'wrap',
        fontFamily: '"Helvetica Neue", Helvetica, Arial',
        fontWeight: 800,
        color: '#f3f3f3'
    }
};

class Steps extends React.Component {
    render() {
        const {flat, type} = this.props;
        const propStyles = this.props.styles || {};
        const items = this.props.items.map((item, idx, list) => {
            if (type === 'circle') {
                return <Circle key={idx} item={item} flat={flat} idx={idx} styles={propStyles}/>;
            } else if (type === 'point') {
                return <Point key={idx} item={item} flat={flat} idx={idx}
                              isFirst={idx === 0}
                              isLast={idx === (list.length - 1)}
                              style={{width: (100 / list.length) + '%'}}
                              styles={propStyles}/>;
            } else {
                return <Basic key={idx} item={item} flat={flat} idx={idx} styles={propStyles}/>;
            }
        });

        return (
            <div style={{...style.main, ...propStyles.main}}>
                {items}
            </div>
        );
    }
}

export default Steps;