import React from 'react';
import classNames from 'classnames';

import styles from './Circle.less';
import {mergeStyles} from '../utils';

const size = 45;

export default class Circle extends React.Component {
    render() {
        const {item, flat, idx} = this.props;

        var status = 'This Step is Undone.';

        if (item.isActive) {
            status = 'This Step is Active.';
        } else if (item.isDone) {
            status = 'This Step is Done.';
        } else if (item.isFailed) {
            status = 'This Step is Aborted.';
        }

        return (
            <div {...mergeStyles(styles, this.props.styles, {item: true})}>
                <div {...mergeStyles(styles, this.props.styles, {
                            number: true,
                            itemFlatNumber: flat,
                            activeFlatItemNumber: flat && item.isActive && !item.isFailed,
                            activeItemNumber: !flat && item.isActive && !item.isFailed,
                            doneFlatItemNumber: flat && item.isDone && !item.isFailed,
                            doneItemNumber: !flat && item.isDone && !item.isFailed,
                            failedFlatItemNumber: flat && item.isFailed,
                            failedItemNumber: !flat && item.isFailed,
                        })}>{idx + 1}</div>
                <div {...mergeStyles(styles, this.props.styles, {labels: true})}>
                    <div {...mergeStyles(styles, this.props.styles, {text: true})}>{item.text}</div>
                    <div {...mergeStyles(styles, this.props.styles, {status: true})}>{status}</div>
                </div>
            </div>
        );
    }
}
