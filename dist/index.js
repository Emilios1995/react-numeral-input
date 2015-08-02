// Generated by CoffeeScript 1.9.3
/** @jsx React.DOM */;
var NumeralInput, React, numeral;

React = require('react');

numeral = require('numeral');

NumeralInput = React.createClass({
  displayName: 'NumeralInput',
  propTypes: {
    value: React.PropTypes.isRequired,
    onChange: React.PropTypes.func,
    fmt: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      fmt: '0,0'
    };
  },
  getInitialState: function() {
    return {
      inputStyle: this.props.inputStyle,
      placeholder: this.props.placeholder,
      value: this.getNumeralValue(this.props.value)
    };
  },
  getNumeralValue: function(val) {
    return numeral(val).format(this.props.fmt);
  },
  componentWillReceiveProps: function(nextProps) {
    return this.setState({
      value: this.getNumeralValue(nextProps.value)
    });
  },
  changeHandler: function() {
    var inputValue;
    inputValue = numeral(this.getDOMNode().value).value();
    return this.setState({
      value: inputValue
    }, (function(_this) {
      return function() {
        if (_this.props.onChange) {
          return _this.props.onChange(inputValue);
        }
      };
    })(this));
  },
  render: function() {
    var props;
    props = this.props;
    return React.createElement("input", React.__spread({
      "type": "text"
    }, props, {
      "value": this.state.value,
      "onChange": this.changeHandler
    }));
  }
});

module.exports = NumeralInput;
