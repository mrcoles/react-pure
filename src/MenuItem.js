import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class PureMenuItem extends Component {
    static propTypes = {
        allowHover: PropTypes.bool,
        disabled: PropTypes.bool,
        hasChildren: PropTypes.bool,
        selected: PropTypes.bool
    };

    static defaultProps = {
        allowHover: false,
        disabled: false,
        hasChildren: false,
        selected: false
    };

    render() {
        const {
            allowHover,
            className,
            disabled,
            hasChildren,
            selected,
            ...props
        } = this.props;
        const cls = classNames(
            'pure-menu-item',
            className,
            allowHover && 'pure-menu-allow-hover',
            disabled && 'pure-menu-disabled',
            hasChildren && 'pure-menu-has-children',
            selected && 'pure-menu-selected'
        );

        return <li className={cls} {...props} />;
    }
}
