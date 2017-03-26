/**
 * @ngdoc react.component
 *
 * @name demo.react:datePicker
 *
 * @description
 * A style-able date picker.
 *
 * @requires React
 *
 * @param {string=} class The component is designed to be externally styled, but it is possible to apply
 *   additionally CSS classes to the element
 *
 * @usage
 * ```html
 * <DatePicker id="uniqueId"/>
 * ```
 *
 * @example
 * <div>
 *  <DatePicker id="dp1"/>
 * </div>
 *
 */

import React from 'react';
import SingleDatePicker from 'react-dates/lib/components/SingleDatePicker';
import 'react-dates/lib/css/_datepicker.css';

// Copied sections of code from https://github.com/airbnb/react-dates/blob/master/examples/SingleDatePickerWrapper.jsx
export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: props.autoFocus,
      date: props.initialDate,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  render() {
    const { focused, date } = this.state;

    return (
      <SingleDatePicker
        {...this.props}
        date={date}
        focused={focused}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
      />
    );
  }
}