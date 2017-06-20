/**
 * @Author: will
 * @Date:   2017-06-19T17:49:44+08:00
 * @Filename: SwipeActionButton.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-20T15:05:39+08:00
 */



// SwipeActionButton.js

'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Theme from '../themes/Theme';

export default class SwipeActionButton extends TouchableOpacity {

  static propTypes = {
    ...TouchableOpacity.propTypes,
    type: PropTypes.oneOf(['default', 'danger']),
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    titleStyle: Text.propTypes.style,
  };

  static defaultProps = {
    ...TouchableOpacity.defaultProps,
    type: 'default',
  };

  buildProps() {
    let {style, type, title, titleStyle, children, ...others} = this.props;

    let backgroundColor, paddingHorizontal, textColor;
    switch (type) {
      case 'danger':
        backgroundColor = Theme.rowActionButtonDangerColor;
        textColor = Theme.rowActionButtonDangerTitleColor;
        break;
      default:
        backgroundColor = Theme.rowActionButtonColor;
        textColor = Theme.rowActionButtonTitleColor;
    }

    style = [{
      backgroundColor,
      paddingHorizontal: Theme.rowActionButtonPaddingHorizontal,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    }].concat(style);

    if (!React.isValidElement(title) && (title || title === 0)) {
      titleStyle = [{
        color: textColor,
        fontSize: Theme.rowActionButtonTitleFontSize,
        overflow: 'hidden',
      }].concat(titleStyle);
      title = <Text style={titleStyle} numberOfLines={1}>{title}</Text>;
    }
    if (title) children = title;

    this.props = {style, type, title, titleStyle, children, ...others};
  }

  render() {
    this.buildProps();
    return super.render();
  }
}
