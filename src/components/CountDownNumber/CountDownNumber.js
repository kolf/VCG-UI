import React from "react";
import PropTypes from "prop-types";

class CountDownNumber extends React.Component {
  static propTypes = {
    length: PropTypes.number,
    style: PropTypes.object
  };

  static defaultProps = {
    length: 100,
    style: {
      color: "#ff0000"
    }
  };

  state = {
    result: 0
  };

  timer = null;

  componentDidMount() {
    this.start();
  }

  start = () => {
    const { length } = this.props;
    this.timer = setInterval(() => {
      let result = this.state.result + Number.parseInt(Math.random() * 10 + 3);

      if (result >= length) {
        result = length - 1;
        clearInterval(this.timer);
      }

      this.setState({
        result
      });
    }, 300);
  };

  componentDidUnmout() {
    clearInterval(this.timer);
  }

  render() {
    const { style } = this.props;
    const { result } = this.state;
    return <span style={style}>{result}</span>;
  }
}

export default CountDownNumber;
